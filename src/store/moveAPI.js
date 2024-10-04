import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// кастомные мидлваре
const redirectMiddleware = (api) => (next) => (action) => {
  const result = next(action);
  if (result.error && result.error.status >= 300 && result.error.status < 400) {
    // Повторить запрос на переадресацию
    return api.dispatch(result.retry());
  }
  return result;
};

export const moveApi = createApi({
  reducerPath: 'moveApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.omdbapi.com/',
    middleware: [redirectMiddleware],
  }),
  endpoints: (build) => ({
    getMoves: build.query({
      query: () => ({ url: '?apikey=611fd2a9&s=kill&page=1', }),
    }),
    getMove: build.query({
      query: (id) => ({ url: `?apikey=611fd2a9&i=${id.id}` }),
    }),
  }),
});

console.log(moveApi.endpoints.query);
export const {useGetMovesQuery,useGetMoveQuery} = moveApi