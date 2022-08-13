import express from "express";
import {
  getPost,
  getPostById,
  savePost,
  updatePost,
  deletePost
} from "../controller/PostController.js";

const router = express.Router();

router.get('/post', getPost);
router.get('/post/:id', getPostById);
router.post('/post', savePost);
router.patch('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

export default router;