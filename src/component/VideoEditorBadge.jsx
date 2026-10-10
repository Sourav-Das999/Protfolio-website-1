import React from "react";
import { imageUrl } from "../utils/imageUrl";

const VideoEditorBadge = ({ width = 300, height = 300, className = "" }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={width}
        height={height}
      >
        <defs>
          {/* Smooth Text Path */}
          <path
            id="textCirclePath"
            d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
          />

          {/* Continuous Rotation Keyframes */}
          <style>
            {`
              @keyframes spinText {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .rotating-text {
                animation: spinText 12s linear infinite;
                transform-origin: 250px 250px;
              }
            `}
          </style>
        </defs>

        {/* Outer Background Circle */}
        <circle cx="250" cy="250" r="240" fill="#140C1C" />

        {/* Center Custom Circle Image */}
        <image
          href={imageUrl("hero-circle.png")}
          x="105"
          y="105"
          width="290"
          height="290"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Text and Small Circles Group (Rotating Together) */}
        <g className="rotating-text">
          {/* Text Top Half */}
          <text
            fill="#FFFFFF"
            fontSize="38"
            fontWeight="600"
            letterSpacing="0.5"
          >
            <textPath
              href="#textCirclePath"
              startOffset="25%"
              textAnchor="middle"
            >
              EXPERT VIDEO EDITOR
            </textPath>
          </text>

          {/* Text Bottom Half */}
          <text
            fill="#FFFFFF"
            fontSize="38"
            fontWeight="600"
            letterSpacing="0.5"
          >
            <textPath
              href="#textCirclePath"
              startOffset="75%"
              textAnchor="middle"
            >
              EXPERT VIDEO EDITOR
            </textPath>
          </text>

          {/* Right Gap Dot */}
          <circle
            cx="450"
            cy="250"
            r="6"
            fill="none"
            stroke="#4B5563"
            strokeWidth="3"
          />

          {/* Left Gap Dot */}
          <circle
            cx="50"
            cy="250"
            r="6"
            fill="none"
            stroke="#4B5563"
            strokeWidth="3"
          />
        </g>

        {/* Center Play Button */}
        <polygon points="243,238 263,250 243,262" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

export default VideoEditorBadge;
