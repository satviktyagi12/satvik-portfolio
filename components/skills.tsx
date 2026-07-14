const skills = [
    "C++",
    "DSA",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];
  
  export default function Skills() {
    return (
      <section
        id="skills"
        className="scroll-mt-28 max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>
  
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-gray-700 bg-zinc-900 px-6 py-3 text-lg transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }