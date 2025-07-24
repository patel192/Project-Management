import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/user/login",
        formData
      );

      if (res.status === 200) {
        localStorage.setItem("userId", res.data.data._id);
        localStorage.setItem("userName", res.data.data.name);

        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease:"easeOut" }}
    >
      <div className="min-h-screen bg-[#0B1D51] flex items-center justify-center px-4">
        <div className="bg-zinc-900 p-8 rounded-xl shadow-xl w-full max-w-md text-[#91C8E4]">
          <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">
            Login
          </h2>

          {error && (
            <div className="bg-red-500 text-white px-4 py-2 mb-4 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-b from-purple-700 to-blue-900 cursor-pointer text-white rounded font-semibold transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-purple-400 hover:underline cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
