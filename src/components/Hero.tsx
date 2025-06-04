'use client';
import { motion } from 'framer-motion';
import { scrollTo } from '../utils/scrollTo';
import Image from 'next/image';

const Hero = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <section id="top" className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              iOS Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Crafting beautiful and intuitive iOS applications with a focus on user experience and performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-autorounded-full">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="/images/about.jpg"
                  alt=""
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 