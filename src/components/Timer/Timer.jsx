import { useEffect, useState } from "react";
import "./Timer.css";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";

function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(3600); // 60 minutes

  const navigate = useNavigate();
  const { submitQuiz } = useQuiz;

  const setSubmitQuiz = () => {
    submitQuiz();
    navigate("/");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-section">
      <div className="timer-header">Time Left</div>
      <div className="timer">
        <div className="timer-div">
          <span>00</span>
          <span className="text">hours</span>
        </div>
        <div className="timer-div">
          <span>{String(Math.floor(secondsLeft / 60)).padStart(2, "0")}</span>
          <span className="text">minutes</span>
        </div>
        <div className="timer-div">
          <span>{String(secondsLeft % 60).padStart(2, "0")}</span>
          <span className="text"> seconds</span>
        </div>
      </div>
    </div>
    // <div className="quiz-timer">🕒 Time Left: {formatTime(secondsLeft)}</div>
  );
}

export default Timer;
