import React from "react";

const Tooltip = ({ text, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: "auto",
        height: "auto",
        color: "#F5F5F5",
        fontSize: "10px",
        fontWeight: "600",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
