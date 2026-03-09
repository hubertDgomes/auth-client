import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getprofile", {
        withCredentials: true,
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(data);

  if (!data) return;
  <div className="absolute top-1/2 left-1/2 -translate-[50%] text-center font-DM">
    <p>Loading...</p>
  </div>;

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-[50%] text-center font-DM">
        <h1 className="font-bold">Name : <span className="font-light underline">{data.user?.name}</span></h1>
        <p className="font-bold">Email : <span className="font-light underline">{data.user?.email}</span></p>
        <p className="font-bold">Number : <span className="font-light underline">{data.number}</span></p>
        <p className="font-bold">Place : <span className="font-light underline">{data.place}</span></p>
        <p className="font-bold">Nationality : <span className="font-light underline">{data.nationality}</span></p>
        <p className="font-bold">Date of Birth : <span className="font-light underline">{data.dateOfBirth}</span></p>
        <p className="font-bold">Bio : <span className="font-light underline">{data.bio}</span></p>
      </div>
    </>
  );
};

export default Profile;
