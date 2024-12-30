import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login.jsx";
import Signup from "./component/Signup.jsx";
import LandingPage from "./component/landingPage.jsx";
import Homepage from "./component/Homepage.jsx";
import Shoppingcart from "./component/Shoppingcart.jsx";
import Infopage from "./component/Infopage.jsx";
import Changeuserdetail from "./component/Changeuserdetail.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/Shoppingcart" element={<Shoppingcart />} />
        <Route path="/userdetails" element={<Infopage />} />
        <Route path="/edituserdetails" element={<Changeuserdetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App