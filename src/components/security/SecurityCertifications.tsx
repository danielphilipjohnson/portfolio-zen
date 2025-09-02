import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';
import GridItem from '@/components/ui/GridItem';
import { SECURITY_CERTIFICATIONS, SecurityCertification } from '@/data/security';
import { SectionHeader } from '@/components/about/SectionHeader';

interface CertificationCardProps {
	certification: SecurityCertification;
}

const CertificationCard = ({ certification }: CertificationCardProps) => {
	return (
		<div className="p-6 border border-[var(--color-stone-200)] bg-white rounded-lg transition-shadow hover:shadow-lg">
			<div className="flex items-start justify-between mb-4">
				<div className="flex-1">
					<Text as="h3" variant="h5" className="mb-2 text-[var(--color-stone-800)]">
						{certification.title}
					</Text>
					<Text as="p" variant="body-sm" className="text-[var(--color-moss-600)] font-medium">
						{certification.provider} • {certification.completedDate}
					</Text>
				</div>
				{certification.badgeUrl && (
					<div className="ml-4">
						<img
							src={certification.badgeUrl}
							alt={`${certification.title} Badge`}
							className="w-16 h-16 rounded-lg"
							onError={(e) => {
								// Fallback to emoji if image fails to load
								(e.target as HTMLImageElement).style.display = 'none';
								const fallback = document.createElement('div');
								fallback.className = 'w-16 h-16 bg-[var(--color-moss-100)] rounded-lg flex items-center justify-center text-2xl';
								fallback.textContent = '🏅';
								(e.target as HTMLImageElement).parentNode?.insertBefore(fallback, e.target);
							}}
						/>
					</div>
				)}
			</div>
			
			<Text as="p" variant="body" className="mb-4 text-[var(--color-stone-700)]">
				{certification.description}
			</Text>

			{certification.credentialUrl && certification.credentialUrl !== '#' && (
				<a
					href={certification.credentialUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center text-sm font-medium text-[var(--color-moss-600)] hover:text-[var(--color-moss-700)] transition-colors"
				>
					<span>View Credential</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				</a>
			)}
		</div>
	);
};

const SecurityCertifications = () => {
	return (
		<section className="py-16 bg-[var(--color-stone-50)]">
			<Container>
				<SectionHeader 
					icon="🎓" 
					title="Security Certifications" 
					variant="h2"
				/>
				
				<div className="mb-8">
					<Text as="p" variant="body" className="max-w-3xl text-[var(--color-stone-700)]">
						Completed comprehensive certification covering OWASP Top 10 vulnerabilities with focus on secure frontend and backend practices.
					</Text>
				</div>

				<Grid cols={1} gap="lg" className="md:grid-cols-1">
					{SECURITY_CERTIFICATIONS.map((cert, index) => (
						<GridItem key={index} span={1}>
							<CertificationCard certification={cert} />
						</GridItem>
					))}
				</Grid>

				<div className="mt-12 p-6 bg-[var(--color-moss-50)] border-l-4 border-[var(--color-moss-500)] rounded-r-lg">
					<Text as="h3" variant="h6" className="mb-2 text-[var(--color-stone-800)]">
						Continuous Learning
					</Text>
					<Text as="p" variant="body" className="text-[var(--color-stone-700)]">
						Security is an ever-evolving field. I stay current with the latest OWASP guidelines, security best practices, 
						and emerging threats through continuous education and practical application in real-world projects.
					</Text>
				</div>
			</Container>
		</section>
	);
};

export default SecurityCertifications;
