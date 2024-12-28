import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpinWheel from './components/SpinWheel/SpinWheel';
import QuestionSet1 from './components/question-set-1/QuestionSet1';
import QuestionSet2 from './components/question-set-2/QuestionSet2';
import QuestionSet3 from './components/question-set-3/QuestionSet3';


const App = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <Routes>
      <Route path="/" element={<SpinWheel options={options} />} />
      <Route path="/question-set-1" element={<QuestionSet1 />} />
      <Route path="/question-set-2" element={<QuestionSet2 />} />
      <Route path="/question-set-3" element={<QuestionSet3 />} />

    </Routes>
  );
};

export default App;
