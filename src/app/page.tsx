import Paint from "./components/Paint";

export default function Home() {
  return (
    <main className="main-container">
      <h1 className="heading-primary">RETRO PAINT</h1>
      <div className="mb-4 text-center">
        <span className="bg-retro-secondary text-white px-2 py-1 text-sm">
          Version 1.0
        </span>
      </div>
      <Paint />
      <footer className="mt-8 text-center text-sm">
        <p>© 2024 Mandrew's Software Inc.</p>
        <p>For MS-DOS and Compatible Systems</p>
      </footer>
    </main>
  );
}
