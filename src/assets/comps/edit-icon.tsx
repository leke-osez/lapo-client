import type { IconProps } from "@phosphor-icons/react";

const EditIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path
        d="M2.89662 15.0963C2.93491 14.7517 2.95405 14.5794 3.00618 14.4184C3.05243 14.2755 3.11778 14.1396 3.20045 14.0142C3.29363 13.8729 3.41621 13.7503 3.66136 13.5052L14.6666 2.49992C15.5871 1.57945 17.0795 1.57945 17.9999 2.49993C18.9204 3.4204 18.9204 4.91279 17.9999 5.83326L6.99469 16.8385C6.74954 17.0836 6.62696 17.2062 6.48566 17.2994C6.36029 17.3821 6.22433 17.4474 6.08146 17.4937C5.92042 17.5458 5.74813 17.5649 5.40356 17.6032L2.58325 17.9166L2.89662 15.0963Z"
        stroke="#475467"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
