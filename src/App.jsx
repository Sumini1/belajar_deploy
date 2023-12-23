import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Register from "./pages/Register";
import ListDetailUser from "./pages/ListDetailUser";
import SingleUser from "./pages/SingleUser";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to={"/login"} />;
};

const App = () => {
  console.log(localStorage.getItem("token"));
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/collection"
          element={
            <PrivateRoute>
              <Collection />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/footer"
          element={
            <PrivateRoute>
              <Footer />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/listdetailuser"
          element={
            <PrivateRoute>
              <ListDetailUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/singleuser/:id"
          element={
            <PrivateRoute>
              <SingleUser />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
