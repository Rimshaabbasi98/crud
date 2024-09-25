import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewUser = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4545/api/crud", formData)
        .then((res) => setFormData("Response Data", res));
      navigate("/");
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <div className="py-24 bg-blue-200 w-full h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[50%] mx-auto bg-blue-100 border border-blue-600 rounded-2xl p-6"
      >
        <h2 className="text-4xl font-bold text-blue-800 text-center">
          Add New User
        </h2>

        <label htmlFor="name">First Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full py-2 my-2 placeholder:text-black border border-blue-600 rounded-3xl px-4"
        />

        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="w-full py-2 my-2 placeholder:text-black border border-blue-600 rounded-3xl px-4"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full py-2 my-2 placeholder:text-black border border-blue-600 rounded-3xl px-4"
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          placeholder="Enter your number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full py-2 my-2 placeholder:text-black border border-blue-600 rounded-3xl px-4"
        />

        <div className="flex items-center justify-center">
          <button className="bg-blue-100 border border-blue-600 py-2 px-4 rounded-lg hover:bg-blue-800 hover:text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
