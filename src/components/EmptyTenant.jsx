import React from "react";
import img from "../assets/Frame2.png";
const EmptyTenant = () => {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <div className="text-center p-1.5">
        <img src={img} alt="image" className="mx-auto block" />
        <h1 className="font-medium text-xl my-2.5"> No match found</h1>
        <p className="text-[#666] font-medium text-[16px] mb-6">
          we couldn't find any house that matches your request.
        </p>
      </div>
    </div>
  );
};

export default EmptyTenant;
