import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Resume | Portfolio",
  description: "Experience, education, and skills"
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-4">Experience</h1>
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold">Marketing Director, Graston Technique®</h2>
              <p className="text-sm text-muted-foreground">Aug 2023 – Present · Indianapolis, IN</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>Architect and lead integrated marketing ecosystem using LearnDash, WooCommerce, WP Fusion, Gravity Forms, Uncanny Automator, and FluentCRM.</li>
                <li>Develop AI-powered chatbots and automations to streamline CEU support and product experience.</li>
                <li>Built custom dashboards with GA4/Mapbox to display analytics for providers and internal teams.</li>
                <li>Migrate and optimize performance via Cloudflare Workers, WP Rocket, LiteSpeed, and CDN.</li>
                <li>Manage cross-functional sprints with developers, designers, and instructors.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Interim Director of Marketing, Ultimate Technologies Group</h2>
              <p className="text-sm text-muted-foreground">Mar 2023 – Jul 2023 · Fishers, IN</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>Led go-to-market strategy across channels with a focus on advertising, email, and branding.</li>
                <li>Implemented analytics and performance measurement through Google Analytics and market research.</li>
                <li>Drove cross-team collaboration and business development initiatives.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Marketing Manager & Administrator, Riley Bennett Egloff LLP</h2>
              <p className="text-sm text-muted-foreground">Jun 2015 – Mar 2023 · Indianapolis, IN</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>Managed content marketing, design, website development, and email campaigns.</li>
                <li>Developed marketing plans and business development strategies with attorneys.</li>
                <li>Led public relations and media outreach for firm initiatives.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Marketing Coordinator, Deerfield Financial Advisors</h2>
              <p className="text-sm text-muted-foreground">Jun 2013 – Jun 2015 · Indianapolis, IN</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>Executed marketing campaigns, client events, and digital content.</li>
                <li>Improved client services and compliance through process automation.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Marketing Coordinator, Pike Medical Consultants</h2>
              <p className="text-sm text-muted-foreground">Sep 2009 – Jun 2013 · Indianapolis, IN</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>Directed marketing communications, advertising, and web design, achieving 45% patient growth.</li>
                <li>Managed branding, public relations, and event marketing initiatives.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Indiana University Bloomington</h3>
            <p className="text-sm text-muted-foreground">Bachelor of Science in Management, 2004 – 2008</p>
            <p className="text-gray-700">Winner of the 2006 Target Marketing Competition.</p>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold mb-4">Skills & Tools</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Technical: JavaScript, PHP, WordPress, Advanced Custom Fields, Cloudflare, Google Analytics, Mapbox, WooCommerce, LearnDash.</li>
            <li>Marketing: Marketing automation, lifecycle campaigns, analytics dashboards, SEO, email marketing, social media, content strategy.</li>
            <li>Design & Creative: Adobe Photoshop, Adobe InDesign, brand identity, UX/UI design.</li>
            <li>Leadership: Agile project management, sprint planning, cross-functional teamwork, mentorship.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
