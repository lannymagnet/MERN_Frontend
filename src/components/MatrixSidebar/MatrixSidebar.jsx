import { useQuiz } from "../../context/QuizContext";
import "./MatrixSidebar.css";

function MatrixSidebar() {
  const { questions, goToQuestion, questionStatus, currentQuestionIndex } =
    useQuiz();

  return (
    <>
      <div className="matrix-header">Questions</div>
      <div className="matrix">
        {questions.map((q, idx) => (
          <button
            key={q.id}
            className={`matrix-btn ${questionStatus[idx]} ${
              currentQuestionIndex == idx ? "current visited" : ""
            }`}
            onClick={() => goToQuestion(idx)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default MatrixSidebar;
