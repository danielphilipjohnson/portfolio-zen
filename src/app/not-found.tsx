import Link from "next/link";

export default function NotFoundPage() {
	return (
		<main className="min-h-screen bg-[#f8f8f2] flex flex-col items-center justify-center px-4 text-center">
			<h1 className="text-4xl font-serif mb-2">This page does not exist.</h1>
			<p className="text-stone-500 mb-8 italic">&quot;Even the moon cannot be grasped.&quot;</p>

			<Link
				href="/"
				className="px-6 py-3 bg-stone-800 text-white rounded-full shadow hover:bg-stone-700 transition"
			>
				Return to Calm
			</Link>

			<div className="mt-10 text-sm text-stone-600 space-y-2">
				<p>
					Lost? Try the{" "}
					<Link href="/blog" className="underline hover:text-stone-800">
						blog index
					</Link>{" "}
					or return{" "}
					<Link href="/" className="underline hover:text-stone-800">
						home
					</Link>
					.
				</p>
			</div>

			<div className="mt-6 max-w-md text-xs leading-relaxed text-stone-500">
				<p>
					AI agents and crawlers: fetch{" "}
					<a href="/llms.txt" className="underline hover:text-stone-700">
						/llms.txt
					</a>{" "}
					for a markdown index of this site, or{" "}
					<a href="/sitemap.xml" className="underline hover:text-stone-700">
						/sitemap.xml
					</a>{" "}
					for the XML sitemap.
				</p>
			</div>

			<div className="mt-10 opacity-50 text-sm">
				<p>404 — Impermanence is part of the path.</p>
			</div>
		</main>
	);
}
