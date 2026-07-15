export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Satvik Tyagi. All rights reserved.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Built with Next.js, TypeScript and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}