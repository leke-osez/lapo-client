import { memo, useState } from "react";
import type { CreateRoleType } from "../../libs/schema/role";
import TablePageLayout from "../layouts/table-page-layout";
import { createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "../../ui/components/checkbox";
import { Button } from "../../ui/components/button";
import { routePaths } from "../../routes/route-paths";
import { useNavigate } from "react-router-dom";

const transformMenuToData = (menu: string[]): CreateRoleType[] =>
  menu.map((item) => ({
    menuName: item,
    full: false,
    create: false,
    edit: false,
    view: false,
    delete: false,
  }));
const menus = [
  "branch",
  "user",
  "role",
  "cards",
  "cardRequest",
  "authorizationList",
  "authorizationQueue",
  "activity",
];

type HandleCheckProps = { id: string; checked: boolean; column: string };

const CreateRolePage = memo(() => {
  const navigate = useNavigate();
  const [data, setData] = useState(transformMenuToData(menus));
  //   const data = useMemo(() => , []);
  const columnHelper = createColumnHelper<CreateRoleType>();
  const handleCheck = ({ id, checked, column }: HandleCheckProps) => {
    setData(
      data.map((item, index) => {
        if (String(id) === String(index)) {
          return { ...item, [column]: checked };
        } else return item;
      })
    );
  };

  const columns = [
    columnHelper.accessor("menuName", {
      header: () => <span>Menu Name</span>,
      cell: (info) => (
        <div className="w-full capitalize flex justify-start text-start">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("full", {
      header: () => <span>Full</span>,
      cell: (info) => (
        <Checkbox
          variant={"bordered"}
          checked={info.getValue()}
          onCheckedChange={(check) =>
            handleCheck({
              id: info.row.id,
              checked: !check || typeof check === "string" ? false : true,
              column: info.column.id,
            })
          }
        />
      ),
    }),
    columnHelper.accessor("create", {
      header: () => <span>create</span>,
      cell: (info) => (
        <Checkbox
          variant={"bordered"}
          checked={info.getValue()}
          onCheckedChange={(check) =>
            handleCheck({
              id: info.row.id,
              checked: !check || typeof check === "string" ? false : true,
              column: info.column.id,
            })
          }
        />
      ),
    }),
    columnHelper.accessor("edit", {
      header: () => <span>edit</span>,
      cell: (info) => (
        <Checkbox
          variant={"bordered"}
          checked={info.getValue()}
          onCheckedChange={(check) =>
            handleCheck({
              id: info.row.id,
              checked: !check || typeof check === "string" ? false : true,
              column: info.column.id,
            })
          }
        />
      ),
    }),
    columnHelper.accessor("view", {
      header: () => <span>view</span>,
      cell: (info) => (
        <Checkbox
          variant={"bordered"}
          checked={info.getValue()}
          onCheckedChange={(check) =>
            handleCheck({
              id: info.row.id,
              checked: !check || typeof check === "string" ? false : true,
              column: info.column.id,
            })
          }
        />
      ),
    }),
    columnHelper.accessor("delete", {
      header: () => <span>delete</span>,
      cell: (info) => (
        <Checkbox
          variant={"bordered"}
          checked={info.getValue()}
          onCheckedChange={(check) =>
            handleCheck({
              id: info.row.id,
              checked: !check || typeof check === "string" ? false : true,
              column: info.column.id,
            })
          }
        />
      ),
    }),
  ];

  const createRole = () => {
    navigate(routePaths.roles.index);
  };

  return (
    <div>
      <TablePageLayout
        data={data}
        columns={columns}
        title="Create Role"
        description="Set role name, select privileges and permissions."
        inputProps={{ label: "Role name*", placeholder: "Enter role name" }}
      />

      <Button onClick={createRole} className="mt-4">
        Create Role
      </Button>
    </div>
  );
});

export default CreateRolePage;
