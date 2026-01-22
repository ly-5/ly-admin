import { apiSlice } from '@/api/request'

const coreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMenus: builder.query({ query: () => '/system/menu/getRouters' }),
  }),
})

export const { useGetMenusQuery } = coreApiSlice
