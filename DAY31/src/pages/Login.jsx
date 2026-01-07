import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/todos");
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        <input 
          type="email" placeholder="Email" 
          className="w-full p-2 border mb-3 rounded"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Password" 
          className="w-full p-2 border mb-3 rounded"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
        <p className="mt-2 text-sm">
          Don't have an account? <Link className="text-blue-500" to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}
