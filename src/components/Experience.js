import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      period: "2024.09 至今",
      school: "西南交通大学",
      major: "计算机技术",
      degree: "硕士研究生"
    },
    {
      period: "2019.09 - 2023.06",
      school: "西南交通大学",
      major: "电子科学与技术",
      degree: "学士"
    }
  ];

  return (
    <section id="经历" className="py-20 bg-blue-50 dark:bg-blue-900/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          教育经历
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-tr-lg rounded-bl-lg px-3 py-1">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    {exp.period}
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.school}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.major} · {exp.degree}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience; 