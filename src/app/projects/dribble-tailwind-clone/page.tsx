import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import RedirectClient from "@/components/RedirectClient";

export const metadata: Metadata = {
	title: "Redirecting...",
	alternates: {
		canonical: `${SITE_URL}/projects/dribbble-tailwind-clone`,
	},
};

export default function RedirectPage() {
	return <RedirectClient to="/projects/dribbble-tailwind-clone" />;
}
