export default function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-28 max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <a
          href="https://leetcode.com/u/_satviktyagi/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-8 transition duration-300 hover:border-cyan-500 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-3">
              LeetCode
            </h3>

            <p className="text-5xl font-bold text-cyan-400 mb-4">
              400+
            </p>

            <p className="text-gray-300">
              Solved over 400 Data Structures & Algorithms problems,
              strengthening problem-solving skills.
            </p>

            <p className="mt-5 text-cyan-400 text-sm font-medium">
              View Profile →
            </p>
          </div>
        </a>

        <a
          href="https://www.codechef.com/users/quick_deer_37"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-8 transition duration-300 hover:border-cyan-500 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-3">
              CodeChef
            </h3>

            <p className="text-5xl font-bold text-cyan-400 mb-4">
              2★
            </p>

            <p className="text-gray-300">
              Achieved a 2-Star rating through competitive programming contests.
            </p>

            <p className="mt-5 text-cyan-400 text-sm font-medium">
              View Profile →
            </p>
          </div>
        </a>

      </div>
    </section>
  );
}