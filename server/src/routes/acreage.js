import express from 'express';
import * as acreageController from '../controllers/acreage.js';

const acreageRoute = express.Router();

acreageRoute.get('/all', acreageController.getListAcreage);

export default acreageRoute;
