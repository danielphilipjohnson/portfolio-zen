import Container from '@/components/ui/Container';
import { courses } from '@/data/courses';
import SectionHeader from '@/components/ui/SectionHeader';
import OnlineCoursesClient from '@/components/home/online-courses/OnlineCoursesClient';
import { OnlineCourse } from '@/types/online-course';

interface OnlineCoursesProps {
	title?: string;
	subtitle?: string;
	courses?: OnlineCourse[];
}

const OnlineCourses = ({
	title = "Continuous Learning",
	subtitle = "Online courses and certifications that have expanded my skills and knowledge",
	courses: propCourses = courses
}: Readonly<OnlineCoursesProps>) => {
	const categories = ["ALL", ...Array.from(new Set(propCourses.map(course => course.category)))];

	return (
		<section className="py-16 md:py-24 bg-stone-50">
			<Container>
				<SectionHeader title={title} subtitle={subtitle} />
				<OnlineCoursesClient courses={propCourses} categories={categories} />
			</Container>
		</section>
	);
};

export default OnlineCourses;