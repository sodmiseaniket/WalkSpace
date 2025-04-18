import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center bg-none w-full min-h-screen">
      {/* Left Side (Form) */}
      <div className="sm:w-1/2 w-full flex items-center justify-center p-6 sm:p-12">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center w-full max-w-md gap-4 text-gray-800"
        >
          <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl">{currentState}</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
          {currentState === 'Login' ? null : (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full px-3 py-2 border border-gray-800 rounded-lg"
              placeholder="Name"
              required
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-3 py-2 border border-gray-800 rounded-lg"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="w-full px-3 py-2 border border-gray-800 rounded-lg"
            placeholder="Password"
            required
          />
          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer">Forgot your password?</p>
            {currentState === 'Login' ? (
              <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
                Create account
              </p>
            ) : (
              <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
                Login Here
              </p>
            )}
          </div>
          <button className="bg-black text-white text-xs px-10 py-4 rounded-lg transition-colors duration-300 hover:bg-[#356699]">
            {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>

      {/* Hero Right Side */}
      <div className="sm:w-1/2 w-full relative">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="block">Light as Air</span>
            <span className="block">Glide with Style</span>
          </h1>
        </div>
        <img
          className="w-full h-full object-cover"
          src={assets.login}
        />
        {/* <NavLink
          to="/collection"
          className="absolute bottom-4 right-4 bg-black text-white text-xs px-10 py-4 rounded-lg transition-colors duration-300 hover:bg-[#356699]"
        >
          Shop Now
        </NavLink> */}
      </div>
    </div>
  );
};

export default Login;
