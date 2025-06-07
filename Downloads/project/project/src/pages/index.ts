import React from 'react';
import { vowelLessons } from './lessons/vowelLessons';
import QuizGame from './lessons/quiz/QuizGame';

const App = () => {
  return (
    <div>
      <h1>Vowel Lessons</h1>
      {Object.keys(vowelLessons).map((vowel) => (
        <div key={vowel}>
          <h2>Lessons for '{vowel.toUpperCase()}'</h2>
          {vowelLessons[vowel].map((lesson, index) => (
            <div key={index}>
              <img src={lesson.img} alt={lesson.word} />
              <p>{lesson.description}</p>
              <audio controls src={lesson.audio}></audio>
              <p>{lesson.sentence}</p>
              <p>Spelling: {lesson.spelling}</p>
            </div>
          ))}
        </div>
      ))}
      <QuizGame />
    </div>
  );
};

export default App;