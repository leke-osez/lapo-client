import type { InputProps } from "../../ui/components/input";

const ActiveCardsIcon = ({ className }: InputProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path
        d="M11.1667 12.0002L12.5 13.3335L15.1667 10.6668M15.1667 6.66683H1.83337M15.1667 8.00016V5.46683C15.1667 4.72009 15.1667 4.34673 15.0214 4.06151C14.8936 3.81063 14.6896 3.60665 14.4387 3.47882C14.1535 3.3335 13.7801 3.3335 13.0334 3.3335H3.96671C3.21997 3.3335 2.8466 3.3335 2.56139 3.47882C2.3105 3.60665 2.10653 3.81063 1.9787 4.06151C1.83337 4.34672 1.83337 4.72009 1.83337 5.46683V10.5335C1.83337 11.2802 1.83337 11.6536 1.9787 11.9388C2.10653 12.1897 2.3105 12.3937 2.56139 12.5215C2.8466 12.6668 3.21997 12.6668 3.96671 12.6668H8.50004"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ActiveCardsIcon;
