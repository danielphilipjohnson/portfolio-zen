import ContactPage from "@/components/contact/contact";
import { getContactPageJsonLd } from "@/utils/jsonLd";
import StructuredData from "../StructuredData";

export default function Page() {

	const contactPageJsonLdData = getContactPageJsonLd();
	return (
		<>
			<StructuredData data={contactPageJsonLdData} id="contact-page-jsonld" />
			<ContactPage />
		</>
	)
}
