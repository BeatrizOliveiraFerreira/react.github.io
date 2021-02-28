import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Qual é a capital do Brasil?',
			answerOptions: [
				{ answerText: 'Rio de Janeiro', isCorrect: false },
				{ answerText: 'Curitiba', isCorrect: false },
				{ answerText: 'Brasilia', isCorrect: true },
				{ answerText: 'Bahia', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a capital do Canadá?',
			answerOptions: [
				{ answerText: 'Toronto', isCorrect: false },
				{ answerText: 'Ottawa', isCorrect: true },
				{ answerText: 'Quebec', isCorrect: false },
				{ answerText: 'Vancouver', isCorrect: false },
			],
		},
		{
			questionText: 'Qual é a Capital dos Estados Unidos?',
			answerOptions: [
				{ answerText: 'Washington', isCorrect: true },
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Califórnia', isCorrect: false },
				{ answerText: 'São Francisco', isCorrect: false },
			],
		},
		{
			questionText: 'Qual a Capital da Alemanha',
			answerOptions: [
				{ answerText: 'Amsterdã', isCorrect: false },
				{ answerText: 'Moscou', isCorrect: false },
				{ answerText: 'Pequim', isCorrect: false },
				{ answerText: 'Berlim', isCorrect: true },
			],
		},
	];

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