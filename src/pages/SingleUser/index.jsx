import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css";

const SingleUser = () => {
  const [detaiUser, setDetailUser] = useState({});
  const { id } = useParams();

  const detailUser = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((respon) => {
        setDetailUser(respon.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(detaiUser);

  useEffect(() => {
    detailUser();

    return () => {};
  }, []);

  return (
    <div className="user">
      <label>Nama User :</label>
      <p className="p1">{detaiUser.first_name}</p>

      <img src={detaiUser.avatar} />

      <p className="p2">{detaiUser.email}</p>
    </div>
  );
};
export default SingleUser;
