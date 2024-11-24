import { motion } from 'framer-motion';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="首页" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="w-20 h-20 rounded-full bg-blue-500/20 absolute -top-4 -left-4"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 relative" style={{ display: 'flex', alignItems: 'center' }}>
            <span>Hi！我是刘哲宁。</span>
          </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            求职意向：前端 / 后端 / AIGC
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('项目')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors w-full sm:w-auto"
          >
            查看作品
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('联系')}
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors w-full sm:w-auto"
          >
            联系我
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero; 