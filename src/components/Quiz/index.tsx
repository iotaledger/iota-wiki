import React, { useState, useEffect } from 'react';

export default function Quiz(_questions) {
  const { questions } = _questions;
  console.log('questions', questions);
  console.log('questions', questions instanceof Array);

  console.log('questions', questions[0]);
  useEffect(() => {
    setTimeout(() => {
      console.log('start');

      reset();
    }, 1000);
  }, [questions]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const reset = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <p>
            You scored {score} out of {questions.length}
          </p>
          <a
            className='button button--outline button--primary"'
            onClick={() => reset()}
          >
            {'Replay'}
          </a>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion]?.questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion]?.answerOptions.map(
              (answerOption, index) => (
                <a
                  className='button button--outline button--primary"'
                  key={'answer-' + index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </a>
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
}
