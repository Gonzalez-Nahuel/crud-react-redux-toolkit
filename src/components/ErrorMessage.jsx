import React from "react";
import "../styles/ErrorMessage.css";
import { useSelector } from "react-redux";

export const ErrorMessage = () => {
  const { error } = useSelector((state) => state.crud);
  return (
    <div className="message-error">
      <p>
        <strong>Error {error.status}</strong>: {error.statusText}
      </p>
    </div>
  );
};
