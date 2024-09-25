import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4545/api/update/${id}`
          );
          setValues(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUser();
    }
  }, [values]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4545/api/update/${id}`,
        values
      );
      console.log("Response:", response.data.NewUser);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="py-24 bg-blue-200 w-full h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[50%] mx-auto bg-blue-100 border border-blue-600 rounded-2xl p-6"
      >
        <h2 className="text-4xl font-bold text-blue-800 text-center">
          Update User
        </h2>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full py-2 my-2 placeholder:text-black border border-blue-600 rounded-3xl px-4"
        />
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={values.lastname}
          onChange={handleChange}
          placeholder="Enter your last name"
          className="w-full py-2 my-2 placeholder:text-black border border-blue-600 rounded-3xl px-4"
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full py-2 my-2 placeholder:text-black border border-blue-600 rounded-3xl px-4"
        />
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Enter your phone"
          className="w-full py-2 my-2 placeholder:text-black border border-blue-600 rounded-3xl px-4"
        />
        <div className="flex items-center justify-center">
          <button className="bg-blue-100 border border-blue-600 py-2 px-4 rounded-lg hover:bg-blue-800 hover:text-white">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
