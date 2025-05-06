export default function manifest() {
  return {
    name: "RH Dynamics",
    short_name: "RH Dynamics",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/android-touch-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-touch-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
