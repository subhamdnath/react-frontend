import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GetAllUser() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await axios({
        method: "get",
        url: "http://127.0.0.1:8000/superuser/user-list/",
      });

      console.log(response.data.data);
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios({
        method: "delete",
        url: `http://127.0.0.1:8000/superuser/delete-user/?id=${id}`,
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
    fetchUsers();
  }, []);

  return (
    <>
      <table className="min-w-full text-sm border border-cyan-500 shadow-xl rounded-lg overflow-hidden bg-gray-900 text-white font-mono">
        <thead className="bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-500 text-white uppercase text-xs shadow-inner">
          <tr>
            <th className="px-6 py-3 border-b border-cyan-500">ID</th>
            <th className="px-6 py-3 border-b border-cyan-500">First Name</th>
            <th className="px-6 py-3 border-b border-cyan-500">Last Name</th>
            <th className="px-6 py-3 border-b border-cyan-500">Email</th>
            <th className="px-6 py-3 border-b border-cyan-500">Phone Number</th>
            <th className="px-6 py-3 border-b border-cyan-500">OTP</th>
            <th className="px-6 py-3 border-b border-cyan-500">User Role</th>
            <th className="px-6 py-3 border-b border-cyan-500">Is Active</th>
            <th className="px-6 py-3 border-b border-cyan-500">Is Email OTP Sent</th>
            <th className="px-6 py-3 border-b border-cyan-500">Is Email Verified</th>
            <th className="px-6 py-3 border-b border-cyan-500">Is Active</th>

            <th className="px-6 py-3 border-b border-cyan-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="text-center py-6 text-cyan-400 bg-gray-800 border-t border-cyan-500"
              >
                No data found
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr
                key={index}
                className="hover:bg-cyan-800/20 transition duration-200 border-t border-cyan-600"
              >
                <td className="px-6 py-4 text-cyan-400">{user.id}</td>
                <td className="px-6 py-4 text-green-400">
                  {user.first_name || (
                    <span className="text-gray-500">None</span>
                  )}
                </td>
                <td className="px-6 py-4 text-pink-400">
                  {user.last_name || (
                    <span className="text-gray-500">None</span>
                  )}
                </td>
                <td className="px-6 py-4 text-purple-400">
                  {user.email || <span className="text-gray-500">None</span>}
                </td>
                <td className="px-6 py-4 text-yellow-300">
                  {user.phone_number || (
                    <span className="text-gray-500">None</span>
                  )}
                </td>

                <td className="px-6 py-4 text-yellow-300">
                  {user.otp || (
                    <span className="text-gray-500">None</span>
                  )}
                </td>
                
                <td className="px-6 py-4 text-yellow-300">
                  {user.is_active || (
                    <span className="text-gray-500">None</span>
                  )}
                </td>
                <td className="px-6 py-4 text-yellow-300">
                  {user.is_email_verified
                   || (
                    <span className="text-gray-500">None</span>
                  )}
                </td>

                <td>
                  <Link to={`/get-user-by-id/${user.id}`}>View </Link>
                </td>
                <td>
                  <button onClick={(e) => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default GetAllUser;
