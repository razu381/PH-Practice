<div style="font-family: sans-serif; padding: 10px;">
<strong>RTK Query: Cache and Cache Invalidation</strong>
<br><br>
<strong>What is caching in RTK Query?</strong>
<br>
RTK Query automatically caches API responses and reuses them across components. When multiple components request the same data, only one network request is made.
<br><br>
<strong>Basic Cache Setup:</strong>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>export const baseApi = createApi({
  tagTypes: ["task"], // Define tag types for cache invalidation
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["task"], // This query provides "task" data
    }),
    createTask: builder.mutation({
      query: (taskData) => ({ url: "/tasks", method: "POST", body: taskData }),
      invalidatesTags: ["task"], // This mutation invalidates "task" cache
    }),
  }),
});
</code></pre>
<br>
<strong>How Cache Invalidation Works:</strong>
<ol>
  <li><code>getTasks</code> runs → caches data with "task" tag</li>
  <li><code>createTask</code> runs → invalidates "task" tag</li>
  <li>All queries with "task" tag automatically refetch</li>
  <li>UI updates with fresh data</li>
</ol>
<br>
<strong>Advanced Tagging with IDs:</strong>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>getTask: builder.query({
  query: (id) => `/tasks/${id}`,
  providesTags: (result, error, id) => [{ type: "task", id }],
}),
updateTask: builder.mutation({
  query: ({ id, ...patch }) => ({
    url: `/tasks/${id}`,
    method: "PATCH",
    body: patch,
  }),
  invalidatesTags: (result, error, { id }) => [{ type: "task", id }],
}),
</code></pre>
<br>
<strong>Manual Cache Management:</strong>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>// Force refetch
const { refetch } = useGetTasksQuery();
refetch();

// Manually invalidate cache
dispatch(baseApi.util.invalidateTags(["task"]));

// Reset entire cache
dispatch(baseApi.util.resetApiState());
</code></pre>
<br>
<strong>Key Cache Concepts:</strong>
<ul>
  <li><code>tagTypes</code> - Defines available cache tags</li>
  <li><code>providesTags</code> - Tags data this query provides</li>
  <li><code>invalidatesTags</code> - Tags to invalidate after mutation</li>
  <li>Automatic refetching when cache is invalidated</li>
  <li>Shared cache across all components</li>
</ul>
<br>
<strong>Cache Benefits:</strong>
<ul>
  <li>Reduces unnecessary API calls</li>
  <li>Instant data when switching between components</li>
  <li>Automatic background updates</li>
  <li>Optimistic UI updates possible</li>
</ul>
</div>
