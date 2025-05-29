import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [user, setUser] = useState({
    first_name : "",
    last_name:"",
    email: "",
    phone_number:"",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError(""); // clear error as user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email) {
      setError("Please enter your email.");
      return;
    }

    if (user.password !== user.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth-user/signup/", user);
      console.log(response.data);
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>

      {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

      <input
        name="first_name"
        placeholder="First Name"
        type="text"
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border rounded"
      />

      <input
        name="last_name"
        placeholder="Last Name"
        type="text"
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border rounded"
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border rounded"
      />

      <input
        name="phone_number"
        placeholder="Phone Number"
        type="tel"
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border rounded"
      />


      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border rounded"
      />
      <input
        name="confirm_password"
        placeholder="Confirm Password"
        type="password"
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 border rounded"
      />

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
