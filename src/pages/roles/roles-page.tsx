import { createColumnHelper } from "@tanstack/react-table";
import AddICon from "../../assets/comps/add-icon";
import TablePageLayout from "../layouts/table-page-layout";
import type { RoleType } from "../../libs/schema/role";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../routes/route-paths";

const data = [{ name: "Admin", dateCreated: "11/07/2024 19:55:57" }];

const RolesPage = () => {
  const columnHelper = createColumnHelper<RoleType>();
  const navigate = useNavigate();
  const columns = [
    columnHelper.accessor("name", {
      header: () => <span>Name</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateCreated", {
      header: () => <span>Date Created</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: () => <span>Actions</span>,
    }),
  ];

  const gotoCreateRole = () => {
    navigate(`${routePaths.roles.index}/${routePaths.roles.createRole}`);
  };
  return (
    <div>
      <TablePageLayout
        columns={columns}
        data={data}
        title="Roles"
        description="Manage your roles, create roles, view roles and edit roles. Select privileges and set account permissions here."
        searchProps={{
          placeholder: "Search role",
          className: "rounded-lg max-w-[300px] placeholder:text-input-icon",
        }}
        tableActionProps={[
          {
            title: "create Role",
            icon: <AddICon />,
            action: gotoCreateRole,
            className: "text-xs",
          },
        ]}
        // deleteAction={(id: string) => {}}
        // editAction={(id: string) => {}}
      />
    </div>
  );
};

export default RolesPage;
