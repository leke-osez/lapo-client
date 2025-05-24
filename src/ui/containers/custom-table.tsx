import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { cn } from "../../utils/namespaces/style";

export type CustomTableProps = {
  data: unknown[];
  columns: ColumnDef<unknown, unknown>[];
  headClass?: string;
  dataClass?: string;
};

const CustomTable = ({
  data,
  columns,
  headClass,
  dataClass,
}: CustomTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full ">
      <table className="w-full border-collapse  border-table-border text-table-text">
        <thead className={cn("bg-[#F9FAFB] text-lg font-normal", headClass)}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-table-border text-sm p-2 capitalize"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white text-xs font-normal">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={cn("border-b border-table-border", dataClass)}
                >
                  <div className="p-2 flex justify-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
