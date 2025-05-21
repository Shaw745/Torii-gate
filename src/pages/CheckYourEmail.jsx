import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const CheckYourEmail = () => {
  const email = localStorage.getItem("email");
  const maskEmail = (email) => {
    const [start, domain] = email.split("@");
    if ((start, length <= 2)) {
      return `${start[0]}...@${domain}`;
    }
    return `${start.slice(0, 2)}...@${domain}`;
  };
 
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full lg:w-[453px]">
        <Link to="/register">
          <button className="flex items-center gap-1.5">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="max-w-[332px] mt-4">
          <h1 className="text-2xl lg:text-[30px] font-[600] text-[#000000]">
            Check Your Email
          </h1>
          <p className="text-[16px] font-[400] text-[#666666] ">
            Check the email address{" "}
            <span className="font-[700]">{maskEmail(email)} </span>
            instructions to reset your password.
          </p>
        </div>
        <Link to="/forgot-password" 
        className=" text-[#0c0c0c] text-[16px] font-[500] mt-4 flex items-center gap-1.5">
           Didn't get a link,resend mail </Link>
      </div>
    </AuthWrapper>
  );
};

export default CheckYourEmail;
