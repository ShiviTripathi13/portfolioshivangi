import Landing from "./pages/Landing";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuestBook from "./pages/GuestBook";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects-page";
// import CommentForm from "./pages/CommentForm";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path = "/" element= {<Landing/>} />
            <Route exact path = "/projects" element= {<Projects/>} />
            <Route exact path = "/api/guestbook" element= {<GuestBook/>} />
            <Route exact path = "/api/login" element= {<Login/>} />
            <Route exact path = "/api/signup" element= {<SignUp/>} />

        </Routes>
      </Router>

  );
}

export default App;
