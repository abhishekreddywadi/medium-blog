import { SignUpInputType } from "@abhishekwadi/medium-common";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignUpInputType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostInputs({ ...postInputs, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async () => {
    // e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const { jwt } = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");

      // TODO: call backend API to create user
      // console.log(postInputs);
    } catch (error) {
      console.log(error);

      alert("something went to during signin");
    }
  };
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden ">
      <div className="px-4 py-5  shadow-lg ">
        <div className="text-3xl font-bold">Create an account</div>
        <div className="text-sm py-3 pb-4 font-semibold text-center">
          Alredy have an account?{" "}
          <span className="link underline ">
            <Link to={"/signin"}> login </Link>
          </span>
        </div>
        <div className="">
          <input
            className="w-full px-3 py-2 text-sm rounded-md focus:outline-none border focus:ring-primary-500"
            type="text"
            placeholder="first name"
            onChange={handleInputChange}
            name="firstName"
            value={postInputs.firstName}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full px-3 py-2 text-sm rounded-md focus:outline-none border focus:ring-primary-500"
            type="text"
            placeholder="last name"
            onChange={handleInputChange}
            name="lastName"
            value={postInputs.lastName}
          />
        </div>

        <div className="mt-4">
          <input
            className="w-full px-3 py-2 text-sm rounded-md focus:outline-none border focus:ring-primary-500"
            type="text"
            placeholder="Email"
            onChange={handleInputChange}
            name="email"
            value={postInputs.email}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full px-3 py-2 text-sm rounded-md focus:outline-none border focus:ring-primary-500"
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
            name="password"
            value={postInputs.password}
          />
        </div>
        <div className="mt-4">
          <button
            onClick={onFormSubmit}
            type="submit"
            className="w-full px-3 py-2 text-sm font-medium text-white border bg-black rounded-md hover:bg-primary-700"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
