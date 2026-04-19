import React from "react";

const layout = ({children}) => {
  return (
    <div className="flex gap-3 justify-between">
      <div className="h-screen w-[300px] bg-purple-500 text-black flex justify-center items-center text-5xl font-extrabold">
        SideBar
      </div>
      {children}
    </div>
  );
};

export default layout;
