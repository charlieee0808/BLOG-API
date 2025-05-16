const Post = require('../models/post.model');

// Create and Save a new Blog Post
exports.create = async (req, res) => {
  try {
    // Validate request
    if (!req.body.title || !req.body.content || !req.body.author) {
      return res.status(400).json({
        message: "Content cannot be empty. Title, content and author are required."
      });
    }

    // Create a Post object
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    });

    // Save Post in the database
    const data = await Post.create(post);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the Post."
    });
  }
};

// Retrieve all Blog Posts from the database
exports.findAll = async (req, res) => {
  try {
    const data = await Post.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving posts."
    });
  }
};

// Find a single Blog Post with an id
exports.findOne = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: `Post with id ${req.params.id} not found` });
    }
    
    res.json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Error retrieving Post with id " + req.params.id
    });
  }
};

// Update a Blog Post identified by the id in the request
exports.update = async (req, res) => {
  try {
    // Validate request
    if (!req.body.title || !req.body.content || !req.body.author) {
      return res.status(400).json({
        message: "Content cannot be empty. Title, content and author are required."
      });
    }

    const updatedPost = await Post.updateById(req.params.id, {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    });
    
    if (!updatedPost) {
      return res.status(404).json({ message: `Post with id ${req.params.id} not found` });
    }
    
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Error updating Post with id " + req.params.id
    });
  }
};

// Delete a Blog Post with the specified id
exports.delete = async (req, res) => {
  try {
    const success = await Post.removeById(req.params.id);
    
    if (!success) {
      return res.status(404).json({ message: `Post with id ${req.params.id} not found` });
    }
    
    res.json({ message: "Post was deleted successfully!" });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Could not delete Post with id " + req.params.id
    });
  }
};
