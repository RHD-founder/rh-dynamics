async function testPage(path) {
  try {
    const res = await fetch('http://localhost:3000' + path);
    const text = await res.text();
    const titleMatch = text.match(/<title>([^<]+)<\/title>/);
    const hasOgTitle = text.includes('og:title');
    const hasOgImage = text.includes('og:image');
    const hasCanonical = text.includes('rel="canonical"') || text.includes("rel='canonical'");
    const hasJsonLd = text.includes('application/ld+json');
    return {
      path,
      status: res.status,
      title: titleMatch ? titleMatch[1] : 'NOT FOUND',
      hasOgTitle,
      hasOgImage,
      hasCanonical,
      hasJsonLd,
    };
  } catch (err) {
    return { path, error: err.message };
  }
}

async function run() {
  const pages = ['/', '/services', '/hsms', '/custom-software', '/about', '/projects', '/contact'];
  for (const p of pages) {
    const res = await testPage(p);
    console.log(res);
  }
}

run();
