<div style="font-family: sans-serif; padding: 10px;">
  <h2>Most Common Mongoose Query Commands</h2>

  <h3>Creating Documents</h3>
  
  <b>Model.create() - Create and save a new document:</b>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const user = await User.create({
  name: 'John',
  email: 'john@example.com'
});

// Creates multiple documents
const users = await User.create([
{ name: 'Alice', email: 'alice@example.com' },
{ name: 'Bob', email: 'bob@example.com' }
]);</code></pre>

<b>new Model() + save() - Create instance then save:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const user = new User({
  name: 'Jane',
  email: 'jane@example.com'
});
await user.save();</code></pre>

  <h3>Finding Documents</h3>
  
  <b>Model.find() - Find multiple documents:</b>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Find all users
const users = await User.find();

// Find with conditions
const adults = await User.find({ age: { $gte: 18 } });

// Find with multiple conditions
const activeAdults = await User.find({
age: { $gte: 18 },
isActive: true
});</code></pre>

<b>Model.findOne() - Find single document:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Find first matching document
const user = await User.findOne({ email: 'john@example.com' });

// Returns null if not found
const user = await User.findOne({ name: 'NonExistent' });</code></pre>

<b>Model.findById() - Find by ObjectId:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const user = await User.findById('64a1b2c3d4e5f6789012345');

// Shorthand for findOne({ _id: id })</code></pre>

  <h3>Updating Documents</h3>
  
  <b>Model.updateOne() - Update single document:</b>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const result = await User.updateOne(
  { email: 'john@example.com' },
  { $set: { age: 30 } }
);

// Returns: { acknowledged: true, modifiedCount: 1, ... }</code></pre>

<b>Model.updateMany() - Update multiple documents:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const result = await User.updateMany(
  { age: { $lt: 18 } },
  { $set: { isMinor: true } }
);</code></pre>

<b>Model.findByIdAndUpdate() - Find by ID and update:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const user = await User.findByIdAndUpdate(
  '64a1b2c3d4e5f6789012345',
  { $set: { name: 'Updated Name' } },
  { new: true } // Returns updated document
);</code></pre>

<b>Model.findOneAndUpdate() - Find and update:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const user = await User.findOneAndUpdate(
  { email: 'john@example.com' },
  { $inc: { loginCount: 1 } },
  { new: true, upsert: true } // Create if doesn't exist
);</code></pre>

  <h3>Deleting Documents</h3>
  
  <b>Model.deleteOne() - Delete single document:</b>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const result = await User.deleteOne({ email: 'john@example.com' });

// Returns: { acknowledged: true, deletedCount: 1 }</code></pre>

<b>Model.deleteMany() - Delete multiple documents:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const result = await User.deleteMany({ isActive: false });</code></pre>

<b>Model.findByIdAndDelete() - Find by ID and delete:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>const deletedUser = await User.findByIdAndDelete('64a1b2c3d4e5f6789012345');

// Returns the deleted document or null</code></pre>

  <h3>Query Modifiers & Chaining</h3>
  
  <b>Selection, Sorting, Limiting:</b>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Select specific fields
const users = await User.find().select('name email -_id');

// Sort by field (1 = ascending, -1 = descending)
const users = await User.find().sort({ createdAt: -1 });

// Limit results
const users = await User.find().limit(10);

// Skip results (pagination)
const users = await User.find().skip(20).limit(10);

// Chain multiple operations
const users = await User.find({ isActive: true })
.select('name email')
.sort({ name: 1 })
.limit(5);</code></pre>

<b>Population (Referencing other documents):</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Basic populate
const posts = await Post.find().populate('author');

// Populate specific fields
const posts = await Post.find().populate('author', 'name email');

// Nested populate
const posts = await Post.find().populate({
  path: 'author',
  populate: { path: 'profile' }
});</code></pre>

  <h3>Aggregation</h3>
  
  <b>Model.aggregate() - Advanced data processing:</b>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Group users by age and count
const ageGroups = await User.aggregate([
  { $group: { _id: '$age', count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);

// Match, group, and project
const stats = await User.aggregate([
{ $match: { isActive: true } },
{ $group: { _id: null, avgAge: { $avg: '$age' } } },
{ $project: { _id: 0, avgAge: 1 } }
]);</code></pre>

  <h3>Quirks & Uncommon Things</h3>
  
  <ul>
    <li><b>exec() method:</b> Some queries return a Query object, use .exec() to execute and get a Promise</li>
    <li><b>lean():</b> Returns plain JavaScript objects instead of Mongoose documents (faster, no methods/virtuals)</li>
    <li><b>upsert:</b> Creates document if it doesn't exist during update operations</li>
    <li><b>new: true:</b> In findAndUpdate operations, returns the updated document instead of the original</li>
    <li><b>select('-field'):</b> The minus sign excludes fields from results</li>
    <li><b>Query vs Document:</b> find() returns Query, findOne() returns Document or null</li>
  </ul>

<b>Lean queries for better performance:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Returns plain objects, not Mongoose documents
const users = await User.find().lean();

// Faster but no document methods, virtuals, or middleware</code></pre>

<b>Using exec() with queries:</b>

  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Both are equivalent
const users = await User.find({ age: { $gte: 18 } });
const users = await User.find({ age: { $gte: 18 } }).exec();</code></pre>
</div>
