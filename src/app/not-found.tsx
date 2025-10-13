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

			<div className="mt-10 opacity-50 text-sm">
				<p>404 — Impermanence is part of the path.</p>
			</div>
		</main>
	);
}
