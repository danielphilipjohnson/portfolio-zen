'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
	to: string;
}

export default function RedirectClient({ to }: Props) {
	const router = useRouter();

	useEffect(() => {
		router.replace(to);
	}, [router, to]);

	return (
		<div className="flex min-h-[50vh] items-center justify-center">
			<p>
				This page has moved.{' '}
				<a href={to} className="underline">
					Click here if you are not redirected.
				</a>
			</p>
		</div>
	);
}
