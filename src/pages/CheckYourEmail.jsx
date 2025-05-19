import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


const CheckYourEmail = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const CheckYourEmail = () => {
        setIsSubmitting(true);
        // Simulate an API call
        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000);
    }
    const handleCheckYourEmail = (data) => {
        setIsSubmitting(true);
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    };
  return (
    <div>
      <AuthWrapper>
        <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full max-w-[453px] ">
              <Link to="/register">
                      <button className="flex items-center gap-1.5 ">
                        <FaArrowLeft /> Back
                      </button>
                    </Link>
          <div className="max-w-[332px] mt-4">
            <h1 className="text-2xl lg:text-[30px] font-semibold">
              Check your email
            </h1>
            <p className=" text-[#666] text-[16px] font-normal">
              Check the email address olafarid12@gmail.com for instructions to
              reset your password.
            </p>
            
            <button
              type="submit"
              className=" bg-white text-black btn w-full mt-5 font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-md text-black"></span>
              ) : (
                "Resend Mail"
              )}
            </button>
          </div>
        </div>
      </AuthWrapper>
    </div>
  );
};

export default CheckYourEmail;
