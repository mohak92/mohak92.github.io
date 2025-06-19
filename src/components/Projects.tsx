'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaAppStore, FaYoutube } from 'react-icons/fa';

const projects = [
  {
    title: 'Local LLMs',
    description: 'A iOS app that helps users with queries and specific tasks with an intuitive interface using an on-device LLM.',
    image: '/images/local-llm.png',
    technologies: ['Swift', 'SwiftUI', 'LLM', 'MLX Swift', 'Core ML', 'Llama CPP', 'Hugging Face'],
    github: 'https://github.com/yourusername/project1',
    appStore: 'https://apps.apple.com/app/id123456789',
    youtube: 'https://youtube.com/watch?v=demo1'
  },
  {
    title: 'Game Engine',
    description: "A lightweight and modular Metal-based rendering engine written in Swift. Designed for high-performance graphics rendering on iOS, macOS, and visionOS using Apple's Metal framework.",
    image: '/images/metal-og.jpg',
    technologies: ['Swift', 'C++', 'Metal', 'MetalKit', 'Metal Shading Language'],
    github: 'https://github.com/mohak92/MetalRenderer',
    youtube: 'https://youtube.com/watch?v=demo2'
  },
  {
    title: 'AR Body Tracking',
    description: "An iOS application that uses ARKit's Motion Capture technology to track human skeleton joints in real time using the device camera.",
    image: '/images/ar-body-tracking.jpeg',
    technologies: ['SwiftUI', 'UIKit', 'ARKit', 'RealityKit'],
    github: 'https://github.com/mohak92/ar-body-tracking-ios',
    youtube: 'https://youtube.com/watch?v=demo2'
  },
  {
    title: 'Object Detection',
    description: "An iOS application that uses ARKit's Motion Capture technology to track human skeleton joints in real time using the device camera.",
    image: '/images/object-detection.jpg',
    technologies: ['SwiftUI', 'UIKit', 'Core ML', 'Core ML Tools'],
    github: 'https://github.com/yourusername/project1',
    youtube: 'https://youtube.com/watch?v=demo2'
  },
  {
    title: 'Dog Breed Classifier',
    description: "An iOS application that uses ARKit's Motion Capture technology to track human skeleton joints in real time using the device camera.",
    image: 'https://placehold.co/400x192/e2e8f0/1e293b?text=Coming+Soon',
    technologies: ['SwiftUI', 'UIKit', 'Core ML', 'Create ML'],
    github: 'https://github.com/yourusername/project1',
    youtube: 'https://youtube.com/watch?v=demo2'
  },
  {
    title: 'Meta Messenger Clone',
    description: "An iOS application that uses ARKit's Motion Capture technology to track human skeleton joints in real time using the device camera.",
    image: '/images/messenger.webp',
    technologies: ['SwiftUI', 'UIKit', 'Firebase'],
    github: 'https://github.com/yourusername/project1',
    youtube: 'https://youtube.com/watch?v=demo2'
  },
  {
    title: 'Airbnb Clone',
    description: "An iOS application that uses ARKit's Motion Capture technology to track human skeleton joints in real time using the device camera.",
    image: '/images/airbnb.jpg',
    technologies: ['SwiftUI', 'UIKit', 'MapKit'],
    github: 'https://github.com/yourusername/project1',
    youtube: 'https://youtube.com/watch?v=demo2'
  },
  {
    title: 'Uber Clone',
    description: "An iOS application that uses ARKit's Motion Capture technology to track human skeleton joints in real time using the device camera.",
    image: 'https://placehold.co/400x192/e2e8f0/1e293b?text=Coming+Soon',
    technologies: ['SwiftUI', 'UIKit', 'MapKit', 'Firebase'],
    github: 'https://github.com/yourusername/project1',
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
                    {project.appStore && <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaAppStore className="h-6 w-6" />
                    </a>}
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