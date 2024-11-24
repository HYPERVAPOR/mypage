import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const menuItems = ['首页', '关于', '经历', '项目', '联系'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
            onClick={() => scrollToSection('首页')}
          >
            我的主页
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer"
                  onClick={() => scrollToSection(item)}
                >
                  <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </motion.button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

export default Header; 