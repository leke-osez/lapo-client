import type { IconProps } from "./account-icon";

const AddBranchIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`stroke-current ${className}`}
    >
      <path
        d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z"
        stroke-width="1.5"
      />
      <path
        d="M15.5 11H12M12 11H8.5M12 11V14.5M12 11L12 7.5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default AddBranchIcon;
