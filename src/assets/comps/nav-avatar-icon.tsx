import type { IconProps } from "./account-icon";

const NavAvatarIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={` ${className}`}
    >
      <rect width="32" height="32" rx="16" fill="#F2F4F7" />
      <g opacity="0.08">
        <rect
          x="0.3"
          y="0.3"
          width="31.4"
          height="31.4"
          rx="15.7"
          stroke="#101828"
          stroke-width="0.6"
        />
      </g>
      <path
        d="M22.4001 23.1993C22.4001 22.0829 22.4001 21.5246 22.2623 21.0704C21.9521 20.0477 21.1517 19.2473 20.129 18.9371C19.6748 18.7993 19.1165 18.7993 18.0001 18.7993H14.0001C12.8836 18.7993 12.3254 18.7993 11.8712 18.9371C10.8485 19.2473 10.0481 20.0477 9.73789 21.0704C9.6001 21.5246 9.6001 22.0829 9.6001 23.1993M19.6001 12.3993C19.6001 14.3875 17.9883 15.9993 16.0001 15.9993C14.0119 15.9993 12.4001 14.3875 12.4001 12.3993C12.4001 10.4111 14.0119 8.79932 16.0001 8.79932C17.9883 8.79932 19.6001 10.4111 19.6001 12.3993Z"
        stroke="#475467"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default NavAvatarIcon;
