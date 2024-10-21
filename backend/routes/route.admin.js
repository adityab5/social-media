import express from "express";
import adminController from "../controllers/adminController.js";
import submissionController from "../controllers/submissionController.js";
import authMiddleware from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post("/create", adminController.createAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/submissions", authMiddleware, submissionController.getSubmissions);

export default router;
