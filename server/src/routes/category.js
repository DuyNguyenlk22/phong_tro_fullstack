import express from 'express';
import * as categoryController from '../controllers/category.js';

const cateRoute = express.Router();

cateRoute.get('/all', categoryController.getListCategory);

export default cateRoute;
