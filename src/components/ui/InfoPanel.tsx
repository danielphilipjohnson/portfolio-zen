import React, { ReactNode } from 'react';
import { Text } from './Text';
import { ColorPath } from '@/tokens/colors';
import { cn } from '@/lib/utils';


interface InfoPanelProps {
	title: string;
	children: ReactNode;
	className?: string;
	borderColor?: ColorPath;
	backgroundColor?: ColorPath;
	borderSize?: 'sm' | 'md' | 'lg';
}

const InfoPanel = ({
	title,
	children,
	className,
	borderColor = 'moss.500',
	backgroundColor = 'moss.50',
	borderSize = 'sm'
}: InfoPanelProps) => {
	const borderSizeClasses = {
		sm: 'border-l-2',
		md: 'border-l-4',
		lg: 'border-l-8'
	};

	return (
		<div
			className={cn(
				"p-6 py-4 border-solid mb-4",
				borderSizeClasses[borderSize],
				`bg-[var(--color-${backgroundColor.replace('.', '-')})]`,
				className
			)}
			style={{
				borderLeftColor: `var(--color-${borderColor.replace('.', '-')})`,
			}}
		>

			<h4 className="mb-3 text-base font-medium text-[var(--color-stone-700)]">
				{title}
			</h4>
			{typeof children === 'string' ? (
				<Text
					variant="body-sm"
					className="leading-relaxed text-[var(--color-stone-600)]"
				>
					{children}
				</Text>
			) : (
				children
			)}
		</div>
	);
};

export default InfoPanel;