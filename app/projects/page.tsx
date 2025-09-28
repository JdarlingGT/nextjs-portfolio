import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FeaturedWorkSection } from "@/components/sections/featured-work";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Browse my projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FeaturedWorkSection />
      </main>
      <Footer />
    </div>
  );
}
