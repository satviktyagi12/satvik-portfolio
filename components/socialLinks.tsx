import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5 mt-8">
      <a
        href="https://github.com/satviktyagi12"
        target="_blank"
        className="text-gray-400 hover:text-white transition text-2xl"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/satvik-tyagi-5a0121323"
        target="_blank"
        className="text-gray-400 hover:text-white transition text-2xl"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:hello.satviktyagi@gmail.com"
        className="text-gray-400 hover:text-white transition text-2xl"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}