import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  function onTextFieldChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/signup/",
        data: user,
        responseType: "json",
      });
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  const handleClick=()=>{
    navigate ("/user-list/")
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
    <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Add User</h2>

    <form onSubmit={onFormSubmit} className="space-y-5">
      <div>
        <label htmlFor="first_name" className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={onTextFieldChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="last_name" className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={onTextFieldChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={onTextFieldChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={onTextFieldChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          Submit
        </button>
      </div>

      <div className="text-center pt-4">
        <button
        onClick={handleClick}
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
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

export default AddUser;
