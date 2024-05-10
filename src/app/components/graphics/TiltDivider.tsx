import * as React from "react";
const SVGComponent = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    {...props}
  >
    <path
      d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
      className="shape-fill"
      fill="#D9D9D9"
      fillOpacity={1}
    />
  </svg>
);
export default SVGComponent;
