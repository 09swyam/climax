import { useRef, useState } from "react";
import validateData from "../utils/validateData";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [msg, setMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const ToggleEvent = () => {
    setIsSignIn(!isSignIn);
    setMsg(null);
  };
                                                                                           
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailVal = email.current.value;
    const passwordVal = password.current.value;
    const errorMsg = validateData(emailVal, passwordVal);
    setMsg(errorMsg);
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="bg"
        className="w-full object-cover"
      />

      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-black/80 p-12 rounded-sm w-11/12 sm:w-3/12">
        <p className="text-white text-4xl font-bold mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>

        {!isSignIn && (
          <input
            ref={name}
            className="w-full p-2 text-white bg-gray-700/80 border border-gray-600 rounded-sm mb-4"
            type="text"
            placeholder="Name"
          />
        )}

        <input
          ref={email}
          className="w-full p-2 text-white bg-gray-700/80 border border-gray-600 rounded-sm mb-4"
          type="text"
          placeholder="Email"
          autoComplete="email"
        />

        <input
          ref={password}
          className="w-full p-2 text-white bg-gray-700/80 border border-gray-600 rounded-sm"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />

        <button
          className="w-full bg-red-600 p-2 rounded-sm text-white font-bold mt-4 hover:bg-red-700 cursor-pointer"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {msg && <p className="text-red-600 mt-2">{msg}</p>}

        <p className="text-white mt-4">
          {isSignIn ? "New to Climax?" : "Already have an account?"}{" "}
          <span
            className="text-red-600 font-bold cursor-pointer"
            onClick={ToggleEvent}
          >
            {isSignIn ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
