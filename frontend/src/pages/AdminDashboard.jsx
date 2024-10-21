import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SubmissionCard from '../components/SubmissionCard';
import { getSubmissions } from '../services/api';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      toast.error('Please login to access the dashboard');
      navigate('/login');
      return;
    }

    fetchSubmissions();
  }, [navigate]);

  const fetchSubmissions = async () => {
    try {
      const data = await getSubmissions();
      setSubmissions(data);
      toast.success('Submissions fetched successfully!');
    } catch (error) {
      toast.error('Failed to fetch submissions. Please try again.');
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/login');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    toast.info('Logged out successfully');
    navigate('/login');
  };

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {submissions.map((submission) => (
          <SubmissionCard key={submission._id} submission={submission} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;