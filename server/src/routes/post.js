import express from 'express';
import * as postController from '../controllers/post.js';

const postRoute = express.Router();

postRoute.get('/', postController.getPosts);

export default postRoute;
