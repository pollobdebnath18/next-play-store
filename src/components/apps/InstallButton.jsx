import React from "react";

const handleInstall = (expectedApp) => {
  const checkApp = apps.find((ap) => ap.id === expectedApp.id);

  if (!checkApp) {
    setInstallApps([...installApps, expectedApp]);
    toast.success(`${expectedApp.title} Successfully installed`);
  } else {
    toast.error(`${expectedApp.title} is already installed`);
  }
};

const InstallButton = () => {
  return (
    <div>
      <button
        onClick={() => handleInstall(expectedApp)}
        className={`btn text-white ${checkApp ? " bg-gray-300" : "bg-[#00D390]"}`}
      >
        Install Now ({size}MB)
      </button>
    </div>
  );
};

export default InstallButton;
