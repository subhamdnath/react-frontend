import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserList() {
  const Navigate = useNavigate()
  const [users, setUsers] = useState([]);

  async function getAllUser() {
    try {
      const response = await axios({
        method: "get",
        url: "http://127.0.0.1:8000/superuser/user-list/",
      });
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios({
        method: "delete",
        url: "http://127.0.0.1:8000/superuser/delete-user/",
        data: { id: id },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);

      var newUsers = users.filter((item) => {
        return item.id !== id;
      });
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);


  const handleClick=()=>{
    Navigate("/add-user/")
  }
  return (
    <>
    <h2 className="text-2xl font-bold mb-6 px-4 py-2  border-indigo-500 bg-indigo-50 text-indigo-800 rounded">User List</h2>
      <table className="min-w-full table-auto border-collapse shadow-md rounded-md overflow-hidden bg-white">
  <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
    <tr>
      <th className="text-left px-6 py-3 font-semibold">ID</th>
      <th className="text-left px-6 py-3 font-semibold">First Name</th>
      <th className="text-left px-6 py-3 font-semibold">Last Name</th>
      <th className="text-left px-6 py-3 font-semibold">Email</th>
      <th className="text-left px-6 py-3 font-semibold">Actions</th>
    </tr>
  </thead>

  <tbody>
    {users.length === 0 ? (
      <tr>
        <td colSpan="5" className="text-center py-6 text-gray-500">
          No data found
        </td>
      </tr>
    ) : (
      users.map((user, index) => (
        <tr key={index} className="hover:bg-gray-100 transition-colors">
          <td className="px-6 py-4 border-t">{user.id}</td>
          <td className="px-6 py-4 border-t">{user.first_name}</td>
          <td className="px-6 py-4 border-t">{user.last_name}</td>
          <td className="px-6 py-4 border-t">{user.email}</td>
          <td className="px-6 py-4 border-t space-x-2">
            <Link
              to={`/view-user/${user.id}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded shadow"
            >
              View
            </Link>
            <Link
              to={`/edit-user/${user.id}`}
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded shadow"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(user.id)}
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded shadow"
            >
              Delete
            </button>
            
          </td>
        </tr>


        
      ))
    )}
  </tbody>
</table>
<br></br>

<button
  onClick={handleClick}
  className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded shadow"
  >
  Add user
  </button>

    </>
  );
}

export default UserList;
