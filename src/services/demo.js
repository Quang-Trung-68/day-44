import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const demoApi = createApi({
  reducerPath: "demoApi",
  baseQuery,
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetTodosQuery, useGetPostsQuery } = demoApi;
