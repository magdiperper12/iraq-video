import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// Semantic palette
				background: '#0b0b0c',
				foreground: '#f5f6f7',
				primary: '#f3f3ffee', // Indigo-600
				secondary: '#06b6d4', // Cyan-500
				third: '#00aaffd8',
				forth: '#4f46e5',
				darkprimary: '#0b0b0c',
				darksecoundry: '#1f2937',
				darkthird: '#0095ff',
				darkforth: '#f5f6f7',
				accent: '#001effbd', // Amber-500
				muted: '#9ca3af', // Gray-400
				card: '#111214',
				'card-foreground': '#e5e7eb',
				border: '#1f2937',
			},
			animation: {
				fadeIn: 'fadeIn 0.7s ease-in-out forwards',
				'slide-in-down': 'slideInDown 0.6s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideInDown: {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			boxShadow: {
				'custom-light': '0 6px 20px rgba(79, 70, 229, 0.25)',
				'custom-dark': '0 4px 14px rgba(0, 0, 0, 0.6)',
				glow: '0 0 20px rgba(6, 182, 212, 0.45)',
				'inner-glow': 'inset 0 2px 6px rgba(0, 0, 0, 0.6)',
			},
			borderRadius: {
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
		},
	},
	darkMode: 'class', // Enable dark mode using class-based approach
	plugins: [],
};

export default config;
