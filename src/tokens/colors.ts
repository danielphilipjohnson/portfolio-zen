/**
 * Zen Garden Color System
 * 
 * A carefully curated palette inspired by natural elements found in Japanese gardens,
 * bonsai cultivation, and zen philosophy. Each color family represents aspects of
 * the natural world while maintaining a sense of harmony and tranquility.
 */

export const colors = {
	// Primary neutral palette - inspired by stone, sand, and earth
	stone: {
		50: "#f8f8f7",
		100: "#f0efed",
		200: "#e2e0db",
		300: "#d0ccc4",
		400: "#b3aea3",
		500: "#9a9487",
		600: "#82796b",
		700: "#6a6257",
		800: "#554e46",
		900: "#48413b",
		950: "#272320",
	},

	// Primary green palette - inspired by moss gardens and pine
	moss: {
		50: "#f4f7f4",
		100: "#e6ede5",
		200: "#cfdccc",
		300: "#adc2aa",
		400: "#87a484",
		500: "#698a65",
		600: "#526f50",
		700: "#405741",
		800: "#354737",
		900: "#2d3c2f",
		950: "#151e17",
	},

	// Secondary green - bamboo, new growth
	bamboo: {
		50: "#f7f9e8",
		100: "#eef3d0",
		200: "#dfe6a7",
		300: "#c6d272",
		400: "#abb84a",
		500: "#8b9932",
		600: "#6d7929",
		700: "#525c22",
		800: "#434c1f",
		900: "#3b421d",
		950: "#1f240e",
	},

	// Accent warm tones - clay, pottery, autumn leaves
	clay: {
		50: "#faf5f2",
		100: "#f3e9e3",
		200: "#e7d3c9",
		300: "#d8b6a6",
		400: "#c5957e",
		500: "#b17b61",
		600: "#a06751",
		700: "#845444",
		800: "#6e483c",
		900: "#5c3e35",
		950: "#301f1a",
	},

	// Accent cool tones - water, sky reflection
	water: {
		50: "#f2f7fa",
		100: "#e5eff4",
		200: "#c8dfe9",
		300: "#9ac6d8",
		400: "#64a5c3",
		500: "#4189af",
		600: "#3a7093",
		700: "#345b77",
		800: "#2f4d63",
		900: "#2b4255",
		950: "#192736",
	},

	// Special accents - flower blossoms, seasonal touches
	blossom: {
		50: "#fcf5f7",
		100: "#f9eaef",
		200: "#f4d5df",
		300: "#ecb4c6",
		400: "#e289a6",
		500: "#d66285",
		600: "#c24169",
		700: "#a33155",
		800: "#872c49",
		900: "#712a42",
		950: "#3f121f",
	},

	// Ink tones - for text and fine details
	ink: {
		50: "#f6f6f9",
		100: "#ececf2",
		200: "#d6d7e3",
		300: "#b3b6cd",
		400: "#888db3",
		500: "#6b709e",
		600: "#565a85",
		700: "#474a6d",
		800: "#3c3f5b",
		900: "#35374d",
		950: "#23232f",
	},

	// Warm neutrals - paper, natural fibers
	paper: {
		50: "#fcfaf6",
		100: "#f7f2e9",
		200: "#efe4d3",
		300: "#e3ceb1",
		400: "#d4b48e",
		500: "#c79c73",
		600: "#b88059",
		700: "#9b674b",
		800: "#7f5441",
		900: "#684739",
		950: "#37241d",
	},

	// Utility colors for interface elements
	success: {
		50: "#f1faf5",
		100: "#ddf3e4",
		200: "#bde5cd",
		300: "#90d1af",
		400: "#5cb586",
		500: "#3a9968",
		600: "#2b7c51",
		700: "#246443",
		800: "#1f5037",
		900: "#1b422f",
		950: "#0e2519",
	},
	warning: {
		50: "#fefaeb",
		100: "#fcf4c6",
		200: "#fae688",
		300: "#f7d14b",
		400: "#f4c221",
		500: "#e0aa0f",
		600: "#c18509",
		700: "#996109",
		800: "#7c4d10",
		900: "#674013",
		950: "#3a2109",
	},
	danger: {
		50: "#fef3f2",
		100: "#fde3e2",
		200: "#fbcccb",
		300: "#f8aaa8",
		400: "#f37976",
		500: "#ea4c47",
		600: "#d62a24",
		700: "#ba1f1a",
		800: "#991c19",
		900: "#7f1d1a",
		950: "#450a09",
	},
} as const;


export type ColorToken = keyof typeof colors;
export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type ColorPath = `${ColorToken}.${ColorShade}` | `${Extract<ColorToken, 'success' | 'warning' | 'danger'>}.${300 | 500 | 700}`;

type ColorObject = {
	[key: string]: string | ColorObject;
};

// Function to get a color from the palette using a path string
export function getColor(path: string): string {
	const parts = path.split('.');
	let result: ColorObject = colors;

	for (const part of parts) {
		if (result && typeof result === 'object' && part in result) {
			result = result[part] as ColorObject;
		} else {
			console.warn(`Color path "${path}" not found in color palette`);
			return '';
		}
	}

	return typeof result === 'string' ? result : '';
}

export default colors;