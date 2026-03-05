import React from "react";

export type User = {
  fullName: string;
  mobile: string;
  userType: string;
};

type DashboardProps = {
  user: User;
  onLogout: () => void;
};

function Dashboard({ user, onLogout }: DashboardProps) {
  return (
    <div className="container mx-auto max-w-md mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">User Logged In ✅</h1>

      <p>
        <strong>Name:</strong> {user.fullName}
      </p>
      <p>
        <strong>Mobile:</strong> {user.mobile}
      </p>
      <p>
        <strong>User Type:</strong> {user.userType}
      </p>

      <button
        onClick={onLogout}
        className="bg-red-500 text-white p-2 mt-6 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
