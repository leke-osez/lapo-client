import type { InputProps } from "../../ui/components/input";

const ArrowTopRightIcon = ({ className }: InputProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path
        d="M3 9L9 3M9 3H5M9 3V7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowTopRightIcon;
