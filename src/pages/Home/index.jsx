import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";
import { Link } from "react-router-dom";
import backgroundImage from "/img/baju9.jpeg";
import Footer from "../../Footer";
import About from "../About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="home"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="headerContainer">
          <h1>Rumah Syar'i</h1>
          <p>Aulia Collection</p>
          <Link to={"/collection"}>
            <button>Order Now</button>
          </Link>
        </div>
      </div>
      <div>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
