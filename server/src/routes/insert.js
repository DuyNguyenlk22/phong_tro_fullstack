import express from "express";
import * as insertController from "../controllers/insert";

const insertRoute = express.Router();

insertRoute.post("/", insertController.insert);

export default insertRoute;
