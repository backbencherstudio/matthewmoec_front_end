import React from "react";

const Box = ({ children }: { children: React.ReactNode }) => {
  return <div className=" max-w-360 mx-auto">{children}</div>;
};

export default Box;
