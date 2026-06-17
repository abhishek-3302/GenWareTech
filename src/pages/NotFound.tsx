import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gray-50 tech-pattern"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-4">Oops! Page not found</p>
          <p className="text-gray-500 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>
        <motion.a 
          href="/" 
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-primary hover:bg-primary/90 neon-glow">
            Return to Home
          </Button>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default NotFound;