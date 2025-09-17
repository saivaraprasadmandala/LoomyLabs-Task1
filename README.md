# Learning Flow App - LoomyLabs Technical Assessment

## Project Overview
An interactive educational platform developed as part of the LoomyLabs.tech technical assessment. The application provides a structured learning experience for students from Class 1-5.

## Features
- **Class Selection**: Interactive grid for classes 1-5
- **Subject Navigation**: 
  - 2 subjects per class(As of now,I have used hard-coded date for Class 1 only.So u can check that)
  - Subject-specific learning paths
- **Chapter System**: 
  - 2 chapters per subject
- **Learning Activities**:
  - Flashcards for quick revision
  - 5-question assessment quiz
  - Immediate feedback

## Tech Stack
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion

## Getting Started

### Prerequisites
```bash
node.js >= 18.17.0
npm >= 9.6.7
```

### Installation
```bash
# Clone the repository
git clone https://github.com/saivaraprasadmandala/LoomyLabs-Task1

# Navigate to project directory
cd Task-1

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure
```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ClassSelector.tsx
│   ├── SubjectSelector.tsx
│   ├── ChapterSelector.tsx
│   ├── ActivitySelector.tsx
│   ├── FlashcardViewer.tsx
│   └── Quiz.tsx
├── data/              # Curriculum data
│   └── curriculumData.ts
└── lib/               # Utility functions
    └── utils.ts
```

## Key Features Implementation
1. **Interactive Navigation**
   - Seamless flow between learning stages
   - Back navigation support
   - Progress tracking

2. **Learning Activities**
   - Flashcards with flip animation
   - Quiz with immediate feedback
   - Score tracking and results

3. **Responsive Design**
   - Mobile-first approach
   - Fluid layouts
   - Cross-device compatibility

## Development Commands
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment
The application is deployed on Vercel: [[Deployed Link](https://loomy-labs-task1.vercel.app/)]

## Assessment Context
This project was developed as part of the LoomyLabs.tech technical assessment process. The implementation focuses on:
- Clean code architecture
- Responsive design principles
- Interactive user experience
- Educational content structure

## Author
Sai Vara Prasad Mandala

---
*This project is a technical assessment submission for LoomyLabs.tech*
