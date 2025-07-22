<div style="font-family: sans-serif; padding: 10px;">
<b>What is currying in JavaScript? How does the curry function work?</b><br><br>
Currying is a technique that transforms a function with multiple arguments into a sequence of functions, each taking a single argument (or fewer arguments), allowing flexible and partial application of arguments.<br><br>
<b>Example: JavaScript curry function</b>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>// Curry implementation
function curry(fn) {
  return function (...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return curry(fn.bind(null, ...args));
    }
  };
}
</code></pre>
<b>How does this work?</b>
<ul>
<li><b>fn.length</b>: Number of parameters the original function expects.</li>
<li><b>args.length</b>: Number of arguments provided so far.</li>
<li>If enough arguments are given, call the function directly.</li>
<li>If not, return a new curried function with the provided arguments bound.</li>
</ul>
<br>
<b>Key line explained:</b>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>return curry(fn.bind(null, ...args));</code></pre>
<b>Explanation:</b>
<div style="margin-bottom: 10px;">
This line creates a new function where the arguments you have already provided (<code>...args</code>) are fixed ("bound") to the original function <code>fn</code>. The <code>bind</code> method returns a new function with these arguments preset. The <code>curry</code> function is then called again on this new function, allowing you to supply more arguments until all are provided. This enables partial application and chaining:
</div>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>// Example usage
function add(a, b, c) { return a + b + c; }
const curriedAdd = curry(add);
curriedAdd(1, 2, 3);    // 6
curriedAdd(1)(2)(3);    // 6
curriedAdd(1, 2)(3);    // 6
curriedAdd(1)(2, 3);    // 6
</code></pre>
<b>Summary:</b>
<ul>
<li>Currying lets you call functions with arguments in steps.</li>
<li>The <code>curry</code> function uses <code>bind</code> to remember arguments until all are provided.</li>
<li>Once all arguments are given, the original function is called.</li>
</ul>
</div>
