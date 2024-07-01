import express from 'express';
import * as priceController from '../controllers/price.js';

const priceRoute = express.Router();

priceRoute.get('/all', priceController.getListPrice);

export default priceRoute;
