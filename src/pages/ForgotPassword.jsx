import React, { useState } from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { axiosInstance } from "../utils/axiosInstance";
import { forgotPasswordSchema } from "../utils/formValidator";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const redirect = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const handleForgotPassword = async (data) => {
    setIsSubmitting(true);
    try {
      const response =await axiosInstance.post("/auth/forgot-password", { ...data });
      if (response.status === 200) {
        localStorage.setItem("email", data.email);
        redirect("/check-email");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full max-w-[453px]">
        <Link to="/register">
          <button className="flex items-center gap-1.5">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="max-w-[332px] mt-4">
          <h1 className="text-2xl lg:text-[30px] font-semibold">
            Forgot your Password?
          </h1>
          <p className=" text-[#666] text-[16px] font-normal">
            We will send instructions to your email to reset your password
          </p>
        </div>
        <form className="mt-4" onSubmit={handleSubmit(handleForgotPassword)}>
          <label
            htmlFor="email"
            className="mt-6 font-bold text-[16px] mb-1.5
           "
          >
            {" "}
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            {...register("email")}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {errors.email && (
            <p className="text-red-700 text-sm mt-1">{errors.email.message}</p>
          )}

          {errorMessage && (
            <div className="w-full rounded-xl py-2 my-2.5 px-4 bg-[#FF37370D] border border-[#ff3737] text-[#ff3737] flex items-center gap-3">
              <PiWarningCircle size={22} />
              <p>{errorMessage}</p>
            </div>
          )}
          <button
            type="submit"
            className=" bg-black text-white btn w-full mt-5 font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md text-black"></span>
            ) : (
              "Continue"
            )}
          </button>
        </form>
        <p className="text-[#666] text-[16px] font-normal mt-10 flex items-center justify-center">
          Remember your password?
          <span className="text-black font-bold">Sign in</span>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
