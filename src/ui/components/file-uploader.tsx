import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { cn } from "../../utils/namespaces/style";

type Props = {
  children: React.ReactNode;
  handleChange: (file: any) => void;
  fileTypes: string[];
  className?: string;
};

const CustomFileUploader = ({
  children,
  handleChange,
  fileTypes,
  className,
  ...props
}: Props) => {
  return (
    <div className={cn("w-full h-fit", className)}>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        {...props}
      >
        {children}
      </FileUploader>
    </div>
  );
};

export default CustomFileUploader;
