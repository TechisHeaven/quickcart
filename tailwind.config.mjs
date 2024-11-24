/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        h1: "2.25rem",
        h2: "1.875rem",
        h3: "1.5rem",
        h4: "1.25rem",
        h5: "1.125rem",
        h6: "1rem",
        p: "1rem",
      },
      fontWeight: {
        h1: "700",
        h2: "600",
        h3: "500",
        h4: "500",
        h5: "400",
        h6: "400",
        p: "400",
      },
    },
  },
  plugins: [],
};
