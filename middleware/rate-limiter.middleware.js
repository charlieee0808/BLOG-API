const rateLimit = require('express-rate-limit');

// Create rate limiter: max 100 requests per 2 minutes
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 100, // 100 requests per windowMs
  message: {
    status: 429,
    message: 'Too many requests, please try again later.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

module.exports = limiter;