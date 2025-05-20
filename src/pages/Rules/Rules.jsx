import { useNavigate } from "react-router-dom";
import "./Rules.css";
import LegendIndicator from "../../components/LegendIndicator/LegendIndicator";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useEffect, useState } from "react";
import { useQuiz } from "../../context/QuizContext";

function Rules() {
  const { setUserId, hasAttempted, markAsAttempted } = useQuiz();
  const [enteredId, setEnteredId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem("quiz-user-id");
    if (storedId) {
      setEnteredId(storedId);
      setUserId(storedId);
      const attempted = localStorage.getItem("attempted-" + storedId);
      if (attempted === "true") {
        markAsAttempted();
      }
    }
  }, []);

  const handleStart = async () => {
    if (!enteredId || hasAttempted) return;

    setUserId(enteredId);
    localStorage.setItem("quiz-user-id", enteredId);

    navigate("/quiz");
  };

  return (
    <div className="rules-card">
      <h2 className="rules-title">Please Read the Assessment Rules</h2>

      <ul className="rules-list">
        <li>
          🕒 <b>Duration:</b> 60 minutes
        </li>
        <li>
          ❓ <b>Total Questions:</b> 10 (multiple-choice)
        </li>
        <li>➡️ One question appears at a time</li>
        <li>⏱ Timer stops on submission or timeout</li>
        <li>🔒 You cannot re-attempt after submission</li>
        <li>🗂️ See the legend below to understand the question status</li>
      </ul>
      <LegendIndicator />

      <h2>Enter Your User ID</h2>
      <input
        type="text"
        value={enteredId}
        onChange={(e) => setEnteredId(e.target.value)}
        required
      />

      <PrimaryButton
        onClick={() => handleStart()}
        disabled={!enteredId || hasAttempted}
      >
        Start Test
      </PrimaryButton>
    </div>
  );
}

export default Rules;
