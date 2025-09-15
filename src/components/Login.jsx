import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [msg, setMsg] = useState(null);
  const [msgType, setMsgType] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const ToggleEvent = () => {
    setIsSignIn(!isSignIn);
    setMsg(null);
    setMsgType(null);
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        // ✅ Sign In
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Signed in successfully");
        setMsg("Signed in successfully 🎉");
        setMsgType("success");
      } else {
        // ✅ Sign Up
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Signed up:", userCredential.user);
        setMsg("Account created successfully 🎉");
        setMsgType("success");
      }

      // ✅ clear inputs after success
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.log("Firebase error:", error);
      setMsgType("error");

      switch (error.code) {
        case "auth/invalid-email":
          setMsg("The email address is not valid.");
          break;
        case "auth/user-disabled":
          setMsg("This account has been disabled.");
          break;
        case "auth/user-not-found":
          setMsg("No account found with this email. Please sign up first.");
          break;
        case "auth/wrong-password":
          setMsg("Incorrect password. Please try again.");
          break;
        case "auth/invalid-credential":
          if (error.message.includes("password")) {
            setMsg("Incorrect password. Please try again.");
          } else {
            setMsg("No account found with this email. Please sign up first.");
          }
          break;
        case "auth/email-already-in-use":
          setMsg("This email is already registered. Please sign in instead.");
          break;
        case "auth/weak-password":
          setMsg("Password should be at least 6 characters.");
          break;
        default:
          setMsg("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="bg"
        className="w-full oinset-0  h-full object-cover object-center"
      />

      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-black/80 p-12 rounded-sm w-11/12 sm:w-3/12">
        <p className="text-white text-4xl font-bold mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>

        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 text-white bg-gray-700/80 border border-gray-600 rounded-sm mb-4"
              type="text"
              placeholder="Name"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 text-white bg-gray-700/80 border border-gray-600 rounded-sm mb-4"
            type="text"
            placeholder="Email"
            autoComplete="email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 text-white bg-gray-700/80 border border-gray-600 rounded-sm"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="w-full bg-red-600 p-2 rounded-sm text-white font-bold mt-4 hover:bg-red-700 cursor-pointer"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {msg && (
          <p
            className={`mt-2 ${
              msgType === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {msg}
          </p>
        )}

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
