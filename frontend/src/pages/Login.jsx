import React from 'react';
import { Link } from 'react-router-dom';
import AdminLogin from '../components/AdminLogin';

const Login = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center my-8">
        <h1 className="text-3xl font-bold">Admin Login</h1>
        <Link
          to="/admin/create"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Admin Account
        </Link>
      </header>
      <AdminLogin />
    </div>
  );
};

export default Login;