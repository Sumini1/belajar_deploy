import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
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
      .post("https://reqres.in/api/login", bodyPayload)
      .then((respon) => {
        console.log(respon);

        Swal.fire({
          title: "Login Berhasil",
          icon: "success",
          showConfirmButton: true,
        });

        const token = respon.data.token;
        localStorage.setItem("token", token);
        setSucces("login berhasil");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Login Gagal",

          icon: "error",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="w-[100vw] min-h-screen bg-green-800 grid place-content-center">
      <div className="bg-white rounded-xl p-8 w-fit grid grid-cols-12 gap-4 min-w-[50vw]">
        <div className=" col-span-12 lg:col-span-5">
          <h1 className="text-gray-600  border-b border-black pb-4 mb-4">
            Login Rumah Syar'i
          </h1>
          <div className="flex flex-col justify-between h-[80%] gap-2 m-0 ">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="email">Email :</label>
                <input
                  name="email"
                  id="email"
                  className="w-full"
                  onChange={onChangeEmail}
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="password">Password :</label>
                <input
                  name="password"
                  id="password"
                  className="w-full"
                  onChange={onChangePassword}
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <button
              className="bg-green-800 rounded-lg text-center w-full py-2 px-4 text-white"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <img className="w-full" src="img/baju9.jpeg" />
        </div>
      </div>
    </div>
  );
}

export default Login;
