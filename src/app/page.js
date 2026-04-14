import BannerPage from "@/components/homepage/BannerPage";
import Stats from "@/components/homepage/Stats";
import TrendingApps from "@/components/homepage/TrendingApps";

export default function Home() {
  return <div>
    <BannerPage></BannerPage>
    <Stats></Stats>
    <TrendingApps from='homepage'></TrendingApps>
  </div>
}
