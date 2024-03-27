import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';


const Register = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      password === "" ||
      confirmPassword === "" 
    ) {
      alert('something went worng!')
      return;
    }
    if (
      
      password.length < 6 ||
      confirmPassword.length < 6 
    ) {
      alert('Password at least 6 character long!')
      return;
    }
    if (
       phone.length != 11
    ) {
      alert('Phone number invalid!')
      return;
    }
    if (
       username.length <5
    ) {
      alert('Username at least 5 character!')
      return;
    }

    if (password === confirmPassword) {
        
    const apiUrl = "http://localhost:8000";

    // Make a GET request to fetch data
    axios
      .get(apiUrl+'/users')
      .then((response) => {
        // Handle successful response
        console.log("Data received:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });

    let user = {
        'username': username,
        'email': email,
        'password': password,
        'phone': phone
    };

    axios
      .post(apiUrl+'/register', user)
      .then((response) => {
        // Handle successful response
        console.log("Data received:", response.data);
        alert(response.data)
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });

      alert('success!')
    } else {
      alert('Register failed...')
      return;
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="flex justify-center register-container">
          <div className="w-full md:w-6/12">
            <div className="bg-white shadow-md rounded-md">
              <div className="p-4 bg-gray-200">
                <h4 className="text-lg text-center font-bold">Sign Up</h4>
              </div>
              <div className="p-4">
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-input p-2 block w-full rounded-md border-gray-300"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-input p-2 block w-full rounded-md border-gray-300"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-input p-2 block w-full rounded-md border-gray-300"
                      placeholder="Enter a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-input p-2 block w-full rounded-md border-gray-300"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setconfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="form-input p-2 block w-full rounded-md border-gray-300"
                      placeholder="Enter your Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white rounded-md py-2 px-4 w-full"
                  >
                    Register
                  </button>
                </form>
                <div className="mt-3 text-center">
                  <p>
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500">
                      Sign In Now!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
