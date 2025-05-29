import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Pages components */
import UserList from "./Components/Pages/userlist";
import AddUser from "./Components/Pages/home";
import ViewUser from "./Components/Pages/viewuser";
import EditUser from "./Components/Pages/edit";

/*Auth-user components */
import SignUp from "./Components/Auth_user/signup";

/*Superuser components */
import GetAllUser from "./Components/SuperUser/getAllUser";
import GetUserById from "./Components/SuperUser/getUserById";


/* Authentication*/
import Layout from "./Components/Authentication/Pages/layout";
import Home from "./Components/Authentication/Pages/home";
import Contact from "./Components/Authentication/Pages/contact";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/add-user/" element={<AddUser />} />
          <Route path="/user-list/" element={<UserList />} />
          <Route path="/view-user/:id" element={<ViewUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />

    
          <Route path="/sign-up/" element={<SignUp />} />

          <Route path="/get-all-user/" element={<GetAllUser />} />
          <Route path="/get-user-by-id/:id" element={<GetUserById />} /> */}


          <Route path="/" element={<Layout />} />
          {/* <Route index element={<Home />} /> 
          <Route path="contact" element={<Contact />} /> 
          </Route> */}
              
        </Routes>
      </BrowserRouter> 
    </>
  );
}
 
export default App;
