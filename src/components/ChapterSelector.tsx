import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ChapterSelectorProps {
  onSelectChapter: (chapterId: string) => void;
  onBack: () => void;
  chapters: { id: string; name: string }[];
  className: string;
}

export function ChapterSelector({ onSelectChapter, onBack, chapters, className }: ChapterSelectorProps) {
  return (
    <div className={className}>
      <Button onClick={onBack} variant="secondary" className="mb-4">
        ← Back to Subjects
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Select a Chapter</CardTitle>
          <CardDescription>Choose a chapter to start learning or take a quiz.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            {chapters.map((chapter) => (
              <Button
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className="w-full text-left justify-start"
                variant="outline"
              >
                {chapter.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}