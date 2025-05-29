import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function GetUserById() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  async function fetchUser() {
    try {
      const response = await axios({
        method: "get",
        url: `http://127.0.0.1:8000/superuser/get-user-by-id/?id=${id}`,
      });
      console.log(response.data.data);
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleBack = () => {
    navigate("/get-all-user/");
  };
  useEffect(() => {
    fetchUser();
  }, [id]);
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
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-cyan-800/20 transition duration-200 border-t border-cyan-600">
            <td className="px-6 py-4 text-cyan-400">{user.id}</td>
            <td className="px-6 py-4 text-green-400">
              {user.first_name ? user.first_name : "None"}
            </td>
            <td className="px-6 py-4 text-pink-400">
              {user.last_name ? user.last_name : "None"}
            </td>
            <td className="px-6 py-4 text-purple-400">
              {user.email ? user.email : "None"}
            </td>
            <td className="px-6 py-4 text-yellow-300">
              {user.phone_number ? user.phone_number : "None"}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleBack}
          className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 
               text-white font-medium rounded-lg shadow-md 
               hover:shadow-cyan-400/50 hover:from-cyan-400 hover:to-purple-600 
               transition-all duration-300 border border-cyan-400"
        >
          Back
        </button>
      </div>
    </>
  );
}

export default GetUserById;
