import React from "react";

const SideContent = () => {
  const backgroundStyle = {
    backgroundImage: `url('/public/assets/imgs/sign-in-bg.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return <div style={backgroundStyle} className="h-[100vh]"></div>;
};

export default SideContent;
