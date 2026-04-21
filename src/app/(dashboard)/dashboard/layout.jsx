import Footer from "@/components/shared/Footer/Footer";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex gap-x-56 ">
        <div className="h-screen w-[300px] bg-purple-500 text-black flex justify-center items-center text-5xl font-extrabold">
          SideBar
        </div>

        <div className="flex flex-col">
          {children}
          <Link href="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default layout;
