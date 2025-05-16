const db = require('../config/db.config');

class Post {
  constructor(post) {
    this.title = post.title;
    this.content = post.content;
    this.author = post.author;
  }
  
  // Create a new blog post
  static async create(newPost) {
    const query = 'INSERT INTO blog_posts (title, content, author) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [newPost.title, newPost.content, newPost.author]);
    
    const id = result.insertId;
    return { id, ...newPost };
  }
  
  // Find all blog posts
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM blog_posts ORDER BY created_at DESC');
    return rows;
  }
  
  // Find a single blog post by ID
  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM blog_posts WHERE id = ?', [id]);
    return rows[0];
  }
  
  // Update a blog post
  static async updateById(id, post) {
    const query = 'UPDATE blog_posts SET title = ?, content = ?, author = ? WHERE id = ?';
    const [result] = await db.query(query, [post.title, post.content, post.author, id]);
    
    if (result.affectedRows === 0) {
      return null; // No post found with the given ID
    }
    
    return { id, ...post };
  }
  
  // Delete a blog post
  static async removeById(id) {
    const [result] = await db.query('DELETE FROM blog_posts WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Post;
