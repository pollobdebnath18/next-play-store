import Link from "next/link";
import React from "react";

const DetailsNotFound = () => {
  return (
    <div className="text-center space-y-4 h-screen flex flex-col justify-center items-center">
      <h2 className="text-7xl text-red-300"> 404</h2>
      <h1 className="text-6xl text-purple-600 font-extrabold">
        This is Not Found Page in app details page
      </h1>
      <Link href="/apps">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default DetailsNotFound;
