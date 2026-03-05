import { useState, useEffect, FormEvent } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

interface User {
  id: string;
  name: string;
  mobile: string;
  // add other fields returned from API if needed
}

interface LoginResponse {
  data: {
    token: string;
    user: User;
  };
  message?: string;
}

function App() {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // 🔥 Check token on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser) as User);
    }
  }, []);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://stg.api.nmmc.ptax.foxberry.live/web/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: userId,
            password: password,
          }),
        },
      );

      const data: LoginResponse = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Save token + user
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));

      setUser(data.data.user);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  // 🔥 If logged in → show Dashboard
  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  // 🔐 Otherwise show login
  return (
    <div className="container mx-auto max-w-md mt-20 p-6 border rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Mobile"
          className="border p-2 rounded"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
  );
}

export default App;
