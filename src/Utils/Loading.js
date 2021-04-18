import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Handler.css";

// type: "Watch" | "Audio" | "BallTriangle" | "Bars" | "Circles" | "Grid" | "Hearts" | "Oval" | "Puff" | "Rings" |
//  "TailSpin" | "ThreeDots" | "RevolvingDot" | "Triangle" | "Plane" | "MutatingDots" | "CradleLoader"


const Loading = () => {
  return (
    <div className='loader'>
      <p>Data Loading Please Wait</p>
      <Loader
        type="Bars"
        color="#00BFFF"
        height={80}
        width={80}
        // timeout={3000}
      />
    </div>
  );
};

export default Loading;
