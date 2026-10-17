async function testPage(path) {
  try {
    const res = await fetch('http://localhost:3000' + path);
    const text = await res.text();
    const titleMatch = text.match(/<title>([^<]+)<\/title>/);
    const canonicalMatch = text.match(/rel=["']canonical["']\s+href=["']([^"']+)["']/i) || text.match(/href=["']([^"']+)["']\s+rel=["']canonical["']/i);
    const hasOgTitle = text.includes('og:title');
    const hasOgImage = text.includes('og:image');
    const hasJsonLd = text.includes('application/ld+json');
    return {
      path,
      status: res.status,
      title: titleMatch ? titleMatch[1] : 'NOT FOUND',
      canonical: canonicalMatch ? canonicalMatch[1] : 'NOT FOUND',
      hasOgTitle,
      hasOgImage,
      hasJsonLd,
    };
  } catch (err) {
    return { path, error: err.message };
  }
}

async function run() {
  const pages = [
    '/',
    '/services',
    '/hsms',
    '/custom-software',
    '/about',
    '/projects',
    '/contact',
    '/software-company-guwahati',
    '/hospital-management-software-assam',
    '/web-development-guwahati'
  ];
  for (const p of pages) {
    const res = await testPage(p);
    console.log(res);
  }
}

run();
