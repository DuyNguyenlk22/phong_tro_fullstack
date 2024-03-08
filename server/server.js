import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import initRoutes from "./src/routes/index.js";
import connectDB from "./src/config/connection.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8888;

initRoutes(app);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
