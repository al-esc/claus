module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        blue: "#2c83d3",
        purple: "#bf79d6"
      }
    },
    fontFamily: {
      'heading': ['Tangerine', 'cursive'],
      'body': ['"Crimson Text"', 'serif']
    },
  },
  plugins: [require('@tailwindcss/forms')]
}
