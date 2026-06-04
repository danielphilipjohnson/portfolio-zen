import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Architecture | Daniel Johnson",
  description: "Patterns and principles for frontend at scale.",
};

export default function FrontendArchitectureTagPage() {
  redirect("/engineering/frontend-architecture");
}
