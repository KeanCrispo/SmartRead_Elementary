// This file defines TypeScript interfaces and types used throughout the project.

export interface Lesson {
  word: string;
  img: string;
  description: string;
  audio: string;
  sentence: string;
  spelling: string;
}

export interface VowelLessons {
  a: Lesson[];
  e: Lesson[];
  i: Lesson[];
  o: Lesson[];
  u: Lesson[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizData {
  [key: string]: QuizQuestion[];
}