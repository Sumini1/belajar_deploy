import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const GamisKoleksi = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  // Define an array of items
  const gamisItems = [
    { name: "Abaya Rihlah", image: "/img/baju1.jpeg", price: "Rp 320.0000" },
    { name: "Abaya Rihlah", image: "/img/baju2.jpeg", price: "Rp 320.0000" },
    { name: "Abaya Rihlah", image: "/img/baju3.jpeg", price: "Rp 320.0000" },
    { name: "Abaya Rihlah", image: "/img/baju4.jpeg", price: "Rp 320.0000" },
    { name: "Abaya Rihlah", image: "/img/baju5.jpeg", price: "Rp 320.0000" },
    { name: "Abaya Rihlah", image: "/img/baju6.jpeg", price: "Rp 320.0000" },
    { name: "Abaya Rihlah", image: "/img/baju7.jpeg", price: "Rp 320.0000" },
    { name: "Abaya Rihlah", image: "/img/baju8.jpeg", price: "Rp 320.0000" },
    { name: "Abaya Rihlah", image: "/img/baju9.jpeg", price: "Rp 320.0000" },
  ];

  return (
    <>
      <h3 className="h3"> Abaya Collection</h3>
      <div className="gamisList">
        {gamisItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
            <button>Order now</button>
          </div>
        ))}
      </div>
      <button className="btn-1" onClick={handleBack}>
        Back
      </button>
    </>
  );
};

export default GamisKoleksi;
