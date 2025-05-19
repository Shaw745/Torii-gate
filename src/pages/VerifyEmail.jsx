import { useNavigate, useParams, Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useState, useEffect } from "react";
import layer from "../assets/layer.png";
import {BounceLoader} from "react-spinners"; 
import { MdCancel } from "react-icons/md";

const VerifyEmail = () => {
  const { token } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("verifying");
  const checkToken = async () => {
    try {
      const response = await axiosInstance.post(`/auth/verify-email/${token}`, {
        token,
      });
      if (response.status === 200) {
        setStatus("success");
      }
    } catch (error) {
      setErrorMsg("Email Verification Failed");
      setStatus("error");
    }
  };

  useEffect(() => {
    // checkToken();
  }, []);

  if (status === "verifying") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <BounceLoader className="mx-auto  my-2" />

          <h1 className="text-xl lg:text-[30px] font-semibold my-3">
            email verifying...
          </h1>
          <p className="text-[#666] text-[16px] font-normal mb-8">
            Please wait while we verify your email address. This may take a
            few moments.
          </p>
        </div>
      </div>
    );
  }
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <img src={layer} alt="verify" className="block mx-auto" />
          <h1 className="text-xl lg:text-[30px] font-semibold my-3"> Verified Successfully</h1>
          <p className="text-[#666] text-[16px] font-normal mb-8">
            Your account has been verified successfully.
          </p>
          <Link to="/login">
            <button className="w-full font-semibold rounded-xl bg-black text-white h-[56px] cursor-pointer">Proceed to Login</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
        <MdCancel size={80} className="text-red-500 mx-auto my-2" />
        <h1 className="text-xl lg:text-[30px] font-semibold my-3">
          {" "}
          Verified Failed
        </h1>
        <p className="text-[#666] text-[16px] font-normal mb-8">
        invalid  or expired token
        </p>
        <Link to="/login">
          <button className="w-full font-semibold rounded-xl bg-black text-white h-[56px] cursor-pointer">
          Resend  Verification Email
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
