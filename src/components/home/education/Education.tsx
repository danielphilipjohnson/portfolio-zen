import Container from "@/components/ui/Container";
import { EducationProps } from '@/types/education';
import { defaultEducationItems } from '@/data/education';
import SectionHeader from '@/components/ui/SectionHeader';
import EducationItem from '@/components/home/education/EducationItem';
import EducationFooter from '@/components/home/education/EducationFooter';

const Education= ({
	title = "Educational Path",
	subtitle = "Academic foundations that shaped my approach to design and development",
}: Readonly<EducationProps>) => {
	return (
		<section 
			className="py-16 md:py-24 bg-moss-50/30"
			aria-label="Education section"
		>
			<Container>
				<SectionHeader title={title} subtitle={subtitle} />
				
				<div className="space-y-12 md:space-y-16">
					{defaultEducationItems.map((item) => (
						<EducationItem key={item.id} item={item} />
					))}
				</div>

				<EducationFooter />
			</Container>
		</section>
	);
};

export default Education;