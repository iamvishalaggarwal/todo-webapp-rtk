import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // default value (optional)
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id), // for sorting the data
      providesTags: ["Todos"], // connected with invalidateTags (on which basis we need to call this get API)
    }),

    // for POST request we use mutuation
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"], // used for getting updates (i.e., recall the GET API whenever add happens) using tags, for removing caching
    }),

    // for update todo
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

// RTK provides custom hook, on the basis of endpoint name we give (e.g: getTodos) [start with "use" and end with "Query" or "Mutation"]
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;
