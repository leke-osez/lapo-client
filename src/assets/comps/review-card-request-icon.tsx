import type { InputProps } from "../../ui/components/input";

const ReviewCardRequestIcon = ({ className }: InputProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path
        d="M13.1666 14.0002V10.0002M11.1666 12.0002H15.1666M15.1666 6.66683H1.83325M15.1666 8.00016V5.46683C15.1666 4.72009 15.1666 4.34673 15.0213 4.06151C14.8934 3.81063 14.6895 3.60665 14.4386 3.47882C14.1534 3.3335 13.78 3.3335 13.0333 3.3335H3.96659C3.21985 3.3335 2.84648 3.3335 2.56126 3.47882C2.31038 3.60665 2.10641 3.81063 1.97858 4.06151C1.83325 4.34672 1.83325 4.72009 1.83325 5.46683V10.5335C1.83325 11.2802 1.83325 11.6536 1.97858 11.9388C2.10641 12.1897 2.31038 12.3937 2.56126 12.5215C2.84648 12.6668 3.21985 12.6668 3.96659 12.6668H8.49992"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ReviewCardRequestIcon;
