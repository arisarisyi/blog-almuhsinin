import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";
import PostRoute from "./routes/PostRoute.js";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";
dotenv.config()

try {
  await db.authenticate();
  console.log("Database Connected")

} catch (error) {
  console.log(error)
}


const app = express();

app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'));
app.use(PostRoute);
app.use(UserRoute);

app.listen(process.env.APP_PORT || process.env.PORT, () => console.log("server running!"))