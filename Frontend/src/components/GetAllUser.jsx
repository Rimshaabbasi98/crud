import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetAllUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4545/api/allusers")
      .then((res) => setUser(res.data.user))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handelDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:4545/api/delete/${userId}`);
      setUser(user.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error Delete");
    }
  };

  return (
    <>
      <div className="bg-blue-200 w-full h-screen">
        <div className="flex justify-around pb-8 pt-16">
          <h1 className="text-4xl font-bold text-blue-800">Users</h1>
          <Link to="/newuser">
            <button className="bg-blue-100 border border-blue-300 py-2 px-4 rounded-lg hover:bg-blue-800 hover:text-white">
              Add User
            </button>
          </Link>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {user.map((items) => (
              <div
                key={items}
                className="bg-blue-100 border border-blue-300 rounded-lg p-4 shadow-md text-center"
              >
                <div>
                  <h1 className="text-lg font-bold text-blue-800">
                    {items.name} {items.lastname}
                  </h1>
                  <h5 className="text-blue-700">{items.email}</h5>
                  <h6 className="text-blue-600">{items.phone}</h6>
                  <div className="flex justify-around">
                    <Link to={`/update/${items._id}`}>
                      <button className="hover:bg-blue-800 hover:text-white bg-blue-100 border border-blue-300 py-2 px-4 rounded-lg">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="bg-blue-100 border border-blue-300 py-2 px-4 rounded-lg hover:bg-blue-800 hover:text-white"
                      onClick={() => handelDelete(items._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAllUser;
