import SocialLinks from "./socialLinks";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-24">

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 lg:flex-row">

        {/* Left */}

        <div className="max-w-2xl">

        <span className="inline-block rounded-full border border-cyan-500 px-4 py-2 text-sm font-medium text-cyan-300">
         👋 Welcome to my portfolio
        </span>
          <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Satvik Tyagi
            </span>
          </h1>

          <h2 className="mt-6 text-3xl font-semibold text-gray-300">
            Full Stack Developer
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
          I build scalable full-stack web applications using Next.js, React, Node.js, Express, PostgreSQL and MongoDB. Passionate about solving real-world problems with AI and modern web technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

          <a
             href="#projects"
             className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold transition hover:scale-105 hover:bg-cyan-400"
>
            View Projects
          </a>

          <a
            href="/resume/resume.pdf"
            download
            className="rounded-xl border border-gray-700 px-7 py-3 font-semibold hover:border-cyan-400"
          >
            Download Resume
          </a>

          </div>

          <SocialLinks />

        </div>

        {/* Right */}

        <div className="flex items-center justify-center">

        <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20">
  <Image
    src="/images/profile.png"
    alt="Satvik Tyagi"
    fill
    className="object-cover"
    priority
  />
</div>

        </div>

      </div>

    </section>
  );
}