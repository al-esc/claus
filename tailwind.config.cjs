module.exports = {
  content: [
	"./src/**/*.{html,js,svelte,ts}",
	"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
	extend: {
	  colors: {
		secondary: "#2c83d3",
		primary: "#bf79d6"
	  },
	  backgroundImage: {
		'container': "url('/bg.webp')"
	  }
	},
	backgroundSize: {
		'invite': 'auto 110%',
		'invite-mobile': 'auto 140%'
	},
	fontFamily: {
	  'heading': ['Tangerine', 'cursive'],
	  'body': ['"Crimson Text"', 'serif']
	},
  },
  plugins: [
	require('@tailwindcss/forms'),
	require('flowbite/plugin')
  ]
}
