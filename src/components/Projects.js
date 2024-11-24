import { motion } from 'framer-motion';

function Projects() {
  return (
    <section id="项目" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          我的项目
        </h2>
        
        <div className="grid gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <p className="text-gray-600 dark:text-gray-300 text-center">
              项目正在建设中...
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects; 