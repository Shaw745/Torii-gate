import { useNavigate, useParams, Link } from "react-router-dom";
import { axiosInstance } from "../utilis/axiosInstance";
import { useState, useEffect } from "react";
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
    checkToken();
  }, []);

  if (status === "verifying") {
    return <div> verifiying...</div>;
  }
  if (status === "success") {
    return (
      <div>
        <h1> Email Verified Successfully</h1>
        <Link to="/login">
          <button>Proceed toLogin</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Verification Failed</h1>
      <p>{errorMsg}</p>
      <button> RESEND VERIFICATION EMAIL </button>
    </div>
  );
};

export default VerifyEmail;
