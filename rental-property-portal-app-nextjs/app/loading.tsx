"use client";

import React, { CSSProperties } from "react";
import { GridLoader } from "react-spinners";

// Inline styles for centering
const containerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Full viewport height
  width: "100vw", // Full viewport width
  backgroundColor: "#f0f0f0", // Optional: add a background color for better visibility
};

const override: CSSProperties = {
  display: "block",
};

const Loading: React.FC = () => {
  return (
    <div style={containerStyle}>
      <GridLoader cssOverride={override} color="#3b82f6" />
    </div>
  );
};
export default Loading;
