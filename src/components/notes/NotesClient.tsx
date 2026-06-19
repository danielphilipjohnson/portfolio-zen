'use client';

import { useState, useMemo } from 'react';
import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import NoteCard from './NoteCard';

interface Note {
	id: string;
	slug: string;
	title: string;
	publishDate: string;
	excerpt: string | null;
	tags: string[];
}

interface NotesClientProps {
	notes: Note[];
	tags: string[];
}

export default function NotesClient({ notes, tags }: NotesClientProps) {
	const [activeTag, setActiveTag] = useState<string | null>(null);

	const filteredNotes = useMemo(() => {
		if (!activeTag) return notes;
		return notes.filter(note => note.tags.includes(activeTag));
	}, [notes, activeTag]);

	return (
		<main className="min-h-screen bg-[color:var(--color-stone-50)] pt-28 pb-20">
			<section className="pb-10">
				<Container>
					<div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-8 shadow-sm md:p-10">
						<p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--color-moss-700)]">
							Thoughts & Observations
						</p>
						<Text
							as="h1"
							variant="h1"
							weight="light"
							className="mb-5 text-[color:var(--color-stone-900)]"
						>
							Notes
						</Text>
						<Text className="text-[color:var(--color-stone-700)]">
							Short, informal pieces on frontend architecture, engineering craft, and systems thinking.
						</Text>
					</div>
				</Container>
			</section>

			<section className="py-10">
				<Container>
					{tags.length > 0 && (
						<div className="mb-8 flex flex-wrap gap-2">
							<button
								onClick={() => setActiveTag(null)}
								className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
									!activeTag
										? 'bg-[color:var(--color-moss-600)] text-white'
										: 'bg-white border border-[color:var(--color-stone-200)] text-[color:var(--color-stone-700)] hover:border-[color:var(--color-moss-400)]'
								}`}
							>
								All
							</button>
							{tags.map(tag => (
								<button
									key={tag}
									onClick={() => setActiveTag(tag)}
									className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
										activeTag === tag
											? 'bg-[color:var(--color-moss-600)] text-white'
											: 'bg-white border border-[color:var(--color-stone-200)] text-[color:var(--color-stone-700)] hover:border-[color:var(--color-moss-400)]'
									}`}
								>
									{tag}
								</button>
							))}
						</div>
					)}

					{filteredNotes.length === 0 ? (
						<Text className="text-[color:var(--color-stone-500)]">No notes found.</Text>
					) : (
						<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
							{filteredNotes.map(note => (
								<NoteCard key={note.id} note={note} />
							))}
						</div>
					)}
				</Container>
			</section>
		</main>
	);
}