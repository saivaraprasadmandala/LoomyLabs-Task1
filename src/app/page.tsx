'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ClassSelector } from '@/components/ClassSelector';
import { SubjectSelector } from '@/components/SubjectSelector';
import { ChapterSelector } from '@/components/ChapterSelector';
import { ActivitySelector } from '@/components/ActivitySelector';
import { FlashcardViewer } from '@/components/FlashcardViewer';
import { Quiz } from '@/components/Quiz';
import { curriculumData } from '@/data/curriculumData';
import { Separator } from '@/components/ui/separator';

type Step = 'class' | 'subject' | 'chapter' | 'activity' | 'flashcards' | 'quiz';

export default function HomePage() {
  const [step, setStep] = useState<Step>('class');
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  const selectedClass = curriculumData.find((c) => c.id === selectedClassId);
  const selectedSubject = selectedClass?.subjects.find((s) => s.id === selectedSubjectId);
  const selectedChapter = selectedSubject?.chapters.find((ch) => ch.id === selectedChapterId);

  const handleSelectClass = (classId: string) => {
    setSelectedClassId(classId);
    setStep('subject');
  };

  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setStep('chapter');
  };

  const handleSelectChapter = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setStep('activity');
  };

  const handleSelectFlashcards = () => {
    setStep('flashcards');
  };

  const handleSelectQuiz = () => {
    setStep('quiz');
  };

  const handleBack = () => {
    switch (step) {
      case 'subject':
        setStep('class');
        setSelectedClassId(null);
        break;
      case 'chapter':
        setStep('subject');
        setSelectedSubjectId(null);
        break;
      case 'activity':
        setStep('chapter');
        setSelectedChapterId(null);
        break;
      case 'flashcards':
      case 'quiz':
        setStep('activity');
        break;
    }
  };

  const renderContent = () => {
    const commonProps = {
      className: 'transition-transform duration-500 ease-in-out',
      onBack: handleBack,
    };

    switch (step) {
      case 'class':
        return <ClassSelector onSelectClass={handleSelectClass} />;
      case 'subject':
        return (
          <SubjectSelector
            subjects={selectedClass?.subjects || []}
            onSelectSubject={handleSelectSubject}
            {...commonProps}
          />
        );
      case 'chapter':
        return (
          <ChapterSelector
            chapters={selectedSubject?.chapters || []}
            onSelectChapter={handleSelectChapter}
            {...commonProps}
          />
        );
      case 'activity':
        return (
          <ActivitySelector
            onSelectFlashcards={handleSelectFlashcards}
            onSelectQuiz={handleSelectQuiz}
            {...commonProps}
          />
        );
      case 'flashcards':
        return (
          <FlashcardViewer
            flashcards={selectedChapter?.flashcards || []}
            {...commonProps}
          />
        );
      case 'quiz':
        return (
          <Quiz
            questions={selectedChapter?.quiz || []}
            {...commonProps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="container mx-auto py-10 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Learning Flow App</h1>
        <p className="text-center text-gray-600">
          Step-by-step learning for classes 1 to 5
        </p>
        <Separator />
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </div>
    </main>
  );
}