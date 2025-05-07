import BackToTop from "@/components/ui/BackToTop"

const ZenFooter = () => {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		navigation: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Work', href: '/work' },
			//{ label: 'Contact', href: '/contact' },
		],
		resources: [
			{ label: 'Blog', href: '/blog' },
			//{ label: 'Case Studies', href: '/case-studies' },
			//{ label: 'Resume', href: '/resume.pdf' },
		],
		social: [
			{
				label: 'GitHub',
				href: 'https://github.com/danielphilipjohnson',
				icon: (
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
				)
			},
			{
				label: 'LinkedIn',
				href: 'https://linkedin.com/in/daniel-philip-johnson',
				icon: (
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
					</svg>
				)
			},
			{
				label: 'Twitter',
				href: 'https://bsky.app/profile/daniel-philips-enterprise.com',
				icon: (
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 600 530">
						<path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
					</svg>
				)
			}
		]
	};

	return (
		<footer className="bg-[var(--color-stone-100)]">
			<div className="container px-6 py-12 mx-auto md:py-16">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-12">
					<div className="md:col-span-4">
						<div className="mb-6">
							<a
								href="#home"
								className="inline-block font-serif text-2xl tracking-wider transition-colors text-[var(--color-moss-700)]"
							>
								<span className="font-light">Daniel Philip </span>
								<span className="font-medium">Johnson</span>
							</a>
						</div>

						<p className="max-w-xs mb-6 text-sm leading-relaxed text-[var(--color-stone-600)]">
I craft meaningful web experiences through clean, scalable code and user-first design—driven by curiosity, care, and a passion for progress.						</p>
						{/* <Subscribe />*/}
					</div>

					<div className="md:col-span-2 md:col-start-6">
						<h3 className="mb-4 text-sm font-medium text-[var(--color-moss-700)]">
							Navigation
						</h3>

						<ul className="space-y-2">
							{footerLinks.navigation.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="inline-block text-sm transition-colors hover:underline text-[var(--color-stone-600)]"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="md:col-span-2">
						<h3 className="mb-4 text-sm font-medium text-[var(--color-moss-700)]">
							Resources
						</h3>

						<ul className="space-y-2">
							{footerLinks.resources.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="inline-block text-sm transition-colors hover:underline text-[var(--color-stone-600)]"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="md:col-span-3">
						<h3 className="mb-4 text-sm font-medium text-[var(--color-moss-700)]">
							Connect
						</h3>

						<div className="flex mb-4 space-x-4">
							{footerLinks.social.map((link, index) => (
								<a
									key={index}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="transition-colors text-[var(--color-stone-500)] hover:text-[var(--color-moss-600)]"
								>
									{link.icon}
								</a>
							))}
						</div>

						<div className="space-y-2">
							<p className="text-sm text-[var(--color-stone-600)]">
								<span className="block font-medium text-[var(--color-stone-800)]">Email:</span>
								<a
									href="mailto:hello@daniel.phil.johnson@google.com"
									className="hover:underline text-[var(--color-moss-600)]"
								>
									daniel.phil.johnson@google.com
								</a>
							</p>

							<p className="text-sm text-[var(--color-stone-600)]">
								<span className="block font-medium text-[var(--color-stone-800)]">Location:</span>
								Truro, Cornwall
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="py-4 border-t bg-white border-[var(--color-stone-200)]">
				<div className="container flex flex-col items-center justify-between px-6 mx-auto md:flex-row">
					<div className="mb-4 text-xs md:mb-0 text-[var(--color-stone-500)]">
						© {currentYear} Daniel Philip johnson. All rights reserved.
					</div>

					<div className="flex space-x-6">
						<BackToTop />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default ZenFooter;