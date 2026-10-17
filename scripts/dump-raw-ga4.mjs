import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

async function dump() {
  let credsRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON || process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!credsRaw) {
    try {
      credsRaw = await fs.readFile(path.join(process.cwd(), 'data', 'google-service-account.json'), 'utf-8');
    } catch {
      credsRaw = await fs.readFile(path.join(process.cwd(), 'google-service-account.json'), 'utf-8');
    }
  }
  const creds = JSON.parse(credsRaw);
  const now = Math.floor(Date.now() / 1000);
  const base64Url = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const header = { alg: 'RS256', typ: 'JWT' };
  const claimSet = {
    iss: creds.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };
  const unsignedToken = `${base64Url(header)}.${base64Url(claimSet)}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedToken);
  signer.end();
  const signature = signer.sign(creds.private_key, 'base64url');
  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });
  const tokenData = await res.json();
  const propertyId = '470856530';

  const reportRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'screenPageViews' },
          { name: 'sessions' }
        ],
        dimensions: [{ name: 'pageTitle' }],
        orderBys: [
          {
            metric: { metricName: 'screenPageViews' },
            desc: true
          }
        ]
      })
    }
  );

  const report = await reportRes.json();
  let totalViews = 0;
  let totalUsers = 0;
  let totalSessions = 0;

  console.log('--- GA4 PROPERTY ID: 470856530 (30-DAY HISTORICAL DATA) ---');
  console.log(`Date Range: 30daysAgo to today\n`);
  
  const formattedRows = report.rows.map((r, i) => {
    const title = r.dimensionValues[0].value;
    const users = parseInt(r.metricValues[0].value, 10);
    const views = parseInt(r.metricValues[1].value, 10);
    const sessions = parseInt(r.metricValues[2].value, 10);
    totalUsers += users;
    totalViews += views;
    totalSessions += sessions;
    return {
      index: i + 1,
      pageTitle: title,
      views,
      users,
      sessions
    };
  });

  console.table(formattedRows);
  console.log(`\n==========================================`);
  console.log(`Total Rows (Pages): ${formattedRows.length}`);
  console.log(`TOTAL SCREEN PAGE VIEWS (Sum of rows): ${totalViews}`);
  console.log(`TOTAL ACTIVE USERS (Sum of rows): ${totalUsers}`);
  console.log(`TOTAL SESSIONS (Sum of rows): ${totalSessions}`);
  console.log(`==========================================`);
}

dump().catch(console.error);
