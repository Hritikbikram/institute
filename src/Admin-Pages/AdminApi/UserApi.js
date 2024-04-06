import { baseurls } from "./BaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseurls }),
  // tagTypes: ["Course", "Abouts"],
  endpoints: (builder) => ({
    //Create Course State

    loginUser: builder.mutation({
      query: (query) => ({
        url: "api/login",
        method: "POST",
        body: query,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = UserApi;
