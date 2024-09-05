export default function () {
  return (
    <svg
      width="576"
      height="480"
      viewBox="0 0 576 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <mask id="path-1-inside-1_327_311" fill="white">
        <path d="M0 12C0 5.37257 5.37258 0 12 0H576V480H12C5.37257 480 0 474.627 0 468V12Z" />
      </mask>
      <path
        d="M0 12C0 5.37257 5.37258 0 12 0H576V480H12C5.37257 480 0 474.627 0 468V12Z"
        fill="#F9FAFB"
      />
      <path
        d="M0 0H576H0ZM576 480H0H576ZM0 480V0V480ZM577 0V480H575V0H577Z"
        fill="#F3F4F6"
        mask="url(#path-1-inside-1_327_311)"
      />
      <g filter="url(#filter0_dd_327_311)">
        <rect
          x="48"
          y="48"
          width="480"
          height="384"
          rx="12"
          fill="url(#pattern0_327_311)"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_327_311"
          x="40"
          y="48"
          width="496"
          height="402"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_327_311"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_327_311"
            result="effect2_dropShadow_327_311"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_327_311"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_327_311"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_327_311"
            transform="matrix(0.000347222 0 0 0.000434028 0 -0.00756017)"
          />
        </pattern>
        <image
          id="image0_327_311"
          width="2880"
          height="3768"
        />
      </defs>
    </svg>
  );
}