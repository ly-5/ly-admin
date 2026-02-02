import { apiSlice } from '@/api/request'

export interface MenuItem {
  id: number
  name: string
  path: string
  icon?: string
  menuType: number
  children?: MenuItem[]
}

const coreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMenus: builder.query<MenuItem[], void>({
      query: () => '/system/menu/getRouters',
    }),
  }),
})

export const { useGetMenusQuery } = coreApiSlice
