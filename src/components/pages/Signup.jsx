import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Signup = () => {

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const navigate = useNavigate()

  const handleSign = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:3000/api/signup",{
        name,
        email,
        password
      })
      toast.success(`If ${email} is valid, then check your email inbox to verify the OTP.`);
      navigate("/otp" , {state : {email}})
    }
    catch(err){
      if (err.response) {
        toast.error(err.response.data.msg)
      } else if (err.request) {
        toast.error("Server did not respond. Try again later.")
      } else {
        toast.error("Something went wrong!")
      }
      
    }
    
  }


  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-[50%] text-center font-DM">
        <form onSubmit={handleSign}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter your name</legend>
            <input
              onChange={(e)=> setName(e.target.value)}
              type="text"
              className="input"
              placeholder="Type your name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter the email</legend>
            <input
              onChange={(e)=> setEmail(e.target.value)}
              type="email"
              className="input"
              placeholder="Type email"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter the password?</legend>
            <input
              onChange={(e)=> setPassword(e.target.value)}
              type="password"
              className="input"
              placeholder="Type password"
            />
          </fieldset>

          <button className="btn btn-soft">Log in</button>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Signup;
