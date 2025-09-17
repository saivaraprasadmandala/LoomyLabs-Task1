'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { QuizQuestion } from '@/data/curriculumData';
import { AnimatePresence, motion } from 'framer-motion';

interface QuizProps {
  questions: QuizQuestion[];
  onBack: () => void;
  className: string;
}

export function Quiz({ questions, onBack, className }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getButtonVariant = (option: string) => {
    if (!isAnswered) return 'outline';
    if (option === currentQuestion.correctAnswer) return 'default';
    if (option === selectedAnswer) return 'destructive';
    return 'outline';
  };

  if (quizComplete) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Quiz Completed!</CardTitle>
            <CardDescription>You have completed the 5-question quiz.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold">
                Your Score: {score} / {questions.length}
              </div>
              <p>{score >= 3 ? 'Great job!' : 'You can do better! Keep practicing.'}</p>
              <div className="flex justify-center gap-4">
                <Button onClick={resetQuiz}>Retake Quiz</Button>
                <Button onClick={onBack} variant="secondary">
                  Go Back
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      key={currentQuestionIndex}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Button onClick={onBack} variant="secondary" className="mb-4">
        ← Back to Activities
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Quiz</CardTitle>
          <CardDescription>
            Question {currentQuestionIndex + 1} of {questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="font-bold text-lg">{currentQuestion.question}</p>
            <div className="flex flex-col space-y-2">
              {currentQuestion.options.map((option) => (
                <Button
                  key={option}
                  onClick={() => handleAnswerClick(option)}
                  className="w-full text-left justify-start"
                  variant={getButtonVariant(option)}
                  disabled={isAnswered}
                >
                  {option}
                </Button>
              ))}
            </div>
            {isAnswered && (
              <div
                className={`text-center font-bold ${
                  selectedAnswer === currentQuestion.correctAnswer ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect.'}
              </div>
            )}
          </div>
        </CardContent>
        <CardContent>
          <Button onClick={handleNextQuestion} disabled={!isAnswered} className="w-full">
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}