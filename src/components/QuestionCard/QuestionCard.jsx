import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";

import LegendIndicator from "../LegendIndicator/LegendIndicator";
import "./QuestionCard.css";

function QuestionCard() {
  const {
    questions,
    currentQuestionIndex,
    toggleOption,
    goNext,
    goPrev,
    submitQuiz,
    markForReview,
  } = useQuiz();

  const navigate = useNavigate();

  const setSubmitQuiz = () => {
    submitQuiz();
    navigate("/");
  };

  const question = questions[currentQuestionIndex];

  if (!question) return <p>Loading...</p>;

  return (
    <div className="question-panel">
      <div className="question-card">
        <span className="title">Question {currentQuestionIndex + 1}</span>
        <hr />
        <span className="question">{question.question}</span>
        <ul className="options">
          {question.options.map((option, index) => (
            <li key={index}>
              {console.log(question, option)}
              <label>
                <input
                  type="checkbox"
                  name={`q-${question.id}`}
                  value={option}
                  checked={question.selectedOptions.includes(option)}
                  onChange={() => toggleOption(question._id, option)}
                />{" "}
                {index == 0 ? "A" : index == 1 ? "B" : index == 2 ? "C" : "D"}
                {". "}
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="question-actions">
        <div>
          <button className="button review" onClick={markForReview}>
            Mark for Review
          </button>
          <button
            className="button prev"
            onClick={goPrev}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={goNext}
            className="button next"
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
        </div>
        <button className="button submit" onClick={() => setSubmitQuiz()}>
          Submit
        </button>
      </div>
      <div className="legend-indicator">
        <LegendIndicator type={"quiz"} />
      </div>
    </div>
  );
}

export default QuestionCard;
