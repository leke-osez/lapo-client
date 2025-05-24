import type { InputProps } from "../../ui/components/input";

const CloseIcon = ({ className }: InputProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
