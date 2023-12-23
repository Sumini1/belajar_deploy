// import React, { useState } from "react";
// import "../Styles/Login.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [succes, setSucces] = useState("");
//   const navigate = useNavigate();

//   const onChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const onChangePassword = (e) => {
//     setPassword(e.target.value);
//   };
//   const onSubmit = () => {
//     const bodyPayload = {
//       email: email,
//       password: password,
//     };

//     axios
//       .post("https://reqres.in/api/login", bodyPayload)
//       .then((respon) => {
//         console.log(respon);

//         Swal.fire({
//           title: "Login Berhasil",
//           icon: "succes",
//           showConfirmButton: true,
//         });
//         setSucces("Login berhasil");
//         navigate("/");
//       })
//       .catch((error) => {
//         console.log(error);
//         Swal.fire({
//           title: "Login Gagal",
//           text: error.response.data,
//           icon: "error",
//           showConfirmButton: true,
//         });
//       });
//   };

//   return (
//     <div className="container1">
//       {succes.length ? <h1>{succes}</h1> : null}
//       <div className="login1">
//         <form action="">
//           <h1>Login</h1>
//           <hr />
//           <p>Rumah Syar'i</p>
//           <label htmlFor="">Email</label>
//           <input
//             onChange={onChangeEmail}
//             type="text"
//             placeholder="enter email"
//           />

//           <label htmlFor="">Password</label>
//           <input
//             onChange={onChangePassword}
//             type="text"
//             placeholder="enter password"
//           />

//           <button onClick={onSubmit}>Submit</button>
//           <p>
//             <a href="#">Forgot Password</a>
//           </p>
//         </form>
//       </div>
//       <div className="right">
//         <img src="/img/baju9.jpeg" alt="" />
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSucces] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = () => {
    const bodyPayload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/register", bodyPayload)
      .then((respon) => {
        console.log(respon);

        Swal.fire({
          title: "Register Berhasil",
          icon: "success",
          showConfirmButton: true,
        });
        setSucces("login berhasil");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Register Gagal",

          icon: "error",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="container1">
      {succes.length ? <h1>{succes}</h1> : null}
      <div className="login">
        <h1>Register Rumah Syar'i</h1>
        <hr className="hr" />
        <div className="par">
          
          <label>Email :</label>
          <input onChange={onChangeEmail} placeholder="example@gmail.com" />
        </div>
        <div>
          <label >Password :</label>
          <input onChange={onChangePassword} placeholder="Password" />
          <div>
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>

      <div className="right">
        <img src="img/baju9.jpeg" />
      </div>
    </div>
  );
}

export default Register;
