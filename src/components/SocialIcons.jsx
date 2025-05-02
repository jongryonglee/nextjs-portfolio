// components/SocialIcons.jsx
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 sm:gap-8 items-center">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-white text-lg sm:text-2xl hover:text-blue-500 transition-colors duration-200" />
      </a>
      <a href="mailto:your.email@example.com">
        <FaEnvelope className="text-white text-lg sm:text-2xl hover:text-red-500 transition-colors duration-200" />
      </a>
    </div>
  );
};

export default SocialIcons;
