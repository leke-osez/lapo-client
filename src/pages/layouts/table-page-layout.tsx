import type { JSX } from "react";
import SearchIcon from "../../assets/comps/search-icon";
import { Button } from "../../ui/components/button";
import { Input } from "../../ui/components/input";
import { cn } from "../../utils/namespaces/style";
import CustomTable, {
  type CustomTableProps,
} from "../../ui/containers/custom-table";
import EditIcon from "../../assets/comps/edit-icon";
import DeleteIcon from "../../assets/comps/delete-icon";
import { Label } from "../../ui/components/label";

type Props = {
  title: string;
  description: string;
  headerActionProps?: Array<{
    title: string;
    icon: React.ReactNode;
    action: () => void;
    className?: string;
  }>;
  searchProps?: {
    placeholder: string;
    className?: string;
  };
  inputProps?: {
    placeholder: string;
    className?: string;
    label?: string;
  };
  tableActionProps?: Array<{
    title: string;
    icon: JSX.Element;
    action: () => void;
    className?: string;
  }>;
  data: unknown[];
  deleteAction?: (id: string) => void;
  editAction?: (id: string) => void;
  columns: CustomTableProps["columns"];
};

const TablePageLayout = ({
  title,
  description,
  data,
  headerActionProps,
  searchProps,
  inputProps,
  tableActionProps,
  // deleteAction,
  // editAction,
  columns,
}: Props) => {
  const columnsWithActions = columns.map((column) => {
    if (column.id === "actions") {
      return {
        ...column,
        cell: () => (
          <div className="flex gap-2">
            <Button
              variant="plain"
              className="p-1"
              // onClick={() => deleteAction(row.original.id)}
            >
              <EditIcon />
            </Button>
            <Button
              variant="plain"
              className="p-1"
              // onClick={() => editAction(row.original.id)}
            >
              <DeleteIcon />
            </Button>
          </div>
        ),
      };
    }
    return column;
  });
  return (
    <div>
      <header className="flex items-end justify-between py-4 border-b border-[#98A2B3] pb-3 mb-3">
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm font-normal">{description}</p>
        </div>
        {headerActionProps?.map((action, index) => (
          <Button
            key={index}
            variant={"bordered"}
            className={cn(
              `text-action-button flex gap-1 text-xs `,
              action.className
            )}
            onClick={action.action}
          >
            {action.icon}
            <span>{action.title}</span>
          </Button>
        ))}
      </header>

      <section className="flex justify-between items-center">
        {!inputProps && (
          <Input
            {...searchProps}
            placeholder={searchProps?.placeholder}
            leftIcon={<SearchIcon />}
            className="rounded-lg max-w-[300px] placeholder:text-input-icon"
          />
        )}

        {inputProps && (
          <div className="flex flex-col gap-2">
            <Label>{inputProps.label}</Label>
            <Input
              {...inputProps}
              placeholder={inputProps.placeholder}
              className="rounded-lg max-w-[300px] placeholder:text-input-icon"
            />
          </div>
        )}

        <div className="flex gap-3 items-center text-xs">
          {tableActionProps?.map((action, index) => (
            <Button
              key={index}
              className={cn(
                `flex gap-1 items-center text-xs`,
                action.className
              )}
              onClick={action.action}
              variant={index === 1 ? "bordered" : "primary"}
            >
              {action.icon}
              <p>{action.title}</p>
            </Button>
          ))}
        </div>
      </section>

      <section className="mt-4">
        <CustomTable data={data} columns={columnsWithActions} />
      </section>
    </div>
  );
};

export default TablePageLayout;
