import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'sonner'

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiJzeXNfdXNlcjoxOTc5MzY2MTgyNTY3OTc2OTYyIiwicm5TdHIiOiJpb2FETGZVcW1uUU5MSjBod0RtVGQ0WWNzWGVIZDN6TSIsImNsaWVudGlkIjoiZTVjZDdlNDg5MWJmOTVkMWQxOTIwNmNlMjRhN2IzMmUiLCJ0ZW5hbnRJZCI6IjAwMDAwMCIsInVzZXJJZCI6MTk3OTM2NjE4MjU2Nzk3Njk2MiwiY29kZSI6IjAwMDcyNTA2IiwidXNlck5hbWUiOiJsaXhpYW95dW4iLCJuaWNrbmFtZSI6IuaWh-adsCIsImRlcHRJZCI6MTk3MDY4MDU5NzIyMTUyNzU1MywiZGVwdE5hbWUiOiLkuqflk4HnoJTlj5Hpg6giLCJkZXB0Q2F0ZWdvcnkiOiIifQ.E2ItudIHLrh3FxWDbd-jm64DGHgqAQ-vXvWQY_b-ixg'

const SUCCESS_CODE = 200
const UNAUTHORIZED_CODE = 401

export interface ApiResponse<T = any> {
  code: number
  data: T
  msg?: string
}

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  timeout: 10000,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${token}`)
    headers.set('clientid', `e5cd7e4891bf95d1d19206ce24a7b32e`)

    return headers
  },
})

const baseQueryWithInterceptors: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  try {
    const { data } = (await baseQuery(args, api, extraOptions)) as { data: ApiResponse }

    if (data.code !== SUCCESS_CODE) {
      toast.error(data.msg || '服务器异常，请刷新后重试')
      return {
        error: {
          status: data.code,
          data: data.data,
          message: data.msg,
        },
      }
    }

    return data
  } catch (error) {
    toast.error('网络异常，请检查网络连接')

    return {
      error: {
        status: 'FETCH_ERROR',
        error: String(error),
      },
    }
  }
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithInterceptors,
  endpoints: () => ({}),
})
