import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import RedirectClient from "@/components/RedirectClient";

export const metadata: Metadata = {
	title: "Redirecting...",
	alternates: {
		canonical: `${SITE_URL}/blog/monthly-reflection-april-2021`,
	},
};

export default function RedirectPage() {
	return <RedirectClient to="/blog/monthly-reflection-april-2021" />;
}
