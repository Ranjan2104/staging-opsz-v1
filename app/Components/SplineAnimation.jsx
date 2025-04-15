import React from "react";
import Spline from "@splinetool/react-spline";

const SplineAnimation = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Spline scene="https://prod.spline.design/95ucvoTpnUbJXmTb/scene.splinecode" />
    </div>
  );
};

export default SplineAnimation;

