import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// connect to mongoDb
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is live at port http://localhost:${PORT}`);
});
