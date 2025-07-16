# Mongoose Challenges: Virtuals, Indexes, Middleware & Optimization

## Challenge 1: User Profile with Virtuals

**Scenario**: Create a user schema with computed properties

```javascript
// Create a user schema with:
// - firstName, lastName, email, birthDate, profileViews
// Add virtuals for:
// 1. fullName (firstName + lastName)
// 2. age (calculated from birthDate)
// 3. profileUrl (e.g., "/users/john-doe")
// 4. Make virtuals appear in JSON output

// Your code here:
const userSchema = new mongoose.Schema({
  // Define your schema
});

// Add your virtuals here

// Test with this data:
const user = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  birthDate: new Date("1995-06-15"),
  profileViews: 150,
});

console.log(user.fullName); // Should show: "John Doe"
console.log(user.age); // Should show: 28 (or current age)
console.log(user.profileUrl); // Should show: "/users/john-doe"
```

---

## Challenge 2: E-commerce Product Indexing

**Scenario**: Design optimal indexes for an e-commerce product collection

```javascript
// Given this product schema:
const productSchema = new mongoose.Schema({
  name: String,
  category: String, // 20 categories (medium cardinality)
  price: Number,
  brand: String, // 100 brands (medium cardinality)
  inStock: Boolean, // 2 values (low cardinality)
  rating: Number,
  sellerId: ObjectId, // 10,000 sellers (high cardinality)
  tags: [String],
  createdAt: Date,
});

// Create compound indexes for these query patterns:
// 1. Find products by seller, ordered by newest first
// 2. Find in-stock products by category, sorted by highest rating
// 3. Find products by price range and brand
// 4. Search products by tags

// Your indexes here:
productSchema.index({
  /* your index 1 */
});
productSchema.index({
  /* your index 2 */
});
productSchema.index({
  /* your index 3 */
});
productSchema.index({
  /* your index 4 */
});

// Questions to think about:
// - Which field should come first in each index and why?
// - What direction (1 or -1) should you use for sorting fields?
```

---

## Challenge 3: Blog Post Middleware Magic

**Scenario**: Create middleware for a blog system

```javascript
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: ObjectId, ref: "User" },
  slug: String,
  status: { type: String, enum: ["draft", "published"], default: "draft" },
  publishedAt: Date,
  readTime: Number, // in minutes
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

// Add middleware to:
// 1. Auto-generate slug from title before saving (e.g., "My Post" → "my-post")
// 2. Calculate readTime based on content length (250 words per minute)
// 3. Set publishedAt when status changes to 'published'
// 4. Update updatedAt on every save
// 5. Log when a post is published

// Your middleware here:
postSchema.pre("save", function (next) {
  // Add your logic
});

// Test data:
const post = new Post({
  title: "My Awesome Blog Post!",
  content: "This is a long content with many words...".repeat(50),
  author: userId,
  status: "published",
});

// After saving, should have:
// - slug: "my-awesome-blog-post"
// - readTime: calculated value
// - publishedAt: current date
// - updatedAt: current date
```

---

## Challenge 4: Performance Optimization Race

**Scenario**: Optimize a slow social media feed

```javascript
// Slow query (takes 500ms for 1000 users):
const getFeed = async (userId) => {
  const user = await User.findById(userId);
  const posts = await Post.find({
    author: { $in: user.following },
  })
    .populate("author")
    .populate("comments.user")
    .sort({ createdAt: -1 })
    .limit(20);

  return posts;
};

// Your optimized version (target: under 50ms):
const getOptimizedFeed = async (userId) => {
  // Optimize this query using:
  // 1. lean() where appropriate
  // 2. Field selection
  // 3. Limit populated fields
  // 4. Consider what data you actually need
  // Your optimized code here:
};

// Bonus challenges:
// 1. What indexes would help this query?
// 2. How would you implement pagination efficiently?
// 3. How could you cache this result?
```

---

## Challenge 5: Mixed Techniques - User Analytics

**Scenario**: Build a user analytics system

```javascript
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  lastLogin: Date,
  loginCount: { type: Number, default: 0 },
  subscription: {
    type: String,
    enum: ["free", "premium", "enterprise"],
    default: "free",
  },
  createdAt: { type: Date, default: Date.now },
});

// Requirements:
// 1. Virtual: isActive (true if logged in within 30 days)
// 2. Virtual: accountAge (days since account creation)
// 3. Middleware: increment loginCount and update lastLogin on login
// 4. Index: for finding active premium users quickly
// 5. Optimization: method to get user stats without sensitive data

// Add your solution:
// Virtuals:
userSchema.virtual("isActive").get(function () {
  // Your code
});

// Middleware:
userSchema.methods.recordLogin = function () {
  // Your code
};

// Index:
userSchema.index({
  /* your index */
});

// Optimization:
userSchema.statics.getPublicStats = function () {
  // Return lean query with only public fields
};

// Test scenario:
const user = new User({
  username: "testuser",
  email: "test@example.com",
  lastLogin: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
  subscription: "premium",
});

console.log(user.isActive); // Should be true
console.log(user.accountAge); // Should show days since creation
```

---

## Solution Guidelines

### Challenge 1 - Virtuals Solution Hints:

- Use `this.firstName + ' ' + this.lastName` for fullName
- Calculate age: `Math.floor((Date.now() - this.birthDate) / (365.25 * 24 * 60 * 60 * 1000))`
- Generate URL: `'/users/' + this.fullName.toLowerCase().replace(' ', '-')`
- Enable in JSON: `schema.set('toJSON', { virtuals: true })`

### Challenge 2 - Indexing Solution Hints:

- Query 1: `{ sellerId: 1, createdAt: -1 }` (high cardinality first, sort direction)
- Query 2: `{ category: 1, inStock: 1, rating: -1 }` (filter first, then sort)
- Query 3: `{ brand: 1, price: 1 }` (for range queries)
- Query 4: `{ tags: 1 }` (for array queries)

### Challenge 3 - Middleware Solution Hints:

- Use `this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')` for slug
- Calculate readTime: `Math.ceil(wordCount / 250)`
- Check `this.isModified('status')` for publish detection
- Always set `this.updatedAt = new Date()`

### Challenge 4 - Optimization Solution Hints:

- Use `.lean()` for read-only data
- Select only needed fields: `.select('title author createdAt')`
- Limit populate fields: `.populate('author', 'username avatar')`
- Consider aggregation for complex queries

### Challenge 5 - Mixed Solution Hints:

- isActive: `Date.now() - this.lastLogin < 30 * 24 * 60 * 60 * 1000`
- Use `this.increment()` in recordLogin method
- Index: `{ subscription: 1, lastLogin: -1 }` for active premium users
- Use `.select('-email -sensitiveField').lean()` for public stats

---

## Bonus Questions

1. **When should you NOT use lean()?**
2. **What's the difference between compound and single-field indexes in terms of storage?**
3. **Can virtuals be used in MongoDB queries? Why or why not?**
4. **How would you handle timezone calculations in virtuals?**
5. **What happens if you create too many indexes on a collection?**

---

## Testing Your Solutions

Run these commands to test your implementations:

```javascript
// Test performance
console.time("query");
await yourOptimizedFunction();
console.timeEnd("query");

// Test indexes
await YourModel.find(query).explain("executionStats");

// Test virtuals
console.log(JSON.stringify(document, null, 2));

// Test middleware
document.save();
```
