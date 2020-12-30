export default function RainbowButton({ idPrefix = '' }) {
  return (
    <svg
      width="132"
      height="36"
      viewBox="0 0 132 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rainbow-button"
    >
      <rect
        x="1.5"
        y="1.5"
        width="129"
        height="33"
        rx="6.5"
        stroke={`url(#${idPrefix}paint0_linear)`}
        strokeWidth="3"
      />
      <defs>
        <linearGradient
          id={`${idPrefix}paint0_linear`}
          x1="5.86667"
          y1="18.8571"
          x2="110.978"
          y2="18.8571"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC6192" />
          <stop offset="0.213542" stopColor="#EC4C34" />
          <stop offset="0.411458" stopColor="#FFBD2B" />
          <stop offset="0.630208" stopColor="#EBDE56" />
          <stop offset="0.833333" stopColor="#57C754" />
          <stop offset="1" stopColor="#53A1EB" />
        </linearGradient>
      </defs>
      <style jsx>{`
        .rainbow-button {
          transition: opacity 0.2s ease;
          shape-rendering: inherit;
        }

        .rainbow-button:hover {
          opacity: 0.5;
        }
      `}</style>
    </svg>
  );
}
