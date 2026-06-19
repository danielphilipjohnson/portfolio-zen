import Link from 'next/link';
import { format, parse, isValid } from 'date-fns';
import Text from '@/components/ui/Text';

interface Note {
	slug: string;
	title: string;
	publishDate: string;
	excerpt: string | null;
	tags: string[];
}

interface NoteCardProps {
	note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
	const date = parse(note.publishDate, 'dd/MM/yyyy', new Date());
	const formattedDate = isValid(date) ? format(date, 'MMM d, yyyy') : note.publishDate;

	return (
		<Link href={`/notes/${note.slug}`} className="group block">
			<article className="h-full rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
				<div className="flex flex-col h-full">
					<div className="flex items-center gap-2 mb-3">
						<time className="text-xs text-[color:var(--color-stone-500)]">{formattedDate}</time>
					</div>

					<Text
						as="h2"
						variant="h4"
						className="mb-2 text-[color:var(--color-stone-900)] group-hover:text-[color:var(--color-moss-600)] transition-colors"
					>
						{note.title}
					</Text>

					{note.excerpt && (
						<p className="text-sm text-[color:var(--color-stone-600)] line-clamp-3 mb-4 flex-1">
							{note.excerpt}
						</p>
					)}

					{note.tags.length > 0 && (
						<div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[color:var(--color-stone-100)]">
							{note.tags.map(tag => (
								<span
									key={tag}
									className="px-2 py-0.5 text-xs rounded-md bg-[color:var(--color-stone-100)] text-[color:var(--color-stone-600)]"
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
			</article>
		</Link>
	);
}