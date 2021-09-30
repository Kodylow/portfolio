import React, { useEffect, useRef, useState } from "react";
import RainStream from "./RainStream.js";
const MatrixRain = (props) => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(null); // ?{width, height}

  useEffect(() => {
    const boundingClientRect = containerRef.current.getBoundingClientRect();
    setContainerSize({
      width: boundingClientRect.width,
      height: boundingClientRect.height,
    });
  }, []);

  const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

  return (
    <div
      className="bg-gray-900 fixed"
      style={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: "ignore",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
      ref={containerRef}
    >
      {new Array(streamCount).fill().map((_, index) => (
        <RainStream height={containerSize?.height} key={"stream" + index} />
      ))}
    </div>
  );
};

export default MatrixRain;
