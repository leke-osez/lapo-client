import { useState } from "react";
import CloseIcon from "../../../assets/comps/close-icon";
import UploadCSVFileIcon from "../../../assets/comps/upload-csv-file";
import type { ModalActions } from "../../../hooks/use-disclosure";
import { Button } from "../../../ui/components/button";
import CustomFileUploader from "../../../ui/components/file-uploader";
import { Modal } from "../../../ui/components/modal";
import CsvFileIcon from "../../../assets/comps/csv-file-icon";
import UploadCloudIcon from "../../../assets/comps/upload-cloud-icon";
import FileCsvIcon from "../../../assets/comps/file-csv-icon";
import DeleteIcon from "../../../assets/comps/delete-icon";

type Props = ModalActions;
const fileTypes = ["xslx", "csv"];

const UploadBranch = ({ close, isOpen }: Props) => {
  const [file, setFile] = useState(null);
  const fileName = "New Branches FINAL.csv";
  const fileSize = "4.2 MB";

  const handleFileChange = (file) => {
    setFile(file);
  };

  const handleSubmit = () => {
    console.log(file);
    close();
  };
  return (
    <Modal close={close} isOpen={isOpen}>
      <div className="p-6 text-table-text w-full max-w-[500px]">
        <header className="flex gap-2 justify-between">
          <UploadCSVFileIcon />
          <div>
            <h2 className="text-[#101828] text-lg font-bold">
              Upload CSV File
            </h2>
            <p className="text-sm">
              CSV file should contain the following columns
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Name</li>
              <li>Code</li>
              <li>Address</li>
              <li>Zone</li>
              <li>Area</li>
            </ul>
          </div>
          <Button variant={"plain"} className="px-0">
            <CloseIcon />
          </Button>
        </header>
        <main className="mt-4 flex flex-col gap-4">
          <div>
            <CustomFileUploader
              handleChange={handleFileChange}
              fileTypes={fileTypes}
              className={""}
              // maxSize={"10mb"}
            >
              <div className="w-full max-w-[400px] flex flex-col items-center border-[2px] p-3 border-primary rounded-xl">
                <div className="flex text-center gap-2 justify-center items-center w-full h-full ">
                  <div className="flex flex-col items-center">
                    <UploadCloudIcon />
                    <div className="flex items-end h-fit gap-1">
                      <p>
                        <span className="text-primary font-medium">
                          {"Click to upload "}
                        </span>
                        or drag and drop CSV, XSLX (max. 10mb)
                      </p>
                      <CsvFileIcon />
                    </div>
                  </div>
                </div>
              </div>
            </CustomFileUploader>
          </div>

          <div className="flex-1 flex gap-2 border-widget-border border p-2 rounded-xl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ">
            <FileCsvIcon />
            <div className="flex flex-col flex-1 gap-2">
              <div className="flex-1 flex gap-2 justify-between ">
                <div className="flex-1">
                  <p className="font-medium">{fileName}</p>
                  <p>{fileSize}</p>
                </div>

                <Button variant={"plain"} className="text-bold px-0">
                  <DeleteIcon />
                </Button>
              </div>
              <div className="w-full flex items-center gap-2">
                <div className="relative h-2 w-full bg-[#EAECF0] rounded-full">
                  <div className="rounded-full absolute h-full bg-primary z-1 w-[80%]"></div>
                </div>
                <p className="text-sm font-medium">{"80%"}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4 ">
            <Button
              variant={"bordered"}
              className="w-full max-w-[500px] text-lg font-semibold"
              onClick={close}
            >
              Cancel
            </Button>

            <Button
              className="w-full max-w-[500px] text-lg font-semibold"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </main>
      </div>
    </Modal>
  );
};

export default UploadBranch;
