import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CreateProfile = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  const [bio, setBio] = useState("");
  const [number, setNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [place, setPlace] = useState("");
  const [nationality, setNationality] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://auth-backend-qvke.onrender.com/api/showuser", {
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);

  // console.log(data);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://auth-backend-qvke.onrender.com/api/profile",
        {
          bio,
          number,
          dateOfBirth,
          place,
          nationality,
        },
        {
          withCredentials: true,
        },
      );
      toast.success(res.data.msg);
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.msg);
      } else if (err.request) {
        toast.error("Server did not respond. Try again later.");
      } else {
        alert("Something went wrong!");
      }
    }
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-[50%] text-center font-DM">
        <h1 className="text-[40px]">
          Welcome <span className="font-bold">{data.name}</span>
        </h1>
        <p>Your Email : {data.email}</p>
        <div className="flex flex-col">
          <button
          onClick={() => setEdit(!edit)}
          className="btn btn-soft mt-[20px]"
        >
          Edit Profile
        </button>

        <button
          className="btn btn-soft mt-[20px]"
          onClick={() => navigate("/profile")}
        >
          Go to Profile
        </button>

        <button onClick={()=> navigate("/notes")} className="btn btn-soft mt-[20px]">Go to Notes</button>
        </div>

        {edit && (
          <form action="" onSubmit={handleUpdate}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Enter your bio</legend>
              <input
                onChange={(e) => setBio(e.target.value)}
                type="text"
                className="input m-auto"
                placeholder="Type bio"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Enter your number</legend>
              <input
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                className="input m-auto"
                placeholder="Type number"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Enter your Date of Birth
              </legend>
              <input
                type="date"
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="input m-auto"
                placeholder="Type Date of Birth"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Enter your Location</legend>
              <input
                type="text"
                onChange={(e) => setPlace(e.target.value)}
                className="input m-auto"
                placeholder="Type Location"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Enter your nationality
              </legend>
              <input
                type="text"
                onChange={(e) => setNationality(e.target.value)}
                className="input m-auto"
                placeholder="Type nationality"
              />
            </fieldset>
            <button className="btn btn-soft mt-[20px]">Create Profile</button>
          </form>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default CreateProfile;
