


import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { type Screen } from '../types';

interface HeaderProps {
  currentScreen: Screen;
  onBack: () => void;
  canGoBack: boolean;
}

export default function Header({ currentScreen, onBack, canGoBack }: HeaderProps) {
  const step = getStepNumber(currentScreen);
  const totalSteps = 6;

  return (
    <header className="border-b border-gold/20">
      <div className="container max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: canGoBack ? 1 : 0, x: canGoBack ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          {canGoBack ? (
            <button
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-gold/10 hover:bg-gold/20 transition-colors bg-yellow-300"
            >
              <ArrowLeft className="w-5 h-5 text-gold" />
            </button>
          ) : (
            <div className="w-10" />
          )}
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={false}
          animate={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/logo.png"
            alt="The Wedding Company"
            width={40}
            height={40}
            className="mb-1"
          />
          <span className="text-sm font-semibold text-[#D1C4A1]">The Wedding Company</span> {/* Updated color */}
          {step > 0 && (
            <motion.div
              className="text-sm text-gold mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              Step {step}/{totalSteps}
            </motion.div>
          )}
        </motion.div>
        <div className="w-10" />
      </div>
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${(step / totalSteps) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </header>
  );
}

function getStepNumber(screen: Screen): number {
  switch (screen) {
    case 'intro':
      return 0;
    case 'greeting':
      return 1;
    case 'guest':
      return 2;
    case 'venue':
      return 3;
    case 'loading':
      return 0;
    default:
      return 0;
  }
}

