export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Chapter {
  id: string;
  name: string;
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
}

export interface Subject {
  id: string;
  name: string;
  chapters: Chapter[];
}

export interface ClassLevel {
  id: string;
  name: string;
  subjects: Subject[];
}

export const curriculumData: ClassLevel[] = [
  {
    id: 'class-1',
    name: 'Class 1',
    subjects: [
      {
        id: 'math-1',
        name: 'Mathematics',
        chapters: [
          {
            id: 'math-1-ch1',
            name: 'Numbers 1-100',
            flashcards: [
              { id: 'f1', front: 'Counting to 10', back: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10' },
              { id: 'f2', front: 'Even numbers to 10', back: '2, 4, 6, 8, 10' },
              { id: 'f3', front: 'Odd numbers to 10', back: '1, 3, 5, 7, 9' }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What comes after 5?',
                options: ['4', '6', '7', '8'],
                correctAnswer: '6'
              },
              {
                id: 'q2',
                question: 'How many tens in 50?',
                options: ['4', '5', '6', '7'],
                correctAnswer: '5'
              },
              {
                id: 'q3',
                question: 'Which is an odd number?',
                options: ['2', '4', '5', '8'],
                correctAnswer: '5'
              },
              {
                id: 'q4',
                question: 'What is 10 + 10?',
                options: ['10', '15', '20', '25'],
                correctAnswer: '20'
              },
              {
                id: 'q5',
                question: 'Count by 2s: 2, 4, 6, 8, __?',
                options: ['9', '10', '11', '12'],
                correctAnswer: '10'
              }
            ]
          }
        ]
      },
      {
        id: 'eng-1',
        name: 'English',
        chapters: [
          {
            id: 'eng-1-ch1',
            name: 'Alphabets',
            flashcards: [
              { id: 'f1', front: 'Vowels', back: 'A, E, I, O, U' },
              { id: 'f2', front: 'First 5 consonants', back: 'B, C, D, F, G' }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Which is a vowel?',
                options: ['B', 'C', 'E', 'D'],
                correctAnswer: 'E'
              },
              {
                id: 'q2',
                question: 'How many vowels are there?',
                options: ['4', '5', '6', '7'],
                correctAnswer: '5'
              },
              {
                id: 'q3',
                question: 'What comes after D in the alphabet?',
                options: ['C', 'F', 'E', 'G'],
                correctAnswer: 'E'
              },
              {
                id: 'q4',
                question: 'Which letter makes the "ah" sound?',
                options: ['E', 'I', 'O', 'A'],
                correctAnswer: 'A'
              },
              {
                id: 'q5',
                question: 'Which is the first letter of the alphabet?',
                options: ['B', 'C', 'A', 'D'],
                correctAnswer: 'A'
              }
            ]
          }
        ]
      }
    ]
  }
  // Similarly structured data for classes 2-5
];