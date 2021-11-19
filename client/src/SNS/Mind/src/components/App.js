import React, { useState } from "react";
import { QUIZZES } from "../constants";
import "../App.css";
import Button from "./Button";

function App() {
	const [currentNo, setCurrentNo] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);

	const handleClick = (isCorrect) => {
		if (isCorrect) {
			setScore((score) => score + 1);
		}
		// 마지막 퀴즈인지 체크하기
		if (currentNo === QUIZZES.length - 1) {
			setShowResult(true);
		} else {
			setCurrentNo((currentNo) => currentNo + 1);
		}
	};

	const convertedScore = Math.floor((score / QUIZZES.length) * 100);

	return (
		<div className="container">
			{showResult ? (
				<div className="app">
					<h1 className="result-header">당신의 점수는?</h1>
					<p className="result-score">{convertedScore}</p>
				</div>
			) : (
				<div className="app">
					<div className="question-section">
						<h1 className="question-header">
							<span>{QUIZZES[currentNo].id}</span>/{QUIZZES.length}
						</h1>
						<div className="question-text">{QUIZZES[currentNo].question}</div>
					</div>
					<div className="answer-section">
						{QUIZZES[currentNo].answers.map((answer) => (
							<Button
								text={answer.text}
								onClick={() => handleClick(answer.isCorrect)}
							></Button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
