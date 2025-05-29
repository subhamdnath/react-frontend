import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate()

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  async function getUser() {
    try {
      const user_data = await axios.get(
        `http://127.0.0.1:8000/api/get-user-by-id/?id=${id}`
      );
      setUser(user_data.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [id]);

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/update-user/?id=${id}`,
        user
      );
      console.log("User updated:", response.data);
    } catch (error) {
      console.log("Error updating user:", error);
    }
  }

  function onTextFieldChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleClick=()=>{
    navigate ("/user-list/")
  }
  return (
    <>
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8 space-y-6">
    <h2 className="text-2xl font-bold text-center text-indigo-600">Update User</h2>

    <form className="space-y-5">
      {/* ID - Readonly or Hidden Field (if not needed visually) */}
      <div>
        <label htmlFor="id" className="block text-sm font-semibold text-gray-600">
          ID
        </label>
        <input
          type="text"
          id="id"
          name="id"
          value={user.id || ""}
          readOnly
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
        />
      </div>

      {/* First Name */}
      <div>
        <label htmlFor="first_name" className="block text-sm font-semibold text-gray-600">
          First Name
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={user.first_name}
          onChange={onTextFieldChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="last_name" className="block text-sm font-semibold text-gray-600">
          Last Name
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={user.last_name}
          onChange={onTextFieldChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={onTextFieldChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Password */}
      {/* <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={onTextFieldChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div> */}

      {/* Buttons */}
      <div className="flex justify-between items-center pt-4">
        <button
          onClick={onFormSubmit}
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          Update
        </button>

        <button
          onClick={handleClick}
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          Back
        </button>
      </div>
    </form>
  </div>
</div>

    </>
  );
}

export default EditUser;
