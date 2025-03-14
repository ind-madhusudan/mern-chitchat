import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();

app.use(express.json())

// const PORT = 3000;
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("Database Connected...");
} catch (error) {
  console.log(error);
}


app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}`);
});
