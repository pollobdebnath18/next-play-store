"use client";

import { InstalledAppContext } from "@/context/InstalledAppContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallButton = ({ expectedApp }) => {
  const { installApps, setInstallApps } = useContext(InstalledAppContext);
  console.log(installApps, "apps from context");

  const handleInstall = () => {
    setInstallApps([...installApps, expectedApp]);
    toast.success(`${expectedApp.title} is install Successfully`);
  };
  const isInstalled = installApps.find((ap) => ap.id === expectedApp.id);
  console.log(isInstalled);
  return (
    <div>
      <button disabled={isInstalled?true:false}
        onClick={handleInstall}
        className={`btn text-white ${isInstalled? "opacity-80":"bg-green-600"}`}
      >
        Install Now MB
      </button>
    </div>
  );
};

export default InstallButton;
