import type { InputProps } from "../../ui/components/input";

const SearchIcon = ({ className }: InputProps) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path
        d="M13.7188 13L10.8188 10.1M12.3854 6.33333C12.3854 9.27885 9.9976 11.6667 7.05208 11.6667C4.10656 11.6667 1.71875 9.27885 1.71875 6.33333C1.71875 3.38781 4.10656 1 7.05208 1C9.9976 1 12.3854 3.38781 12.3854 6.33333Z"
        stroke-width="1.63646"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
