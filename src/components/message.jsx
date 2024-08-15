import React from "react";

const Message = ({ message, type }) => {
  if (!message) return null;

  return <div style={type === "error" ? styles.error : styles.success}>{message}</div>;
};

const styles = {
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "10px",
  },
  success: {
    color: "green",
    textAlign: "center",
    marginTop: "10px",
  },
};

export default Message;
