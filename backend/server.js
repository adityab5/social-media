import dotenv from "dotenv";

import app from "./app.js";
import connectionToDB from "./config/dbConnection.js";
import "dotenv/config";
import cloudinary from "cloudinary";


dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 5000;

//Cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`The App is listing to the port https:localhost:${PORT}`);
});
