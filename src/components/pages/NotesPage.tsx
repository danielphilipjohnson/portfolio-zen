import { getAllNotes } from '@/lib/content/getAllNotes';
import NotesClient from '@/components/notes/NotesClient';
import { parse } from 'date-fns';

const NotesPage = async () => {
	const notes = await getAllNotes();

	const mappedNotes = notes
		.map(note => ({
			...note,
			parsedDate: parse(note.publishDate, 'dd/MM/yyyy', new Date()),
		}))
		.sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime())

	const allTags = [...new Set(mappedNotes.flatMap(note => note.tags))].sort();

	return (
		<NotesClient notes={mappedNotes} tags={allTags} />
	);
};

export default NotesPage;