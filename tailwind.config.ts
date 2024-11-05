// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'gradient-xy': 'gradient-xy 3s ease infinite',
//         'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//       keyframes: {
//         'gradient-xy': {
//           '0%, 100%': {
//             'background-size': '400% 400%',
//             'background-position': 'left center'
//           },
//           '50%': {
//             'background-size': '200% 200%',
//             'background-position': 'right center'
//           }
//         }
//       }
//     },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   plugins: [],
// };
// export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-xy': 'gradient-xy 3s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
};