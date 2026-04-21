import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
// import useApps from "@/hooks/useApps";
import Link from "next/link";

const fetchData = async () => {
  const res = await fetch("http://localhost:3000//data.json");
  const data = await res.json();
  return data;
};

const TrendingApps = async ({ from }) => {
  console.log(from);
  const apps = await fetchData();
  //   const { apps, loading } = useApps();
  //  console.log(apps, loading);
  return (
    <div className="max-w-[1200px] mx-auto my-16">
      <div className="text-center">
        <h2 className="text-5xl font-bold">
          {from === "homepage" ? "Trending Apps" : "Our All Apps"}
        </h2>
        <p className="text-[#627382] pt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/* {loading ? (
        <div className="flex justify-center items-center pt-5">
          <HashLoader color="#00D390" />
        </div>
      ) : ( */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-20 md:mx-10 lg:mx-0">
        {apps
          .slice(0, from === "homepage" ? 9 : apps.length)
          .map((app, idx) => (
            <AppCard key={idx} app={app}></AppCard>
          ))}
      </div>
      {/* )} */}
      {from === "apps" ? null : (
        <div className="text-center mt-5 text-white">
          <Link href="/apps">
            <button className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white ">
              View All
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TrendingApps;
