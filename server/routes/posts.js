import express from 'express';
import {getPosts} from '../controllers/posts.js'

const router = express.Router();

// we moved the stuff out from here so as to build up better cleaner code
export default router.get('/', getPosts);
