import express from "express";
import { getListCategory } from "../controllers/category.js";

const cateRoute = express.Router();

cateRoute.get("/all", getListCategory);

export default cateRoute;
