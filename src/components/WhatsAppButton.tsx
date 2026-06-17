import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "917892649170";
  const message = "Hi, I'm interested in your IT solutions!";
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      style={{ boxShadow: "0 0 20px hsla(130, 60%, 50%, 0.5)" }}
    >
      <MessageCircle className="h-6 w-6" />
      
      <span className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;