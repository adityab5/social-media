import express from "express";
import multer from "multer";
import submissionController from "../controllers/submissionController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post(
  "/",
  upload.array("images", 5),
  submissionController.createSubmission
);

export default router;
