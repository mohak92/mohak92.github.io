'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaAppStore, FaYoutube } from 'react-icons/fa';

const projects = [
  {
    title: 'Project Name 1',
    description: 'A beautiful iOS app that helps users accomplish specific tasks with an intuitive interface.',
    image: 'https://placehold.co/400x192/e2e8f0/1e293b?text=Project+1',
    technologies: ['Swift', 'SwiftUI', 'Core Data'],
    github: 'https://github.com/yourusername/project1',
    appStore: 'https://apps.apple.com/app/id123456789',
    youtube: 'https://youtube.com/watch?v=demo1'
  },
  {
    title: 'Project Name 2',
    description: 'An innovative iOS application focusing on user experience and performance.',
    image: 'https://placehold.co/400x192/e2e8f0/1e293b?text=Project+2',
    technologies: ['UIKit', 'Core Animation', 'MapKit'],
    github: 'https://github.com/yourusername/project2',
    appStore: 'https://apps.apple.com/app/id987654321',
    youtube: 'https://youtube.com/watch?v=demo2'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <div className="w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaGithub className="h-6 w-6" />
                    </a>
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaAppStore className="h-6 w-6" />
                    </a>
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaYoutube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 