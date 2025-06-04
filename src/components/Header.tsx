'use client';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import ThemeToggle from './ThemeToggle';
import { scrollTo } from '../utils/scrollTo';

const Header = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a 
              href="#top" 
              onClick={(e) => handleNavClick(e, 'top')}
              className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
            >
              Mohak Tamhane
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
            >
              Projects
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/mohak92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/mohakt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/mohak_tamhane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <SiLeetcode className="h-6 w-6" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 