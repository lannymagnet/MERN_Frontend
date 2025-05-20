// src/context/QuizContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [questionStatus, setQuestionStatus] = useState([]); // "not-visited", "visited", "answered", "review"
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userId, setUserId] = useState(null);
  const [hasAttempted, setHasAttempted] = useState(false);

  const markAsAttempted = () => setHasAttempted(true);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_API_BASE_URL + "/questions"
      );
      // Initialize selectedOptions array
      const questionsWithSelection = res.data.map((q) => ({
        ...q,
        selectedOptions: [],
      }));

      setQuestions(questionsWithSelection);
      setQuestionStatus(Array(res.data.length).fill("not-visited"));
    } catch (err) {
      console.error("Failed to load questions:", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const toggleOption = (questionId, option) => {
    const updatedQuestions = questions.map((q, idx) => {
      if (q._id === questionId) {
        const alreadySelected = q.selectedOptions.includes(option);
        const updatedOptions = alreadySelected ? [] : [option]; // Only one allowed

        // Update question status
        const updatedStatus = [...questionStatus];
        updatedStatus[idx] = updatedOptions.length > 0 ? "answered" : "visited";
        setQuestionStatus(updatedStatus);

        return {
          ...q,
          selectedOptions: updatedOptions,
        };
      }
      return q;
    });

    setQuestions(updatedQuestions);
  };

  const markForReview = () => {
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestionIndex] = "review";
    setQuestionStatus(updatedStatus);
  };

  const goNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      updateVisited(nextIndex);
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const goPrev = () => {
    const prevIndex = currentQuestionIndex - 1;
    if (prevIndex >= 0) {
      updateVisited(prevIndex);
      setCurrentQuestionIndex(prevIndex);
    }
  };

  const goToQuestion = (index) => {
    updateVisited(index);
    setCurrentQuestionIndex(index);
  };

  const updateVisited = (index) => {
    const updatedStatus = [...questionStatus];
    if (updatedStatus[index] === "not-visited") {
      updatedStatus[index] = "visited";
    }
    setQuestionStatus(updatedStatus);
  };

  const submitQuiz = async () => {
    markAsAttempted();
    console.log(questions);
    const payload = {
      userId,
      answers: questions.map((q) => ({
        questionId: q._id,
        selectedOption: q.selectedOptions?.[0] || null,
      })),
    };
    await axios.post(
      import.meta.env.VITE_API_BASE_URL + "/users/submit",
      payload
    );
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        questionStatus,
        currentQuestionIndex,
        toggleOption,
        markForReview,
        goNext,
        goPrev,
        goToQuestion,
        submitQuiz,
        userId,
        setUserId,
        hasAttempted,
        markAsAttempted,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
