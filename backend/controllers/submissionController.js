import User from "../models/User.js";
import cloudinary from "../config/cloudinary.js";

export const createSubmission = async (req, res) => {
    try {
        const { name, socialMediaHandle } = req.body;
        const imageFiles = req.files;

        const imageUrls = await Promise.all(
            imageFiles.map(async (file) => {
                const result = await cloudinary.uploader.upload(file.path);
                return result.secure_url;
            })
        );

        const newUser = new User({
            name,
            socialMediaHandle,
            images: imageUrls,
        });

        await newUser.save();

        res.status(201).json({ message: "Submission successful", user: newUser });
    } catch (error) {
        console.error("Submission error:", error);
        res
            .status(500)
            .json({ message: "Submission failed", error: error.message });
    }
};

export const getSubmissions = async (req, res) => {
    try {
        const submissions = await User.find().sort({ createdAt: -1 });
        res.status(200).json(submissions);
    } catch (error) {
        console.error("Fetch submissions error:", error);
        res
            .status(500)
            .json({ message: "Failed to fetch submissions", error: error.message });
    }
};

// Default export
export default {
    getSubmissions,
    createSubmission,
};