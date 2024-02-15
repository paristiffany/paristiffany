import { Routes, Route } from "react-router-dom";
import appcss from "./App.module.css";

import AboutUs from "./pages/AboutUs";
import BookOnline from "./pages/BookOnline";
import Firm from "./pages/Firm";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Publications from "./pages/Publications";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/layout/ContactUs";
import ChatWithUsButton from "./components/layout/ChatWithUsButton";
import ChatBot from "./components/layout/chatbot-solicitors-website/chatbot-deployment/standalone-frontend/app";

function App() {
  return (
    <div className={appcss.pagecontainer}>
      <div className={appcss.contentwrap}>
        <Navbar />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/book-online" element={<BookOnline />} />
          <Route path="/firm" element={<Firm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </div>
      <ChatBot />
      <ChatWithUsButton />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
