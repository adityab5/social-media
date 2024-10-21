import React, { useState } from "react";
import { toast } from "react-toastify";
import { submitUserData } from "../services/api";

const UserSubmissionForm = () => {
  const [name, setName] = useState("");
  const [socialMediaHandle, setSocialMediaHandle] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("socialMediaHandle", socialMediaHandle);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      await submitUserData(formData);
      toast.success("Submission successful!");
      setName("");
      setSocialMediaHandle("");
      setImages([]);
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">User Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMediaHandle"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Social Media Handle:
          </label>
          <input
            type="text"
            id="socialMediaHandle"
            value={socialMediaHandle}
            onChange={(e) => setSocialMediaHandle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Upload Images:
          </label>
          <input
            type="file"
            id="images"
            onChange={(e) => setImages(e.target.files)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            multiple
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserSubmissionForm;
