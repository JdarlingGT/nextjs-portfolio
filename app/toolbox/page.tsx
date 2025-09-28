import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ToolboxSection } from "@/components/sections/toolbox";

export const metadata = {
  title: "Toolbox | Portfolio",
  description: "Explore the tools and technologies I use.",
};

export default function ToolboxPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ToolboxSection />
      </main>
      <Footer />
    </div>
  );
}
