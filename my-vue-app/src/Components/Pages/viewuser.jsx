import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ViewUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  async function getUser() {
    try {
      const response = await axios({
        method: "get",
        url: `http://127.0.0.1:8000/api/get-user-by-id/?id=${id}`,
      });
      console.log(response?.data.data);
      setUser(response?.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    navigate("/user-list/");
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <>
<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
  <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
    <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">User Details</h2>

    <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-6 py-3 font-medium text-gray-700">ID</th>
          <th className="px-6 py-3 font-medium text-gray-700">First Name</th>
          <th className="px-6 py-3 font-medium text-gray-700">Last Name</th>
          <th className="px-6 py-3 font-medium text-gray-700">Email</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-100">
        <tr>
          <td className="px-6 py-4">{user.id}</td>
          <td className="px-6 py-4">{user.first_name}</td>
          <td className="px-6 py-4">{user.last_name}</td>
          <td className="px-6 py-4">{user.email}</td>
        </tr>
      </tbody>
    </table>

    <div className="mt-6 text-center">
      <button
        onClick={handleClick}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
      >
        Back
      </button>
    </div>
  </div>
</div>

    </>
  );
}

export default ViewUser;
