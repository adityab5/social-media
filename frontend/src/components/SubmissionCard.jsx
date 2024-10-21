import React from "react";

const SubmissionCard = ({ submission }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="font-bold">{submission.name}</h3>
      <p className="text-gray-600">{submission.socialMediaHandle}</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {submission.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Uploaded by ${submission.name}`}
            className="w-full h-24 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default SubmissionCard;
