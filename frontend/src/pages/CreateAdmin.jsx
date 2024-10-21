import React from 'react';
import CreateAdminForm from '../components/CreateAdminForm';

const CreateAdmin = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Create Admin Account</h1>
      <CreateAdminForm />
    </div>
  );
};

export default CreateAdmin;