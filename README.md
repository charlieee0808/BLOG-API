# Blog Post API

A RESTful API for managing blog posts with MySQL database.

## Features

- Full CRUD operations for blog posts
- MySQL database
- JWT Authentication
- Rate limiting (100 requests per 2 minutes)
- Security with Helmet

## API Endpoints

| Method | Endpoint    | Description                 | Authentication Required |
|--------|-------------|-----------------------------|-------------------------|
| GET    | /api/posts  | Retrieve all blog posts     | No                      |
| GET    | /api/posts/:id | Retrieve a specific blog post | No                 |
| POST   | /api/posts  | Create a new blog post      | Yes                     |
| PUT    | /api/posts/:id | Update an existing blog post | Yes                 |
| DELETE | /api/posts/:id | Delete a blog post       | Yes                     |

## Setup and Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/blog-post-api.git
   cd blog-post-api
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_db_password
   DB_NAME=blog_api_db
   JWT_SECRET=your_jwt_secret_key
   ```

4. Create the MySQL database
   ```sql
   CREATE DATABASE blog_api_db;
   ```

5. Start the server
   ```
   npm run dev
   ```

## Testing with Postman

1. Import the provided Postman collection
2. Update the base URL if needed
3. Run the requests to test the API endpoints

## Security Features

- JWT authentication for protected routes
- Rate limiting (100 requests per 2 minutes)
- Security headers with Helmet
- Password hashing with bcrypt

## License

ISC