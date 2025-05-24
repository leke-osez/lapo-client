import type { IconProps } from "./account-icon";

const ChevronRight = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path d="M6 12L10 8L6 4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default ChevronRight;
