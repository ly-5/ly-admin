import type { ApiResponse } from '@/api/common'

import { apiSlice } from '@/api/request'

export interface MenuItem {
  id: number
  name: string
  path: string
  icon?: string
  children?: MenuItem[]
}

const coreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMenus: builder.query<ApiResponse<MenuItem[]>, void>({
      query: () => '/system/menu/getRouters',
    }),
  }),
})

export const { useGetMenusQuery } = coreApiSlice
