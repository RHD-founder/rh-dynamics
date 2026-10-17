import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/seo-command"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot",
        ],
        allow: "/",
        disallow: ["/api/", "/seo-command"],
      },
    ],
    sitemap: "https://rhdynamics.in/sitemap.xml",
  };
}
