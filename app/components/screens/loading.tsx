import { fadeIn } from '@/app/utils/transitions';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  loadingMessage: string;
}

export default function LoadingScreen({ loadingMessage }: LoadingScreenProps) {
  return (
    <motion.div
      {...fadeIn}
      className="flex flex-col items-center justify-center min-h-[60vh] space-y-8"
    >
      <motion.div
        className="relative w-16 h-16 rounded-full border-4 border-gold/20 border-t-gold"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/eye.png"
            alt="Eye Icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Loading Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600 text-center"
      >
        {loadingMessage}
      </motion.p>
    </motion.div>
  );
}
