import { pageTransition } from '@/app/utils/transitions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/button';

interface IntroScreenProps {
  onNext: () => void;
}

export default function IntroScreen({ onNext }: IntroScreenProps) {
  return (
    <motion.div
      {...pageTransition}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12 bg-gradient-to-r from-[#FFFEFE] to-[#FEF9DC]"
    >
      <motion.div
        className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 100,
        }}
      >
        {/* Envelope Image */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
        >
          <Image
            src="/letter.png"
            alt="Decorative envelope"
            width={300}
            height={200}
            className="relative z-10"
          />
        </motion.div>

        {/* Congratulations Card */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
          className="absolute top-[-50px] left-[-20px] z-20" // Adjust these values for positioning
        >
          <Image
            src="/congratulations.png"
            alt="Congratulations card"
            width={200}
            height={100}
          />
        </motion.div>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          onClick={onNext}
          size="lg"
          className="bg-[#FF4E8D] hover:bg-[#FF4E8D]/90 text-white px-8 py-6 rounded-full text-lg"
        >
          Get Started
        </Button>
      </motion.div>
    </motion.div>
  );
}
