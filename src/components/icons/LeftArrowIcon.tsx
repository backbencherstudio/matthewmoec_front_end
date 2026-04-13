export default function LeftArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="3"
      viewBox="0 0 100 3"
      fill="none"
      className={className}
    >
      <path d="M0 0L100 1.5L0 3V0Z" fill="url(#paint0_linear_6314_982)" />
      <defs>
        <linearGradient
          id="paint0_linear_6314_982"
          x1="50"
          y1="0"
          x2="50"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#395CBC" />
          <stop offset="1" stopColor="#1A2A56" />
        </linearGradient>
      </defs>
    </svg>
  );
}
