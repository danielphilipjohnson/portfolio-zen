import React, { JSX, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';


export type TextElement = keyof Pick<
	JSX.IntrinsicElements,
	| "p"
	| "span"
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "strong"
	| "em"
	| "b"
	| "i"
	| "pre"
	| "div"
>;

// Define text variants using class-variance-authority
const textVariants = cva('text-slate-800 font-sans', {
	variants: {
		variant: {
			// Heading styles - embracing zen simplicity with clean, minimal styling
			h1: 'text-4xl md:text-5xl font-light tracking-tight leading-tight',
			h2: 'text-3xl md:text-4xl font-extralight tracking-tight leading-tight',
			h3: 'text-2xl md:text-3xl font-light tracking-tight leading-snug',
			h4: 'text-xl md:text-2xl leading-snug',
			h5: 'text-lg md:text-xl font-normal leading-normal',
			h6: 'text-base md:text-lg font-normal leading-normal',

			// Body text variants - focus on readability with slightly looser tracking
			'body-medium': 'text-base font-medium leading-relaxed tracking-wide',
			body: 'text-base font-normal leading-relaxed tracking-wide',
			'body-sm': 'text-sm font-normal',

			// Special zen-inspired text styles
			quote: 'text-md italic font-light leading-relaxed tracking-wide text-slate-700 py-1',
			caption: 'text-sm font-light text-slate-600 leading-normal tracking-wide',
			subtle: 'text-sm font-light text-slate-500 leading-normal tracking-wider',

			// Functional text
			label: 'text-sm font-medium tracking-wide text-slate-700',
			button: 'text-base font-medium tracking-wide',
		},

		// Font family options
		fontFamily: {
			sans: 'font-sans',
			serif: 'font-serif',
			mono: 'font-mono',
		},

		// Custom weight options beyond the defaults
		weight: {
			thin: 'font-thin',
			extralight: 'font-extralight',
			light: 'font-light',
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},

		// Special visual treatments
		treatment: {
			normal: '',
			faded: 'text-opacity-75',
			highlight: 'bg-sage-50 dark:bg-sage-900/20 px-1 py-0.5 rounded',
			underlined: 'underline decoration-sage-500 underline-offset-2 decoration-1',
		},

		// Alignment options
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
		},
	},
	defaultVariants: {
		variant: 'body',
		fontFamily: 'sans',
		treatment: 'normal',
		align: 'left',
	},
});

// Props interface extending VariantProps
export interface TextProps
	extends React.HTMLAttributes<HTMLElement>,
	VariantProps<typeof textVariants> {
	children: ReactNode;
	as?: TextElement;
	className?: string;
}

/**
 * Text component for consistent typography across the application.
 * Follows zen design principles with focus on simplicity, naturalness and tranquility.
 */
export const Text = ({
	children,
	as,
	variant,
	fontFamily,
	weight,
	treatment,
	align,
	className,
	...props
}: TextProps) => {
	// Determine which HTML element to render based on variant or explicit 'as' prop
	const Component: TextElement = as || 'p';

	return (
		<Component
			className={cn(
				textVariants({ variant, fontFamily, weight, treatment, align }),
				className
			)}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Text;