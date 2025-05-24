import ChevronRight from "../../../assets/comps/chevron-right";

type Props = {
  icon: React.ReactNode;
  title: string;
};
const AccessCard = ({ icon, title }: Props) => {
  return (
    <div className="bg-background flex items-center justify-start gap-4 p-4 rounded-[10px] flex-1 max-w-[280px] cursor-pointer text-nowrap">
      <div className="text-white bg-primary p-1 rounded-full aspect-square flex items-center justify-center">
        {icon}
      </div>
      <p className="font-medium capitalize">{title}</p>
      <ChevronRight className="text-input-icon" />
    </div>
  );
};

export default AccessCard;
