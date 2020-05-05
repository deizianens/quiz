import React from "react";

function Button() {
  return (
    <div className="flex-end">
      <a className="arrow" href="#">
        <svg>
          <g>
            <line x2="227.62" y1="31.28" y2="31.28"></line>
            <polyline points="222.62 25.78 228.12 31.28 222.62 36.78"></polyline>
            <circle
              cx="224.67"
              cy="30.94"
              r="30.5"
              transform="rotate(180 224.67 30.94) scale(1, -1) translate(0, -61)"
            ></circle>
          </g>
        </svg>
        <font>Continuar</font>
      </a>
    </div>
  );
}

export default Button;
