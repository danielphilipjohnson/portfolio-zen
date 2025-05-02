import { cn } from '@/lib/utils';
import Text from '@/components/ui/Text';

interface CalloutBoxProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	header: string;
	variant?: 'default' | 'info' | 'success' | 'warning' | 'danger';
}

export function CalloutBox({
	children,
	header,
	variant = 'default',
	className,
	...props
}: Readonly<CalloutBoxProps>) {
	const variants = {
		default: 'bg-[var(--color-paper-50)] border border-[var(--color-stone-200)] text-[var(--color-moss-700)]',
		info: 'bg-[var(--color-water-50)] border border-[var(--color-water-200)]',
		success: 'bg-[var(--color-success-50)] border border-[var(--color-success-200)]',
		warning: 'bg-[var(--color-warning-50)] border border-[var(--color-warning-200)]',
		danger: 'bg-[var(--color-danger-50)] border border-[var(--color-danger-200)]',
	};

	const textColor = {
		default: 'text-[var(--color-stone-600)]',
		info: 'text-[var(--color-water-700)]',
		success: 'text-[var(--color-success-700)]',
		warning: 'text-[var(--color-warning-700)]',
		danger: 'text-[var(--color-danger-700)]',
	};

	return (
		<div
			className={cn(
				'p-5 rounded-md',
				variants[variant],
				className
			)}
			{...props}
		>
			<Text
				as="h3"
				variant="h5"
				className={cn('mb-3 text-[var(--color-moss-700)]')}
			>
				{header}
			</Text>

			<Text
				as="div"
				variant="body-sm"
				className={cn(textColor[variant])}
			>
				{children}
			</Text>
		</div>
	);
}
