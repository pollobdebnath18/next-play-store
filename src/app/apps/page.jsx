import TrendingApps from "@/components/homepage/TrendingApps";

export const metadata = {
  title: "Play Store AppsPage",
};

const AppsPage = () => {
  return (
    <div>
      <TrendingApps from="apps"></TrendingApps>
    </div>
  );
};

export default AppsPage;
