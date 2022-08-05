/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: theme('colors.gray.800'),

            // ...
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
