import "./PrimaryButton.css";

function PrimaryButton({
  children,
  onClick,
  disabled = false,
  classNames = "",
}) {
  return (
    <button
      className={`primary-btn ${classNames}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
