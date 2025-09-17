import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ActivitySelectorProps {
  onSelectFlashcards: () => void;
  onSelectQuiz: () => void;
  onBack: () => void;
  className: string;
}

export function ActivitySelector({ onSelectFlashcards, onSelectQuiz, onBack, className }: ActivitySelectorProps) {
  return (
    <div className={className}>
      <Button onClick={onBack} variant="secondary" className="mb-4">
        ← Back to Chapters
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Choose an Activity</CardTitle>
          <CardDescription>Create flashcards or take a quiz to test your knowledge.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <Button onClick={onSelectFlashcards} className="flex-1 h-32 text-lg font-bold" variant="outline">
            Flashcards
          </Button>
          <Button onClick={onSelectQuiz} className="flex-1 h-32 text-lg font-bold" variant="outline">
            5-Question Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}