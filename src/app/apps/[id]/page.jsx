import Image from "next/image";
import React from "react";
// import { Image } from "";
import DownloadImg from "../../../assets/images/icon-downloads.png";
import RatingImg from "../../../assets/images/icon-ratings.png";
import ReveiwImg from "../../../assets/images/icon-review.png";
import InstallButton from "@/components/apps/InstallButton";




const fetchData = async () => {
  const res = await fetch("http://localhost:3000//data.json");
  const data = await res.json();
  return data;
};
const AppDetails = async ({ params }) => {
  const apps = await fetchData();
  const { id } = await params;
  //   console.log("apps: ",apps, "ID",typeof id);
  const expectedApp = apps.find((app) => app.id === Number(id));

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    size,
    reviews,
    ratingAvg,
    ratings,
  } = expectedApp;

  const checkApp = apps.find((ap) => ap.id === expectedApp.id);


  console.log(expectedApp);
  return (
    <div className="max-w-[1200px] mx-auto my-16">
      <div className="flex flex-col md:flex-row items-center gap-4 px-10 py-5">
        <div className="shadow-lg bg-white w-full md:w-[30%] flex justify-center items-center p-6">
          <Image
            className="w-[300px] h-[300px] rounded-xl object-contain"
            src={image}
            alt="image"
            width={300}
            height={300}
          />
        </div>
        <div className="space-y-6 bg-blue-50 w-full md:w-[70%] px-10 py-10 rounded-lg">
          <div>
            <h2 className="text-3xl text-[#001931] font-bold">{title}</h2>
            <p className="text-[#627382] font-semibold">
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </p>
          </div>
          <span className="border-t "></span>
          <div className="grid grid-cols-3 gap-10 ">
            <div className="space-y-2">
              <Image src={DownloadImg} alt="downloads" />
              <div className="flex flex-col">
                <span>Downloads</span>
                <span className="text-2xl text-[#001931] font-bold">
                  {downloads}
                </span>
              </div>
            </div>
            <div>
              <div>
                <Image src={RatingImg} alt="rating" />
                <div className="flex flex-col">
                  <span>Average Ratings</span>
                  <span className="text-2xl text-[#001931] font-bold">
                    {ratingAvg}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Image src={ReveiwImg} alt="reviews" />
                <div className="flex flex-col">
                  <span>Total Reviews</span>
                  <span className="text-2xl text-[#001931] font-bold">
                    {reviews}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
           {/* button */}
           {/* <InstallButton></InstallButton> */}
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <h2 className="text-xl font-bold ml-10">Ratings</h2>
      </div>
      {/* <Chart ratings={ratings}></Chart> */}

      <div className="mt-10 py-6">
        <h2 className="text-xl font-bold ml-10">Description</h2>
        <p className="ml-10 pt-5">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
