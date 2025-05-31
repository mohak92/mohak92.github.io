'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'iOS Development',
    skills: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Core Animation', 'MapKit', 'Push Notifications']
  },
  {
    title: 'Tools & Frameworks',
    skills: ['Xcode', 'CocoaPods', 'SPM', 'Git', 'CI/CD', 'TestFlight', 'App Store Connect']
  },
  {
    title: 'Architecture & Patterns',
    skills: ['MVVM', 'MVC', 'Clean Architecture', 'Protocol-Oriented Programming', 'Dependency Injection']
  },
  {
    title: 'Testing & Quality',
    skills: ['XCTest', 'UI Testing', 'Unit Testing', 'TDD', 'Code Review', 'Performance Optimization']
  },
  {
    title: 'AI/ML',
    skills: ['Core ML', 'Create ML', 'Vision', 'Translation', 'LLM', 'RAG', 'Siri with App Intents']
  },
  {
    title: 'CI/CD',
    skills: ['GitHub Actions ', 'CircleCI', 'Fastlane']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-sm dark:shadow-gray-700 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 