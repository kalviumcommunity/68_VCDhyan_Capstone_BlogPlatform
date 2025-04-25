const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.status(201).json(newPost);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

router.put('/:id', async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPost);
});

router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
});

module.exports = router;
