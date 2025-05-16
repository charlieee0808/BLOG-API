const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const { verifyToken } = require('../middleware/auth.middleware');
const rateLimiter = require('../middleware/rate-limiter.middleware');

// Apply rate limiter to all routes
router.use(rateLimiter);

// Create a new Blog Post
router.post('/', postController.create);

// Retrieve all Blog Posts
router.get('/', postController.findAll);

// Retrieve a single Blog Post with id
router.get('/:id', postController.findOne);

// Update a Blog Post with id
router.put('/:id', postController.update);

// Delete a Blog Post with id
router.delete('/:id', postController.delete);

module.exports = router;