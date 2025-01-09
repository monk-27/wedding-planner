import { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/app/utils/transitions';

interface GuestScreenProps {
  onNext: (selectedOption: string) => void;
}

const guestOptions = ['< 100', '100-250', '250-500', '500-1000', '> 1000'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const pillVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#000000',
  },
  show: {
    opacity: 1,
    y: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#000000',
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  selected: {
    backgroundColor: '#D4AB47',
    color: '#FFFFFF',
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
  unselected: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#000000',
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function GuestScreen({ onNext }: GuestScreenProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handlePillClick = (option: string) => {
    setSelected(option);
    onNext(option); 
  };

  return (
    <motion.div
  {...pageTransition}
  className="max-w-md mx-auto py-12 space-y-8"
>
  <div className="text-center space-y-4">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 0.6, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-16 h-16 mx-auto mb-6"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl md:text-3xl font-bold"
    >
      How many guests are you expecting?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-600"
    >
      Please choose the number of people attending your biggest function
    </motion.p>
  </div>

  <motion.div
    className="flex flex-wrap justify-center gap-3"
    variants={containerVariants}
    initial="hidden"
    animate="show"
  >
    {guestOptions.map((option) => (
      <motion.button
        key={option}
        variants={pillVariants}
        animate={selected === option ? 'selected' : 'unselected'}
        onClick={() => handlePillClick(option)} 
        className="py-3 px-6 rounded-full text-center border border-[#D4AB47] shadow-sm"
        whileHover={{
          scale: selected === option ? 1.02 : 1.05,
          backgroundColor: selected === option
            ? ''
            : 'rgba(255, 255, 255, 0.8)',
        }}
        whileTap={{ scale: 0.98 }}
      >
        {option}
      </motion.button>
    ))}
  </motion.div>
</motion.div>

  );
}
