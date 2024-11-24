import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function Contact() {
  const contactInfo = [
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      label: "电话",
      value: "18234357464",
      href: "tel:18234357464"
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      label: "邮箱",
      value: "liuzhening_roeh@163.com",
      href: "mailto:liuzhening_roeh@163.com"
    }
  ];

  return (
    <section id="联系" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          联系方式
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4 text-blue-500 dark:text-blue-400">
                {info.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {info.label}
                </h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact; 