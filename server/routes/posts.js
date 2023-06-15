import express from 'express';
//import { likePost } from '../../client/src/api/index.js';

import {
    getPostsBySearch,
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
    
} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.post('/',auth, createPost);
// UPDATING POSTS
// fetch ID of existing post
router.patch('/:id',auth, updatePost)

// DELETING POSTS
router.delete('/:id',auth, deletePost)

// LIKE posts
router.patch('/:id/likePost',auth,likePost)

export default router;