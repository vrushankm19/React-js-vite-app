import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks.ts";
import { loginUser, logout } from "./redux/slices/loginSlice.ts";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.auth);

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ mobile, password }));
  };

  if (user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Welcome {user.name}</h1>
        <button
          onClick={() => dispatch(logout())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Mobile"
          className="border p-2 rounded"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default App;
