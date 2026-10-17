import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

async function fetchGeoReport() {
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
  const token = tokenData.access_token;

  console.log('=== AUTHENTICATED WITH GA4 PROPERTY: 470856530 ===\n');

  // 1. Report: Country Breakdown
  const countryRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'userEngagementDuration' }
        ],
        dimensions: [{ name: 'country' }],
        orderBys: [
          {
            metric: { metricName: 'screenPageViews' },
            desc: true
          }
        ]
      })
    }
  );
  const countryData = await countryRes.json();

  console.log('--- 1. ALL VISITORS BY COUNTRY (30 Days) ---');
  console.log(JSON.stringify(countryData.rows.map(r => ({
    country: r.dimensionValues[0].value,
    users: parseInt(r.metricValues[0].value, 10),
    sessions: parseInt(r.metricValues[1].value, 10),
    pageViews: parseInt(r.metricValues[2].value, 10)
  })), null, 2));

  // 2. Report: City / Region Breakdown
  const cityRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' }
        ],
        dimensions: [
          { name: 'country' },
          { name: 'region' },
          { name: 'city' }
        ],
        orderBys: [
          {
            metric: { metricName: 'screenPageViews' },
            desc: true
          }
        ],
        limit: 30
      })
    }
  );
  const cityData = await cityRes.json();

  console.log('\n--- 2. TOP CITIES & REGIONS (Trailing 30 Days) ---');
  console.log(JSON.stringify(cityData.rows.map(r => ({
    country: r.dimensionValues[0].value,
    region: r.dimensionValues[1].value,
    city: r.dimensionValues[2].value,
    users: parseInt(r.metricValues[0].value, 10),
    sessions: parseInt(r.metricValues[1].value, 10),
    pageViews: parseInt(r.metricValues[2].value, 10)
  })), null, 2));

  // 3. Report: Traffic Source / Medium for Top Countries
  const sourceRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' }
        ],
        dimensions: [
          { name: 'country' },
          { name: 'sessionSourceMedium' }
        ],
        orderBys: [
          {
            metric: { metricName: 'sessions' },
            desc: true
          }
        ],
        limit: 25
      })
    }
  );
  const sourceData = await sourceRes.json();

  console.log('\n--- 3. TRAFFIC SOURCES BY COUNTRY (How They Arrived) ---');
  const sourceRows = (sourceData.rows || []).map((r, i) => {
    return {
      Rank: i + 1,
      Country: r.dimensionValues[0].value,
      SourceMedium: r.dimensionValues[1].value,
      ActiveUsers: parseInt(r.metricValues[0].value, 10),
      Sessions: parseInt(r.metricValues[1].value, 10)
    };
  });
  console.table(sourceRows);

  // 4. Report: What Pages International Visitors View
  const pageRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'activeUsers' }
        ],
        dimensions: [
          { name: 'country' },
          { name: 'pagePath' }
        ],
        orderBys: [
          {
            metric: { metricName: 'screenPageViews' },
            desc: true
          }
        ],
        limit: 30
      })
    }
  );
  const pageData = await pageRes.json();

  console.log('\n--- 4. TOP PAGES VIEWED BY COUNTRY ---');
  const pageRows = (pageData.rows || []).map((r, i) => {
    return {
      Rank: i + 1,
      Country: r.dimensionValues[0].value,
      PagePath: r.dimensionValues[1].value,
      PageViews: parseInt(r.metricValues[0].value, 10),
      Users: parseInt(r.metricValues[1].value, 10)
    };
  });
  console.table(pageRows);
}

fetchGeoReport().catch(console.error);
