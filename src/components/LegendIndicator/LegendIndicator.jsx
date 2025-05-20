import "./LegendIndicator.css";

const indicators = [
  { color: "white", label: "Not Attempted" },
  { color: "yellow", label: "Not Answered" },
  { color: "green", label: "Answered" },
];

const quizIndicators = [
  { color: "blue", label: "Current" },
  { color: "white", label: "Not Attempted" },
  { color: "green", label: "Answered" },
  { color: "yellow", label: "Not Answered" },
  { color: "purple", label: "Marked for Review" },
];

function LegendIndicator({ type }) {
  return type == "quiz" ? (
    quizIndicators.map(({ color, label }) => (
      <div className="legend-item" key={color}>
        <span className={`legend-box ${color}`} />
        <span>{label}</span>
      </div>
    ))
  ) : (
    <div className="legend">
      {indicators.map(({ color, label }) => (
        <div className="legend-item" key={color}>
          <span className={`legend-box ${color}`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default LegendIndicator;
