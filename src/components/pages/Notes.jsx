import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Notes = () => {
  const [notes, setNotes] = useState("");
  const handleNote = async (e) => {
    e.preventDefault();
    // console.log(note);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/notes",
        { notes },
        { withCredentials: true },
      );
      toast.success(res.data.msg)
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
        <form action="" onSubmit={handleNote}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Notes</legend>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              className="textarea h-24"
              placeholder="Notes"
            ></textarea>
            <button className="btn">Add</button>
          </fieldset>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Notes;
