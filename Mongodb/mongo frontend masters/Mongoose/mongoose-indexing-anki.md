# Mongoose Indexing & Compound Indexes Anki Card

<div style="font-family: sans-serif; padding: 10px;">
  <h2>Mongoose Indexing & Compound Indexes</h2>

  <h3>What are Indexes?</h3>
  <p>Indexes improve query performance by creating shortcuts to find documents quickly, like an index in a book.</p>

  <h3>Basic Index Creation</h3>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Single field indexes
userSchema.index({ email: 1 });           // Ascending (1)
userSchema.index({ createdAt: -1 });       // Descending (-1)
userSchema.index({ username: 1 }, { unique: true }); // Unique</code></pre>

  <h3>Compound Indexes</h3>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Multiple fields in one index - ORDER MATTERS!
userSchema.index({ userId: 1, status: 1, createdAt: -1 });

// Can use for (left-to-right prefix):
User.find({ userId: '123' }) // ✅ Uses index
User.find({ userId: '123', status: 'active' }) // ✅ Uses index

// Cannot use efficiently:
User.find({ status: 'active' }) // ❌ Skips userId</code></pre>

  <h3>Cardinality Rule</h3>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Put HIGH cardinality (many unique values) FIRST
userId: 1,000,000 unique values  // High cardinality - put first
status: 3 unique values          // Low cardinality - put last

// ✅ Good design:
userSchema.index({ userId: 1, status: 1 }); // High cardinality first</code></pre>

  <h3>Key Rules</h3>
  <ul>
    <li><b>Field order matters:</b> Queries must use fields left-to-right</li>
    <li><b>High cardinality first:</b> Most selective fields first</li>
    <li><b>1 vs -1:</b> Match index direction with your sort queries</li>
    <li><b>Monitor with explain():</b> Check if indexes are actually used</li>
  </ul>
</div>
