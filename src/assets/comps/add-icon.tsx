import type { InputProps } from "../../ui/components/input";

const AddICon = ({ className }: InputProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path
        d="M10.0001 4.6665V16.3332M4.16675 10.4998H15.8334"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AddICon;
