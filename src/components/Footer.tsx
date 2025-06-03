import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Let&apos;s Connect</h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/mohak92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/mohakt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://leetcode.com/mohak_tamhane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <SiLeetcode className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Mohak Tamhane. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 