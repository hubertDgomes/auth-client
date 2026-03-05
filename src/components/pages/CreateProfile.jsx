import axios from "axios";
import React, { useEffect, useState } from "react";


const CreateProfile =  () => {
  const [data , setData] = useState([])

   useEffect(() => {
  const res = axios.get("https://auth-backend-qvke.onrender.com/api/showuser", {
    withCredentials: true
  })
  .then(data => setData(data.data))
}, [])

  console.log(data);
  



  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-[50%] text-center font-DM">
        <h1 className="text-[40px]">Welcome <span className="font-bold">{data.name}</span></h1>
        <p>Your Email : {data.email}</p>
      </div>
    </>
  );
};

export default CreateProfile;
