import type { Config } from "tailwindcss";

// ============================================================
// tailwind.config.ts — NeverMind.co.il
// קובץ קונפיגורציה עיצובי מרכזי
// כאן מוגדרים חוקי העיצוב המוחלטים של האתר
// ============================================================

const config: Config = {
  // ── תוכן (Content Paths) ─────────────────────────────────
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // ── צבעים (Colors) ─────────────────────────────────────
      colors: {
        // TODO: הדבק כאן את צבעי המותג
        // דוגמה:
        // brand: {
        //   primary:   "#______",
        //   secondary: "#______",
        //   accent:    "#______",
        //   dark:      "#______",
        //   light:     "#______",
        // },
      },

      // ── פונטים (Font Family) ────────────────────────────────
      fontFamily: {
        // TODO: הדבק כאן את הפונטים
        // דוגמה:
        // sans:    ["__FONT__", "sans-serif"],
        // heading: ["__FONT__", "serif"],
        // mono:    ["__FONT__", "monospace"],
      },

      // ── גדלי פונט (Font Size) ───────────────────────────────
      fontSize: {
        // TODO: הגדר סקאלת טיפוגרפיה
      },

      // ── ריווח (Spacing / Padding / Margin) ─────────────────
      spacing: {
        // TODO: הוסף ריווחים מותאמים אישית
      },

      // ── נקודות שבירה (Breakpoints) ──────────────────────────
      screens: {
        // TODO: עדכן לפי הצורך
        // "xs":  "480px",
        // "sm":  "640px",
        // "md":  "768px",
        // "lg":  "1024px",
        // "xl":  "1280px",
        // "2xl": "1536px",
      },

      // ── רדיוס פינות (Border Radius) ────────────────────────
      borderRadius: {
        // TODO: הגדר עיגולי פינות
},

      // ── צללים (Box Shadow) ──────────────────────────────────
      boxShadow: {
        // TODO: הגדר צללים מותאמים
      },

      // ── אנימציות (Animations / Keyframes) ───────────────────
      keyframes: {
        // TODO: הגדר keyframes מותאמים
      },
      animation: {
        // TODO: הגדר אנימציות מותאמות
      },
},
},

  // ── תוספים (Plugins) ──────────────────────────────────────
  plugins: [
        // TODO: הוסף plugins לפי הצורך
        // require("@tailwindcss/typography"),
        // require("@tailwindcss/forms"),
      ],
    };

export default config;
