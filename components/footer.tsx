export default function Footer() {
    return (
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          © {new Date().getFullYear()} Satvik Tyagi. All rights reserved.
        </div>
      </footer>
    );
  }