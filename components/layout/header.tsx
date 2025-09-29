
export function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-lg font-bold">My Portfolio</a>
        <nav className="space-x-4 hidden md:flex">
          <a href="/" className="hover:underline">Home</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/resume" className="hover:underline">Resume</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/toolbox" className="hover:underline">Toolbox</a>
        </nav>
      </div>
    </header>
  );
}
