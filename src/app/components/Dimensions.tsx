"use client"; // This is necessary to make it a client-side component

import { useEffect, useRef, useState } from "react";

const Dimensions = ({
  divRef,
}: {
  divRef: React.RefObject<HTMLDivElement>;
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set dimensions when the component mounts
    if (divRef.current) {
      const { offsetWidth, offsetHeight } = divRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }

    // Update dimensions if the window is resized
    const handleResize = () => {
      if (divRef.current) {
        const { offsetWidth, offsetHeight } = divRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divRef]);

  return (
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 border bg-white px-1">
      <p className="text-sm tracking-tight text-black">
        {dimensions.width} × {dimensions.height}
      </p>
    </span>
  );
};

export default Dimensions;
