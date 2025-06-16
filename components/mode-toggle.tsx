"use client";
import * as React from "react";
import { Moon, Sun, Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock useTheme hook for demonstration
function useTheme() {
  const [theme, setThemeState] = React.useState(() => {
    // Check if theme is stored in localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        // Apply saved theme to document
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return savedTheme;
      }
      
      // If no saved theme, check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        return 'dark';
      }
    }
    return 'light';
  });
  
  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    // Apply theme to document
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  return { theme, setTheme };
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="w-full max-w-[3rem] sm:max-w-[6rem] md:max-w-[6rem] lg:max-w-[6rem]">
      <motion.div
        whileHover={{ 
          scale: 1.05,
          rotate: isDark ? -3 : 3,
          boxShadow: isDark 
            ? "0 15px 30px -8px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.1)"
            : "0 15px 30px -8px rgba(251, 146, 60, 0.4), 0 0 0 1px rgba(251, 146, 60, 0.1)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="relative w-full aspect-square rounded-full flex items-center justify-center cursor-pointer group transition-all duration-500"
        style={{
          background: isDark 
            ? "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)"
            : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
          boxShadow: isDark
            ? "0 12px 24px -8px rgba(15, 23, 42, 0.8), inset 0 1px 0 rgba(148, 163, 184, 0.1), 0 0 0 1px rgba(30, 41, 59, 0.2)"
            : "0 12px 24px -8px rgba(217, 119, 6, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(245, 158, 11, 0.3)"
        }}
      >
        {/* Realistic Surface Texture */}
        <div 
          className="absolute inset-0.5 rounded-full opacity-30"
          style={{
            background: isDark
              ? "radial-gradient(circle at 30% 30%, rgba(148, 163, 184, 0.3) 0%, transparent 50%)"
              : "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 50%)"
          }}
        />
        
        {/* Subtle Inner Shadow */}
        <div 
          className="absolute inset-1 rounded-full"
          style={{
            boxShadow: isDark
              ? "inset 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 -1px 2px rgba(148, 163, 184, 0.1)"
              : "inset 0 2px 4px rgba(0, 0, 0, 0.15), inset 0 -1px 2px rgba(255, 255, 255, 0.3)"
          }}
        />

        {/* Animated Glow Ring */}
        <motion.div
          className="absolute w-full h-full rounded-full"
          animate={{ 
            boxShadow: [
              isDark 
                ? "0 0 12px rgba(147, 51, 234, 0.3)"
                : "0 0 12px rgba(251, 146, 60, 0.3)",
              isDark 
                ? "0 0 24px rgba(147, 51, 234, 0.5)"
                : "0 0 24px rgba(251, 146, 60, 0.5)",
              isDark 
                ? "0 0 12px rgba(147, 51, 234, 0.3)"
                : "0 0 12px rgba(251, 146, 60, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dynamic Background Pattern */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          animate={{ rotate: isDark ? 360 : -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {isDark ? (
            // Stars pattern for dark mode
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${25 + ((i % 3) * 20)}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </>
          ) : (
            // Rays pattern for light mode
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-3 bg-gradient-to-t from-transparent via-orange-300 to-transparent origin-bottom"
                  style={{
                    left: '50%',
                    bottom: '50%',
                    transformOrigin: '50% 3rem',
                    transform: `translateX(-50%) rotate(${i * 45}deg)`
                  }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scaleY: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Main Icon */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.3 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.3 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="z-10 relative w-[30%] h-[30%]"
          >
            {isDark ? (
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Moon 
                  className="w-full h-full text-slate-100 drop-shadow-lg" 
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(148, 163, 184, 0.8))"
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
              >
                <Sun 
                  className="h-8 w-8 text-orange-100 drop-shadow-lg" 
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(251, 146, 60, 0.8))"
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Floating Decorative Elements */}
        <AnimatePresence>
          {isDark && (
            <>
              {/* Sparkles for dark mode */}
              <motion.div
                className="absolute -top-1 -right-1"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0],
                  rotate: 360
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <Sparkles className="w-3 h-3 text-purple-300" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-1 -left-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.8, 0], 
                  scale: [0, 1, 0],
                  y: [-8, 0, -8]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 1
                }}
              >
                <Star className="w-2 h-2 text-indigo-300" />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%)"
          }}
        />
      </motion.div>
 
    </div>
  );
}

export default ModeToggle;