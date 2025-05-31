'use client';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am a passionate iOS Developer with a strong foundation in Swift and UIKit. 
              My journey in mobile development started with a deep curiosity for creating 
              seamless user experiences and has evolved into a professional career building 
              innovative applications.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With expertise in Swift, SwiftUI, and various iOS frameworks, I specialize in 
              developing high-performance applications that delight users. I have a keen eye 
              for detail and always strive to write clean, maintainable code that follows 
              best practices and design patterns.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I&apos;m not coding, I enjoy staying up-to-date with the latest Apple 
              technologies and contributing to the iOS development community through blog 
              posts and open-source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 