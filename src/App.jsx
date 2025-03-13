import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About Us/AboutUs";
import ContactUs from "./pages/Contact Us/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Navbar /> <Outlet /> <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
