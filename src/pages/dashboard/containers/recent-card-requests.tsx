import { createColumnHelper } from "@tanstack/react-table";
import ExpandIcon from "../../../assets/comps/expand-icon";
import CustomTable from "../../../ui/containers/custom-table";
import type { RecentCardRequestType } from "../../../libs/schema/recent-card-request";
import { Button } from "../../../ui/components/button";

const colors = {
  ready: { color: "#ABEFC6", bg: "#ECFDF3", text: "#067647" },
  "in progress": { color: "#FEDF89", bg: "#FFFAEB", text: "#B54708" },
  acknowledged: { color: "#B2DDFF", bg: "#EFF8FF", text: "#175CD3" },
  pending: { color: "#EAECF0", bg: "#F9FAFB", text: "#344054" },
};

const RecentCardRequest = () => {
  const data: RecentCardRequestType[] = [
    {
      branch: "Corporate",
      cardType: "instant",
      quantity: 10,
      status: "ready",
    },
    {
      branch: "Corporate",
      cardType: "personalized",
      quantity: 10,
      status: "in progress",
    },
    {
      branch: "Corporate",
      cardType: "instant",
      quantity: 10,
      status: "acknowledged",
    },
    {
      branch: "Corporate",
      cardType: "instant",
      quantity: 10,
      status: "pending",
    },
  ];

  const handleView = (id: string) => {};
  const columnHelper = createColumnHelper<RecentCardRequestType>();

  const columns = [
    columnHelper.accessor("branch", {
      header: () => <span>Branch </span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("cardType", {
      header: () => <span>Card Type</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("quantity", {
      header: () => <span>Quantity</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: () => <span>Status</span>,
      cell: (info) => {
        const value = info.getValue();
        const theme = colors[value];
        return (
          <button
            style={{
              color: theme.text,
              backgroundColor: theme.bg,
              borderColor: theme.color,
            }}
            className="rounded-full py-[2px] px-4 border text-xs"
          >
            {value}
          </button>
        );
      },
    }),

    columnHelper.display({
      id: "actions",
      header: () => <span>Action</span>,
      cell: ({ row }) => (
        <Button
          className="text-primary text-xs"
          onClick={() => handleView(row.id)}
          variant={"plain"}
        >
          View
        </Button>
      ),
    }),
  ];

  return (
    <div className="w-full ">
      <CustomTable
        data={data}
        columns={columns}
        headClass="bg-background"
        dataClass=""
      />
    </div>
  );
};

const Status = ({ type }) => {
  return (
    <div className="">
      <p></p>
    </div>
  );
};

export default RecentCardRequest;
