export function ContactSection() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <p className="mt-2 text-gray-600">
        Interested in working together? Reach out via email or connect on LinkedIn.
      </p>
      <div className="mt-4 space-x-4">
        <a href="mailto:your@email.com" className="text-primary underline">
          Email Me
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-primary underline">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
