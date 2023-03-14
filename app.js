import React, { useState } from 'react';
import data from './data.json';
console.log(data.length);
export default function App() {

  var questions = [];
  for(var i=0; i<data.length; i++){
    questions.push(
      {
        questionText: data[i].questionText,
        answerOptions: [
          { answerText: data[i].choice1, isCorrect: false },
          { answerText: data[i].choice2, isCorrect: false },
          { answerText: data[i].choice3, isCorrect: true },
          { answerText: data[i].choice4, isCorrect: false },
        ],
      })
  }


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
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

