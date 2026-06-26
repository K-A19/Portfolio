import React from "react"

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
        {props.children}
    </div>
  );
});

export default Page