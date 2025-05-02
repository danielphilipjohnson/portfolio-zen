"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const ZenNavbar = () => {
	// State for mobile menu toggle
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const navLinks = [
		{ id: 'home', label: 'Home', href: '/' },
		{ id: 'about', label: 'About', href: '/about' },
		{ id: 'work', label: 'Work', href: '/projects' },
		{ id: 'blog', label: 'Blog', href: '/blog' },
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		// Prevent scrolling when menu is open
		if (!isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	};
	
	return (
		<header
			className="fixed z-50 w-full transition-all duration-300 bg-white"
		>
			<div className="container px-6 mx-auto">
				<div className="flex items-center justify-between h-20">
					<Link
						href="/"
						className="font-serif text-xl tracking-wider transition-colors text-[color:var(--color-stone-800)]"
					>
						<span className="font-light">Daniel</span>
						<span className="font-medium">Johnson</span>
					</Link>

					<nav className="items-center hidden space-x-1 md:flex">
						{navLinks.map(link => (
							<Link
								key={link.id}
								href={link.href}
								className={cn(
									"relative px-4 py-2 text-sm transition-all hover:text-[color:var(--color-moss-500)]",
									pathname === link.href && "text-[color:var(--color-moss-500)]"
								)}
							>
								{link.label}
								{pathname === link.href && (
									<span
										className="absolute bottom-0 left-4 right-4 h-0.5 transition-all bg-[color:var(--color-moss-500)]"
									></span>
								)}
							</Link>
						))}
						<Link
							href="/contact"
							className="px-4 py-2 ml-4 text-sm transition-colors border bg-[color:var(--color-moss-600)] border-[color:var(--color-moss-600)] text-white hover:bg-[color:var(--color-moss-700)] hover:border-[color:var(--color-moss-700)]"
						>
							Get in Touch
						</Link>
					</nav>

					<button
						className={cn(
							"relative z-[60] transition-colors md:hidden focus:outline-none text-[color:var(--color-stone-600)]"
						)}
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</div>
			</div>

			<div
				className={cn(
					"md:hidden fixed inset-0 transition-all duration-300 z-50 bg-white pt-20",
					isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				)}
			>
				<nav className="flex flex-col items-center pt-6 space-y-6">
					{navLinks.map(link => (
						<Link
							key={link.id}
							href={link.href}
							className={cn(
								"relative text-lg transition-colors hover:text-[color:var(--color-clay-600)]",
								pathname === link.href ? "text-[color:var(--color-clay-600)]" : "text-[color:var(--color-stone-600)]"
							)}
						>
							{link.label}
							{pathname === link.href && (
								<span
									className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-[color:var(--color-clay-400)]"
								></span>
							)}
						</Link>
					))}
					<Link
						href="#contact"
						className="px-6 py-2 mt-6 transition-colors border bg-[color:var(--color-clay-600)] border-[color:var(--color-clay-600)] text-white hover:bg-[color:var(--color-clay-700)] hover:border-[color:var(--color-clay-700)]"
					>
						Get in Touch
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default ZenNavbar;