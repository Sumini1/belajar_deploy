import axios from "axios";
import React, { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";


const ListDetailUsers = () => {
  const [user, setUser] = useState([]);

  console.log(user);

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((respon) => {
        setUser(respon.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();

    return () => {};
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>List Detail User</h3>
      <div className="name">
        {user.map((item, index) => (
          <div className="name-list" key={index}>
            <img src={item.avatar} />
            <p>{item.first_name}</p>
            <p>{item.email}</p>
            <Link to={`/singleuser/${item.id}`}>Detail</Link>
          </div>
        ))}
      </div>
      <button className="btn" onClick={handleBack}>Back</button>
    </div>
  );
};

export default ListDetailUsers;
