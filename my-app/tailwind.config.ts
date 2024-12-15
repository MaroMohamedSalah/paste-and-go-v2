import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",

				success: "var(--color-success)",
				error: "var(--color-error)",
				warning: "var(--color-warning)",
				info: "var(--color-info)",

				bgPrimary: "var(--bg-primary)",
				bgSecondary: "var(--bg-secondary)",

				textPrimary: "var(--text-primary)",
				textSecondary: "var(--text-secondary)",

				hoverPrimary: "var(--hover-primary)",
				hoverSecondary: "var(--hover-secondary)",
			},
		},
	},
	plugins: [],
} satisfies Config;
