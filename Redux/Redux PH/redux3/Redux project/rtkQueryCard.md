<div style="font-family: sans-serif; padding: 10px;">
<strong>RTK Query: Complete Guide with Query and Mutation Examples</strong>
<br><br>
<strong>1. API Setup (baseApi.ts):</strong>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
reducerPath: "baseApi",
baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
tagTypes: ["task"],
endpoints: (builder) => ({
getTasks: builder.query({
query: () => "/tasks",
providesTags: ["task"],
}),
createTask: builder.mutation({
query: (taskData) => ({
url: "/tasks",
method: "POST",
body: taskData,
}),
invalidatesTags: ["task"],
}),
}),
});

export const { useGetTasksQuery, useCreateTaskMutation } = baseApi;
</code></pre>
<br>
<strong>2. Store Configuration:</strong>

<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
</code></pre>
<br>
<strong>3. Using Query in Component:</strong>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>function Tasks() {
  // Query hook automatically fetches data on component mount
  const { data: tasksObj, isLoading, isError, refetch } = useGetTasksQuery(undefined);
  
  if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (isError) return &lt;div&gt;Error loading tasks&lt;/div&gt;;
  
  return (
    &lt;div&gt;
      &lt;button onClick={() => refetch()}&gt;Refresh&lt;/button&gt;
      {tasksObj?.tasks.map((task) => (
        &lt;TaskCard key={task.id} task={task} /&gt;
      ))}
    &lt;/div&gt;
  );
}
</code></pre>
<br>
<strong>4. Using Mutation in Component:</strong>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>function TaskForm() {
  const [createTask, { isLoading, isError, isSuccess }] = useCreateTaskMutation();
  
  const handleSubmit = async (taskData) => {
    try {
      const result = await createTask(taskData).unwrap();
      toast.success("Task created!");
      console.log("Created task:", result);
    } catch (error) {
      toast.error("Failed to create task");
      console.error("Error:", error);
    }
  };
  
  return (
    &lt;form onSubmit={handleSubmit}&gt;
      {/* form fields */}
      &lt;button type="submit" disabled={isLoading}&gt;
        {isLoading ? "Creating..." : "Create Task"}
      &lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>
<br>
<strong>Key RTK Query Concepts:</strong>
<ul>
  <li><code>builder.query</code> - For GET requests (fetching data)</li>
  <li><code>builder.mutation</code> - For POST/PUT/DELETE (modifying data)</li>
  <li><code>providesTags</code> - Tags data for cache invalidation</li>
  <li><code>invalidatesTags</code> - Refetches queries with matching tags</li>
  <li><code>.unwrap()</code> - Returns promise that can be caught</li>
  <li>Auto-generated hooks: useGetTasksQuery, useCreateTaskMutation</li>
</ul>
<br>
<strong>Advanced Query Options:</strong>
<pre style="background: #2c3e50; color: white; padding: 10px 20px; white-space: pre-wrap;"><code>// Conditional fetching
const { data } = useGetTasksQuery(undefined, {
  skip: !userId, // Don't fetch if no userId
  pollingInterval: 30000, // Refetch every 30 seconds
  refetchOnMountOrArgChange: true,
});

// Optimistic updates
const [updateTask] = useUpdateTaskMutation({
onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
// Optimistic update
const patchResult = dispatch(
baseApi.util.updateQueryData('getTasks', undefined, (draft) => {
const task = draft.tasks.find(t => t.id === arg.id);
if (task) Object.assign(task, arg);
})
);

    try {
      await queryFulfilled;
    } catch {
      patchResult.undo(); // Revert on error
    }

},
});
</code></pre>

</div>
