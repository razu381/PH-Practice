# Mongoose Performance Optimization Anki Card

<div style="font-family: sans-serif; padding: 10px;">
  <h2>Mongoose Performance Optimization</h2>

  <h3>What is Performance Optimization?</h3>
  <p>Techniques to make Mongoose queries faster and use less memory by reducing overhead and unnecessary processing.</p>

  <h3>lean() - Skip Mongoose Processing</h3>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Normal query (slow) - returns Mongoose documents
const users = await User.find({ status: 'active' });

// Lean query (fast) - returns plain JavaScript objects
const users = await User.find({ status: 'active' }).lean();

// Use lean() when you only need to READ data (no save/validate needed)</code></pre>

  <h3>toJSON() & toObject() - Control Output</h3>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Configure what gets included in JSON output
userSchema.set('toJSON', {
  virtuals: true,      // Include virtual fields
  transform: function(doc, ret) {
    delete ret.password;  // Remove sensitive fields
    delete ret.__v;       // Remove version key
    return ret;
  }
});

// Usage
res.json(user); // Automatically uses toJSON settings</code></pre>

  <h3>Select Fields - Reduce Data Transfer</h3>
  <pre style="background-color: #2c3e50; color: white; padding: 10px 20px;"><code>// Only fetch specific fields
const users = await User.find().select('name email -_id');

// Exclude fields with minus sign
const users = await User.find().select('-password -\_\_v');

// Combine with lean() for maximum performance
const users = await User.find().select('name email').lean();</code></pre>

  <h3>Key Performance Rules</h3>
  <ul>
    <li><b>Use lean():</b> When you only need to read data (3-5x faster)</li>
    <li><b>Select specific fields:</b> Don't fetch unnecessary data</li>
    <li><b>Configure toJSON:</b> Control API responses and hide sensitive data</li>
    <li><b>Combine techniques:</b> lean() + select() for maximum speed</li>
  </ul>
</div>
