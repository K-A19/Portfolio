import React from "react";

const Cover = React.forwardRef((ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>Kami Afolabi's Portfolio</h1>
    </div>
  );
});

export default Cover