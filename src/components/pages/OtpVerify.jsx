import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const OtpVerify = () => {
  const location = useLocation();

  const data = location.state;
  const email = data?.email;
  const [otp, setOtp] = useState("");

  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://auth-backend-qvke.onrender.com/api/otp", {
        email,
        otp,
      });
      toast.success(res.data.msg);
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.msg);
      } else if (err.request) {
        toast.error("Server did not respond. Try again later.");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-[50%] text-center font-DM">
        <form onSubmit={handleOtp}>
        <h1 className="">
          The email varification OTP has been sent to <span className="font-bold">"{email}"</span>. Check your inbox
          or spam(If not found)
        </h1>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter the OTP</legend>
            <input
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              className="input m-auto"
              placeholder="Enter the OTP"
            />
          </fieldset>
          <button className="btn btn-soft">Verify</button>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default OtpVerify;
