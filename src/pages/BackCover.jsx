import React from "react";

const BackCover = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>Contact Me</h1>
    </div>
  );
});


export default BackCover