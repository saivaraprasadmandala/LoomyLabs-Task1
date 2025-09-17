import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ClassSelectorProps {
  onSelectClass: (classId: string) => void;
  // Remove the classes prop since we'll generate them internally
}

export function ClassSelector({ onSelectClass }: ClassSelectorProps) {
  const classes = Array.from({ length: 5 }, (_, i) => ({
    id: `class-${i + 1}`,
    name: `Class ${i + 1}`
  }));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Select Your Class Level</CardTitle>
          <CardDescription>Choose from the list of classes to begin your learning journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {classes.map((level) => (
              <Button
                key={level.id}
                onClick={() => onSelectClass(level.id)}
                className="w-full h-20 text-lg font-bold"
                variant="outline"
              >
                {level.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}