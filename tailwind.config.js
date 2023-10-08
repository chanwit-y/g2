module.exports = {
	content: ['./src/**/*.{svelte,js,ts}'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'acid',
			'aqua',
			'autumn',
			'black',
			'bumblebee',
			'business',
			'cmyk',
			'coffee',
			'corporate',
			'cupcake',
			'cyberpunk',
			'dark',
			'dracula',
			'emerald',
			'fantasy',
			'forest',
			'garden',
			'halloween',
			'lemonade',
			'light',
			'lofi',
			'luxury',
			'night',
			'pastel',
			'retro',
			'synthwave',
			'valentine',
			'winter',
			'wireframe'
		]
	},
	theme: {
		extend: {
			keyframes: {
			  wave: {
			    '0%': { transform: 'rotate(0.0deg)' },
			    '10%': { transform: 'rotate(14deg)' },
			    '20%': { transform: 'rotate(-8deg)' },
			    '30%': { transform: 'rotate(14deg)' },
			    '40%': { transform: 'rotate(-4deg)' },
			    '50%': { transform: 'rotate(10.0deg)' },
			    '60%': { transform: 'rotate(0.0deg)' },
			    '100%': { transform: 'rotate(0.0deg)' },
			  },
			  zoom: {
			    '0%': { transform: 'scale(1.05)' },
			    '10%': { transform: 'scale(1)' },
			    '100%': { transform: 'scale(1.2)' },
			  },
			},
			animation: {
				'waving-hand': 'wave 2s linear infinite',
				'zoom-box': 'zoom 2s  ease-in-out alternate',
			      },
		      },
	}
};
