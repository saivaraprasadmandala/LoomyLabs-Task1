'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flashcard } from '@/data/curriculumData';
import { Separator } from '@/components/ui/separator';

interface FlashcardViewerProps {
  flashcards: Flashcard[];
  onBack: () => void;
  className: string;
}

export function FlashcardViewer({ flashcards, onBack, className }: FlashcardViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const currentCard = flashcards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const variants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  return (
    <div className={className}>
      <Button onClick={onBack} variant="secondary" className="mb-4">
        ← Back to Activities
      </Button>
      <Card className="flex flex-col h-[500px] items-center justify-between p-6">
        <CardHeader className="w-full text-center">
          <CardTitle>Flashcards</CardTitle>
          <div className="text-sm text-gray-500">
            Card {currentIndex + 1} of {flashcards.length}
          </div>
        </CardHeader>
        <div className="flex-grow w-full perspective h-full flex items-center justify-center">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              className="relative w-full h-[300px] cursor-pointer"
              onClick={handleFlip}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="absolute w-full h-full backface-hidden rounded-xl shadow-lg border p-6 flex items-center justify-center"
                animate={isFlipped ? 'flipped' : 'initial'}
                variants={variants}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              >
                <div className="text-center text-lg font-medium">{currentCard.front}</div>
              </motion.div>
              <motion.div
                className="absolute w-full h-full backface-hidden rounded-xl shadow-lg border p-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
                animate={isFlipped ? 'initial' : 'flipped'}
                variants={variants}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              >
                <div className="text-center text-lg font-medium">{currentCard.back}</div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <CardFooter className="w-full flex justify-between p-0 mt-4">
          <Button onClick={handlePrev} disabled={currentIndex === 0}>
            Previous
          </Button>
          <Button onClick={handleNext} disabled={currentIndex === flashcards.length - 1}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}