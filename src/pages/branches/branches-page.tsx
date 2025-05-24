import { createColumnHelper } from "@tanstack/react-table";
import AddICon from "../../assets/comps/add-icon";
import UpdateIcon from "../../assets/comps/update-icon";
import UploadFileIcon from "../../assets/comps/upload-file";
import {
  addBranchSchema,
  type AddBranchType,
  type BranchType,
} from "../../libs/schema/branch";
import TablePageLayout from "../layouts/table-page-layout";
import { useDisclosure } from "../../hooks/use-disclosure";
import CreateBranch from "./containers/create-branch";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UploadBranch from "./containers/upload-branch";

const BranchesPage = () => {
  const data: BranchType[] = [
    {
      name: "Branch 1",
      code: "202",
      address: "lekki",
      zone: "lagos",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      name: "Branch 2",
      code: "202",
      address: "lekki",
      zone: "lagos",
      dateAdded: "10/18/2024 14:39:58",
    },
  ];
  const columnHelper = createColumnHelper<BranchType>();

  const columns = [
    columnHelper.accessor("name", {
      header: () => <span>Branch Name</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("code", {
      header: () => <span>Branch Code</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("address", {
      header: () => <span>Branch Address</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("zone", {
      header: () => <span>Branch Zone</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateAdded", {
      header: () => <span>Date Added</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: () => <span>Actions</span>,
    }),
  ];

  const form = useForm<AddBranchType>({
    resolver: zodResolver(addBranchSchema),
    defaultValues: { name: "", code: "", address: "", zone: "", area: "" },
  });

  const {
    isOpen: isAddBranchOpen,
    close: closeBranchModal,
    open: openAddBranchModal,
  } = useDisclosure();

  const {
    isOpen: isUploadBranchOpen,
    close: closeUploadBranchModal,
    open: openUploadBranchModal,
  } = useDisclosure();

  return (
    <div>
      <TablePageLayout
        data={data}
        columns={columns}
        title="Branches"
        description="Add branches, view branches and edit branches"
        headerActionProps={[
          {
            title: "Update File",
            icon: <UploadFileIcon />,
            action: openUploadBranchModal,
            className: "text-action-button",
          },
        ]}
        searchProps={{
          placeholder: "Search branch",
          className: "rounded-lg max-w-[300px] placeholder:text-input-icon",
        }}
        tableActionProps={[
          {
            title: "Add Branch",
            icon: <AddICon />,
            action: openAddBranchModal,
            className: "text-xs",
          },
          {
            title: "Update from Core",
            icon: <UpdateIcon />,
            action: () => {},
            className: "text-xs",
          },
        ]}
        // deleteAction={(id: string) => {}}
        // editAction={(id: string) => {}}
      />

      {isAddBranchOpen && (
        <CreateBranch
          isOpen={isAddBranchOpen}
          close={closeBranchModal}
          form={form} // Pass the form object here
          onSubmit={() => {
            closeBranchModal();
          }}
        />
      )}

      {isUploadBranchOpen && (
        <UploadBranch
          isOpen={isUploadBranchOpen}
          close={closeUploadBranchModal}
        />
      )}
    </div>
  );
};

export default BranchesPage;
