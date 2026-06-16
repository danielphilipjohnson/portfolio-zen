import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllProjects } from '@/lib/content/getAllProjects';
import ProjectSinglePage from '@/components/pages/ProjectSinglePage';
import StructuredData from '@/components/StructuredData';
import { getSingleProjectJsonLd } from '@/utils/jsonLd';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Text } from '@/components/ui/Text';
import { CalloutBox } from '@/components/CalloutBox';
import { SITE_URL } from '@/lib/constants';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function generateStaticParams() {
	const { projects } = await getAllProjects();
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const { projects } = await getAllProjects();
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return {
			title: 'Project Not Found',
		};
	}

	return {
		title: `${project.title} | Daniel Philip Johnson`,
		description: project.description,
		openGraph: {
			title: project.title,
			description: project.description || '',
			url: `${SITE_URL}/projects/${slug}`,
			images: [{ url: project.imageUrl }],
			type: 'article',
		},
	};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	
	// We need to find the actual filename for this slug
	const filenames = fs.readdirSync(projectsDirectory);
	let targetFile = '';
	let projectData: any = null;

	for (const filename of filenames) {
		const filePath = path.join(projectsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const { data } = matter(fileContents);
		const projectSlug = data.slug || filename.replace(/\.mdx$/, '');
		
		if (projectSlug === slug) {
			targetFile = filePath;
			projectData = data;
			break;
		}
	}

	if (!targetFile) {
		notFound();
	}

	const source = fs.readFileSync(targetFile, 'utf8');
	const { content } = matter(source);

	const mdxContent = await MDXRemote({
		source: content,
		components: {
			h1: (props) => <Text as="h1" variant="h1" className="mb-6 mt-8" {...props} />,
			h2: (props) => <Text as="h2" variant="h3" className="mb-4 mt-8" {...props} />,
			h3: (props) => <Text as="h3" variant="h4" className="mb-3 mt-6" {...props} />,
			p: (props) => <Text as="p" variant="body" className="mb-4 text-stone-700" {...props} />,
			ul: (props) => <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700" {...props} />,
			ol: (props) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-stone-700" {...props} />,
			li: (props) => <li className="pl-2" {...props} />,
			CalloutBox,
		}
	});

	const project = {
		...projectData,
		slug: slug,
		content: '', // Content is handled by MDXRemote
	};

	const projectJsonLd = getSingleProjectJsonLd({
		slug: slug,
		title: project.title,
		imageUrl: project.imageUrl,
		excerpt: project.description,
	});
	
	return (
		<>
			<StructuredData data={projectJsonLd} id="project-page-jsonld" />
			<ProjectSinglePageWrapper project={project} content={mdxContent} />
		</>
	);
}

// Small wrapper since ProjectSinglePage expects a string for content (oops)
function ProjectSinglePageWrapper({ project, content }: { project: any, content: any }) {
    const projectWithRenderedContent = {
        ...project,
        content: '' // dummy
    };
    
    return (
        <ProjectSinglePage project={projectWithRenderedContent}>
            {content}
        </ProjectSinglePage>
    );
}

// I need to update ProjectSinglePage to accept children
