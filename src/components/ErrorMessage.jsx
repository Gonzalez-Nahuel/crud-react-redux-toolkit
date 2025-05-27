import React from "react";
import "../styles/ErrorMessage.css";

export const ErrorMessage = ({ error }) => {
  return (
    <div className="message-error">
      <p>
        <strong>Error {error.status}</strong>: {error.statusText}
      </p>
    </div>
  );
};
