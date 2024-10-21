import React from 'react';
import { Link } from 'react-router-dom';
import UserSubmissionForm from '../components/UserSubmissionForm';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center my-8">
        <h1 className="text-3xl font-bold">Welcome to User Submission System</h1>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Admin Login
        </Link>
      </header>
      <UserSubmissionForm />
    </div>
  );
};

export default Home;