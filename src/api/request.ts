import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'sonner'

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiJzeXNfdXNlcjoxIiwicm5TdHIiOiJTSlZ1ZVF6ZzlVMkFWdUNqSWs5M0FleXh5RkxjRDU2aCIsImNsaWVudGlkIjoiZTVjZDdlNDg5MWJmOTVkMWQxOTIwNmNlMjRhN2IzMmUiLCJ0ZW5hbnRJZCI6IjAwMDAwMCIsInVzZXJJZCI6MSwiY29kZSI6Ik5PMzIxMzIxMyIsInVzZXJOYW1lIjoiYWRtaW4iLCJuaWNrbmFtZSI6IueWr-eLgueahOeLruWtkCIsImRlcHRJZCI6MTAwMDAwLCJkZXB0TmFtZSI6IuebiOWzsOeOr-WigyIsImRlcHRDYXRlZ29yeSI6IiJ9.22m1FfuAN0EC2PYHQACmOG8H90x3EhJWAE6DbN3PPAI'

const SUCCESS_CODE = 200
// const UNAUTHORIZED_CODE = 401

interface ApiResponse<T> {
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

  responseHandler: async (response) => {
    const data = (await response.json()) as ApiResponse<any>

    if (data.code !== SUCCESS_CODE) {
      toast.error(data.msg || '服务器异常，请刷新后重试')
      throw { data }
    }

    return data.data
  },
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
})
