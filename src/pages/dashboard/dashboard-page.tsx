import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/rtk-hook";
import CalendarIcon from "../../assets/comps/calendar-icon";
import WidgetCard from "../../ui/containers/widget-card";
import AccessCard from "./containers/access-card";
import ManageCardIcon from "../../assets/comps/manage-card-icon";
import IssueInstantCardIcon from "../../assets/comps/issue-instant-card-icon";
import IssuePersonalizedCardIcon from "../../assets/comps/issue-personalized-card-icon";
import ReviewCardRequestIcon from "../../assets/comps/review-card-request-icon";
import TotalCards from "./containers/total-cards";
import ActiveCardsIcon from "../../assets/comps/active-cards-icon";
import RecentCardRequest from "./containers/recent-card-requests";
import ExpandIcon from "../../assets/comps/expand-icon";
import { Button } from "../../ui/components/button";
import PersonalizedCardsIcon from "../../assets/comps/personalized-cards-icon";
import { formatToNaira } from "../../utils/namespaces/string";
import PendingRequestIcon from "../../assets/comps/pending-request-icon";
import CardStatusDistribution from "./containers/card-status-disribution";
import MonthlyIssuance from "./containers/monthly-issuance";
import WeekIncome from "./containers/week-income";

const DashboardPage = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div>
      <section className="flex items-start justify-between py-4 ">
        <div className="w-[50%]">
          <h1 className="text-2xl font-bold">
            {`Hi `}
            <span className="capitalize">{`${user.userName}, `}</span>
            {`what would you like to do today?`}
          </h1>
          <p className="text-sm text-input-icon">
            <span className="font-semibold">{`Last login: `}</span>
            {`26/11/2024 14:39:58`}
          </p>
        </div>

        <div className="flex items-center gap-2 border p-1 border-widget-border rounded-[4px] text-xs">
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <p>Today</p>
          </div>
          <p> | </p>

          <p>{`11 Nov 2024`}</p>
        </div>
      </section>

      <WidgetCard title="Your Quick Access" className="flex gap-4 flex-wrap">
        <AccessCard title="Manage a Card" icon={<ManageCardIcon />} />
        <AccessCard
          title="Issue Instant Card"
          icon={<IssueInstantCardIcon />}
        />
        <AccessCard
          title="issue personalized card"
          icon={<IssuePersonalizedCardIcon />}
        />
        <AccessCard
          title="review card requests"
          icon={<ReviewCardRequestIcon />}
        />
      </WidgetCard>

      <section>
        <div className="flex items-center py-4">
          <p className="mr-2 text-lg font-bold">Analytics</p>
          <hr className="flex-1 text-[#D0D5DD] bg-[#D0D5DD]" />
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <TotalCards
            icon={<ActiveCardsIcon className="text-[#00984C]" />}
            title="Total Active Cards"
            total={26478}
            percentChange={9}
            duration={"month"}
          />

          <TotalCards
            icon={<PersonalizedCardsIcon className="text-[#8020E7]" />}
            title="Total Personalized Cards"
            total={15703}
            percentChange={8.5}
            duration={"month"}
          />

          <TotalCards
            icon={<ActiveCardsIcon className="text-[#2087E7]" />}
            title="Today's Revenue"
            total={`${formatToNaira(9.3)}M`}
            percentChange={6}
            duration={"day"}
          />

          <TotalCards
            icon={<PendingRequestIcon className="text-[#E78020]" />}
            title="Pending Requests"
            total={38}
            percentChange={9}
            duration={"month"}
            status="pending"
          />
        </div>

        <div className="flex flex-wrap items-start py-4 gap-4">
          {/* Left - MONTHLY ISSUANCE & WEEK INCOME*/}
          <div className="flex-1 flex-wrap flex flex-col gap-4">
            <WidgetCard title="Monthly Issuance" containerClass="min-w-[450px]">
              <div>
                <MonthlyIssuance />
              </div>
            </WidgetCard>
            <WidgetCard
              title={
                <div className="flex justify-between items-center">
                  <p className="text-base font-medium">This Week's Income</p>
                  <Button variant={"plain"} className="px-0">
                    <ExpandIcon />
                  </Button>
                </div>
              }
              className="aspect-[2/1] min-w-[450px]"
            >
              <WeekIncome />
            </WidgetCard>
          </div>

          {/* Right -RECENT CARD REQUEST & CARD STATUS DISTRIBUTION */}
          <div className="flex-1 flex-wrap flex flex-col gap-4">
            <WidgetCard
              title={
                <div className="flex justify-between items-center">
                  <p className="text-base font-medium">Recent Card Requests</p>
                  <Button variant={"plain"} className="px-0">
                    <ExpandIcon />
                  </Button>
                </div>
              }
              containerClass="min-w-[450px]"
            >
              <RecentCardRequest />
            </WidgetCard>
            <WidgetCard
              title="Card Status Distribution"
              containerClass="min-w-[450px]"
            >
              <CardStatusDistribution />
            </WidgetCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
