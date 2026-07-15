import ProjectCarousel from "./projectCarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-t-28 max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="mb-10 text-4xl font-bold">
        Projects
      </h2>

      <div className="grid gap-10">

        {/* Sommaire */}

        <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-8">
          <h3 className="mb-6 text-2xl font-bold">
            Sommaire - AI PDF Summarizer
          </h3>

          <div className="grid gap-4 mb-6">
          <ProjectCarousel
  title="Sommaire"
  images={[
    "/images/projects/sommaire-1.png",
    "/images/projects/sommaire-2.png",
    "/images/projects/sommaire-3.png",
  ]}
/>
          </div>

          <p className="mb-6 leading-7 text-gray-300">
            An AI-powered web application that allows users to upload PDF
            documents and generate concise summaries using Google Gemini AI.
            It also includes Clerk authentication, Stripe subscription plans,
            secure file uploads and PostgreSQL database integration.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Express",
              "PostgreSQL",
              "React",
              "Clerk",
              "Langchain",
              "Stripe",
              "Zod",
              "Motion"
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-gray-800 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/satviktyagi12/Sommaire-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold hover:bg-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://sommaire-ai-satviktyagi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-2 hover:border-cyan-400"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project Management */}

        <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-8">
          <h3 className="mb-6 text-2xl font-bold">
            Project Management Platform
          </h3>

          <div className="grid gap-4 mb-6">
          <ProjectCarousel
  title="Project Management"
  images={[
    "/images/projects/project-mgt-1.png",
    "/images/projects/project-mgt-2.png",
    "/images/projects/project-mgt-3.png",
  ]}
/>
          </div>

          <p className="mb-6 leading-7 text-gray-300">
            A full-stack project management platform where users can create
            organizations, manage workspaces, collaborate with team members,
            assign tasks and organize projects efficiently using a modern
            dashboard.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Clerk",
              "Inngest",
              "Tailwind CSS",
              "TypeScript",
              "NodeMailer",
              "Prisma",
              "Axios",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-gray-800 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/satviktyagi12/project-management"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold hover:bg-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://project-mgt-satviktyagi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-2 hover:border-cyan-400"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}