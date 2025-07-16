<div style="font-family: sans-serif; padding: 10px;">
  <h2>MongoDB Documents vs Mongoose Documents</h2>
  <table border="1" cellpadding="6" style="border-collapse: collapse; margin-bottom: 18px;">
    <tr>
      <th>Aspect</th>
      <th>MongoDB Documents</th>
      <th>Mongoose Documents</th>
    </tr>
    <tr>
      <td><b>Definition</b></td>
      <td>Plain JavaScript objects representing data in MongoDB collections</td>
      <td>JavaScript objects with extra Mongoose features and schema validation</td>
    </tr>
    <tr>
      <td><b>Schema</b></td>
      <td>Schema-less (flexible structure)</td>
      <td>Schema-based with defined structure and validation</td>
    </tr>
    <tr>
      <td><b>Validation</b></td>
      <td>No built-in validation</td>
      <td>Built-in validation rules and custom validators</td>
    </tr>
    <tr>
      <td><b>Type Safety</b></td>
      <td>No type enforcement</td>
      <td>TypeScript support with type definitions</td>
    </tr>
    <tr>
      <td><b>Methods</b></td>
      <td>Basic CRUD operations</td>
      <td>Rich set of instance and static methods</td>
    </tr>
    <tr>
      <td><b>Middleware</b></td>
      <td>Not supported</td>
      <td>Pre/post hooks for various operations</td>
    </tr>
    <tr>
      <td><b>Population</b></td>
      <td>Manual reference resolution</td>
      <td>Automatic population of references</td>
    </tr>
    <tr>
      <td><b>Virtual Properties</b></td>
      <td>Not supported</td>
      <td>Virtual fields that don't persist to database</td>
    </tr>
    <tr>
      <td><b>Change Tracking</b></td>
      <td>Manual tracking required</td>
      <td>Automatic change detection and dirty checking</td>
    </tr>
  </table>

<b>MongoDB Document Example:</b>

  <pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>// Raw MongoDB document
const user = {
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  createdAt: new Date()
};

// Using MongoDB native driver
const result = await db.collection('users').insertOne(user);
</code></pre>

<b>Mongoose Document Example:</b>

  <pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>// Mongoose schema definition
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  age: { type: Number, min: 0, max: 120 },
  createdAt: { type: Date, default: Date.now }
});

// Mongoose model
const User = mongoose.model('User', userSchema);

// Creating and saving a document
const user = new User({
  name: "John Doe",
  email: "john@example.com",
  age: 30
});
await user.save(); // Built-in validation and middleware execution
</code></pre>

<b>Mongoose Virtual Property Example:</b>

  <pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>// Add a virtual property to schema
userSchema.virtual('fullInfo').get(function() {
  return `${this.name} (${this.age} years old)`;
});
</code></pre>

<b>Mongoose Middleware Example:</b>

  <pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>// Add middleware to schema
userSchema.pre('save', function(next) {
  console.log('About to save user:', this.name);
  next();
});
</code></pre>

  <h3>Key Benefits of Mongoose Documents</h3>
  <ul>
    <li>Schema validation for data consistency</li>
    <li>Type casting and TypeScript support</li>
    <li>Middleware for business logic</li>
    <li>Fluent query API</li>
    <li>Automatic population of references</li>
    <li>Virtual/computed properties</li>
    <li>Extensible with plugins</li>
  </ul>

  <h3>When to Use Each</h3>
  <b>Use MongoDB Documents when:</b>
  <ul>
    <li>Maximum performance is needed</li>
    <li>Full control over database operations</li>
    <li>Working with dynamic, varying document structures</li>
    <li>Building microservices with minimal dependencies</li>
  </ul>
  <b>Use Mongoose Documents when:</b>
  <ul>
    <li>Rapid development with validation is desired</li>
    <li>Team benefits from schema definitions</li>
    <li>Need middleware for business logic</li>
    <li>Prefer object-oriented data modeling</li>
    <li>Building complex applications with relationships</li>
  </ul>
</div>
