import { motion } from 'framer-motion';

function About() {
  const skills = [
    'React', 'Vue', 'TypeScript', 'Node.js', 'Flask', 'CPP',
    'UI/UX Design', 'Figma', 'Git','Docker','Langchain'
  ];

  return (
    <section id="关于" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          关于我
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            在下正在寻找实习机会...
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            某虽不才，然志不疏。愿为君用，但凭驱使。
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              技术栈
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About; 