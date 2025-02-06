// src/components/ErrorMessage.js
export default function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span role="img" aria-label="error">
        🛑
      </span>{" "}
      {message}
    </p>
  );
}
