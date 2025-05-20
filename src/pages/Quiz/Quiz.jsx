import QuestionCard from "../../components/QuestionCard/QuestionCard";
import MatrixSidebar from "../../components/MatrixSidebar/MatrixSidebar";
import Timer from "../../components/Timer/Timer";

import "./Quiz.css";

function Quiz() {
  return (
    <>
      <div className="quiz-card">
        <div className="quiz-main">
          <div className="quiz-header">Online Test</div>
          <QuestionCard />
        </div>
        <div className="quiz-sidebar">
          <Timer />
          <MatrixSidebar />
        </div>
      </div>
    </>
  );
}

export default Quiz;
