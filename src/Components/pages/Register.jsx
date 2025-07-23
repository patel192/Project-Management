import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const uploadToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "My_Images"); // enter your preset name
  data.append("cloud_name", "dfaou6haj"); // enter your cloud name

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dfaou6haj/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  const result = await res.json();
  return result.secure_url;
};

export const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    role: "user",
    profilePic: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, profilePic: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, age, email, password, role, profilePic } = formData;

    if (!name || !email || !password || !profilePic) {
      return setError("All required fields must be filled.");
    }

    try {
      setLoading(true);

      // ✅ Upload image to Cloudinary
      const imageUrl = await uploadToCloudinary(profilePic);

      // ✅ Send form data to backend
      const res = await axios.post("http://localhost:3000/user", {
        name,
        age,
        email,
        password,
        role,
        profilePic: imageUrl,
      });

      if (res.status === 201 || res.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#0B1D51] flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-xl shadow-xl w-1/2 text-[#91C8E4]">
        <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Register
        </h2>

        {error && (
          <div className="bg-red-500 text-white px-4 py-2 mb-4 rounded">
            {error}
          </div>
        )}
        <div className="max-w-4xl mx-auto p-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-purple-500"
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
              />
            </div>

            <div>
              <label className="block mb-1">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-purple-500"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-b from-purple-700 to-blue-900 text-white rounded font-semibold transition cursor-pointer"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-purple-400 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};
