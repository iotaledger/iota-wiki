import React, { useState, useEffect } from 'react';

export default function Quiz(_questions) {
  const { questions } = _questions;

  useEffect(() => {
    setTimeout(() => {
      reset();
    }, 1000);
  }, [questions]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(-1);

  const handleAnswerOptionClick = (isCorrect, index) => {
    setClicked(index);
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setClicked(-1);
    }, 1000);
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
            className='button button--outline button--primary'
            onClick={() => reset()}
          >
            {'Replay'}
          </a>
        </div>
      ) : (
        <>
          <div className='card'>
            <div className='card__header'>
              <h3>
                Question {currentQuestion + 1}/{questions.length}
              </h3>
            </div>
            <div className='card__body'>
              {questions[currentQuestion]?.questionText}
            </div>
            <div className='card__footer'>
              {questions[currentQuestion]?.answerOptions.map(
                (answerOption, index) => (
                  <button
                    className={`button button--block button--primary margin-bottom--xs   ${
                      clicked >= 0 && answerOption.isCorrect
                        ? 'button--success'
                        : ''
                    } ${
                      clicked === index && !answerOption.isCorrect
                        ? 'button--danger'
                        : ''
                    }`}
                    key={'answer-' + index}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect, index)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                ),
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
