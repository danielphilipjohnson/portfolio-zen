import Container from "@/components/ui/Container"
//import ContactForm from '@/components/home/contact/ContactForm';
import ContactInfo from '@/components/home/contact/ContactInfo';
import ContactHeader from '@/components/home/contact/ContactHeader';
import ContactQuote from '@/components/home/contact/ContactQuote';

const ContactCard = () => {
	return (
		<>
			<section className=" bg-[var(--color-stone-100)] py-16">
				<Container>
					<ContactHeader />
					<div className="justify-center gap-12 lg:flex">
						<ContactInfo />
						{/*<ContactForm />*/}
					</div>
				</Container>
			</section>
			<section className=' bg-[var(--color-stone-50)] py-16'>
				<Container>
					<ContactQuote />
				</Container>
			</section>
		</>
		
	);
};

export default ContactCard;