import express from "express";

const authRoute = express.Router();

authRoute.get("/login", (req, res) => {
  res.status(200).json("oke");
});

export default authRoute;
