import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { pageTransition, staggerItems } from '@/app/utils/transitions';

interface GreetingScreenProps {
  name: string;
  onNext: () => void;
}

export default function GreetingScreen({ name, onNext }: GreetingScreenProps) {
  return (


<motion.div
      {...pageTransition}
      className="max-w-6xl mx-auto py-12"
    >
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12">
        {/* Image Section */}
        <motion.div
          className="relative w-full md:w-1/2 h-auto items-center justify-center md:block hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full max-h-[600px] mr-8">
            <Image
              src="/anita.png"
              alt="Decorative arch frame"
              layout="fill"
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 md:w-1/2 space-y-8 flex flex-col justify-center"
          variants={staggerItems.container}
          initial="initial"
          animate="animate"
        >
          {/* Mobile-Only Image */}
          <motion.div
            className="relative w-full h-auto flex items-center justify-center md:hidden"
          >
            <div className="relative w-full h-64">
              <Image
                src="/anita.png"
                alt="Decorative arch frame"
                layout="fill"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.h1
            variants={staggerItems.item}
            className="text-3xl md:text-4xl font-bold text-center md:text-left"
          >
            {name}, let our expert planners craft your special day
          </motion.h1>
          <motion.p
            variants={staggerItems.item}
            className="text-gray-600 text-center md:text-left"
          >
            Tell us about your dream day & get a perfect proposal in your budget for FREE
          </motion.p>
          <motion.div
            variants={staggerItems.container}
            initial="initial"
            animate="animate"
            className="grid gap-6"
          >
            {/* Card 1 */}
            <motion.div
              variants={staggerItems.item}
              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <Sparkles className="w-6 h-6 text-[#FFB703]" />
              <div>
                <h3 className="font-semibold">Unlock best venues, decors & more</h3>
                <p className="text-sm text-gray-600">
                  Get a proposal tailored to your dream wedding, all within your budget.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={staggerItems.item}
              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <Check className="w-6 h-6 text-[#FFB703]" />
              <div>
                <h3 className="font-semibold">800+ Flawless Celebrations</h3>
                <p className="text-sm text-gray-600">
                  Enjoy a perfect, stress-free wedding experience from start to finish.
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerItems.item}
            className="flex justify-center mt-8"
          >
            <Button
              onClick={onNext}
              size="lg"
              className="bg-[#FF4E8D] hover:bg-[#FF4E8D]/90 text-white px-4 py-4 rounded-md text-lg"
            >
              Get My FREE Proposal
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>

  );
}
