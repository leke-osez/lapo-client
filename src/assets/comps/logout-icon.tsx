import type { IconProps } from "./account-icon";

const LogoutIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path
        d="M7.33337 2L6.89167 2.1559C5.17249 2.76267 4.3129 3.06605 3.82314 3.75828C3.33337 4.45051 3.33337 5.36206 3.33337 7.18518V8.81482C3.33337 10.6379 3.33337 11.5495 3.82314 12.2417C4.3129 12.934 5.17249 13.2373 6.89167 13.8441L7.33337 14"
        stroke-linecap="round"
      />
      <path
        d="M14 8.00016L7.33337 8.00016M14 8.00016C14 7.53334 12.6705 6.66118 12.3334 6.3335M14 8.00016C14 8.46698 12.6705 9.33914 12.3334 9.66683"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
