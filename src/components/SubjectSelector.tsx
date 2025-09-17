import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface SubjectSelectorProps {
  onSelectSubject: (subjectId: string) => void;
  onBack: () => void;
  subjects: { id: string; name: string }[];
  className: string;
}

export function SubjectSelector({ onSelectSubject, onBack, subjects, className }: SubjectSelectorProps) {
  return (
    <div className={className}>
      <Button onClick={onBack} variant="secondary" className="mb-4">
        ← Back to Classes
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Select a Subject</CardTitle>
          <CardDescription>Browse subjects available for your chosen class.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            {subjects.map((subject) => (
              <Button
                key={subject.id}
                onClick={() => onSelectSubject(subject.id)}
                className="w-full text-left justify-start"
                variant="outline"
              >
                {subject.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}