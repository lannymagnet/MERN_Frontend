import "./UserModal.css";

function UserModal({ user, onClose }) {
  if (!user) return null;

  console.log(user);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <div className="modal-text">
          <h2>User ID </h2>
          <span>{user.userId}</span>
        </div>
        <div className="modal-text">
          <h2>Score</h2>
          <span>
            {user?.score} / {10}
          </span>
        </div>
        <ul className="modal-answers">
          {user?.answers?.map((q, index) => (
            <li key={index}>
              <strong>Q{index + 1}:</strong> {q.question}
              <br />
              <span
                className={
                  q.selectedOption === q.correctAnswer ? "correct" : "wrong"
                }
              >
                Your Answer: {q.selectedOption || "Not Answered"}
              </span>
              <br />
              <span>Correct Answer: {q.correctAnswer}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserModal;
