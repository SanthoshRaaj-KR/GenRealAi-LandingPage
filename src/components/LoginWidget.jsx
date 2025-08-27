import { motion } from "framer-motion";
import { useState } from "react";

const LoginWidget = ({ isLoggedIn: propIsLoggedIn }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(propIsLoggedIn || false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
          animate={
            isLoggedIn
              ? { 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }
              : { 
                  y: [0, -12, 0],
                  scale: [1, 1.02, 1]
                }
          }
          transition={
            isLoggedIn
              ? { 
                  duration: 0.6,
                  ease: "easeInOut"
                }
              : { 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 2,
                  ease: "easeInOut"
                }
          }
        >
          <motion.button
            onClick={toggleLogin}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative overflow-hidden group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Animated blob background */}
            <motion.div className="relative w-16 h-16">
              {/* Single blob */}
                <motion.div
                className={`absolute inset-0 rounded-full ${
                    isLoggedIn
                    ? 'bg-gradient-to-r from-cyan-400 via-cyan-500 to-teal-400'
                    : 'bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500'
                }`}
                animate={{
                    borderRadius: [
                    "60% 40% 30% 70%",
                    "30% 60% 70% 40%",
                    "70% 30% 40% 60%",
                    "60% 40% 30% 70%"
                    ],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                />


              {/* Account Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white drop-shadow-sm"
                  animate={isLoggedIn ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {isLoggedIn ? (
                    // Checkmark icon for logged in state
                    <motion.path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  ) : (
                    // User icon for login state
                    <>
                      <motion.path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.circle
                        cx="12"
                        cy="7"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                    </>
                  )}
                </motion.svg>
              </div>

              {/* Hover particles effect */}
              {isHovered && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: [0, Math.cos(i * 60 * Math.PI / 180) * 30],
                        y: [0, Math.sin(i * 60 * Math.PI / 180) * 30],
                        opacity: [1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>

            {/* Status tooltip */}
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black bg-opacity-80 text-white text-xs rounded-full whitespace-nowrap backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {isLoggedIn ? "Click to logout" : "Click to login"}
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black border-opacity-80"></div>
            </motion.div>
          </motion.button>

        </motion.div>
  );
};

export default LoginWidget;