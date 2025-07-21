import React, { memo } from "react";

import "./loader.css";

const Loader = memo(function Loader() {
  return (
    <div className="loader relative w-[54px] h-[54px] mt-10 rounded-[10px]">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={`bar${index + 1} bg-primary shadow-[0_0_3px_#ff9900]`}
        ></div>
      ))}
    </div>
  );
});

export default Loader;
