import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'sonner'

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiJzeXNfdXNlcjoxOTk0Njk0MDU0NjgzNDU1NDk2Iiwicm5TdHIiOiJrb0Y3ZVJZazM0bTBKYU9qYWJKTXdVRFJZMG5GT3RRUyIsImNsaWVudGlkIjoiZTVjZDdlNDg5MWJmOTVkMWQxOTIwNmNlMjRhN2IzMmUiLCJ0ZW5hbnRJZCI6IjAwMDAwMCIsInVzZXJJZCI6MTk5NDY5NDA1NDY4MzQ1NTQ5NiwiY29kZSI6IjAwMDA2MTM2IiwidXNlck5hbWUiOiJ6aG91emhhbyIsIm5pY2tuYW1lIjoi5ZGo6ZKKIiwiZGVwdElkIjoxOTk0NjkzNjMzMTM5MTI2MjczLCJkZXB0TmFtZSI6IuS6p-WTgeeglOWPkemDqCIsImRlcHRDYXRlZ29yeSI6IiJ9.GDx31k_MlNmbCsHEqPPjO0aLtSbArUlnm9MlnPXyBtU'

const SUCCESS_CODE = 200
// const UNAUTHORIZED_CODE = 401

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  timeout: 10000,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${token}`)
    headers.set('clientid', `e5cd7e4891bf95d1d19206ce24a7b32e`)

    return headers
  },

  responseHandler: async (response) => {
    const data = await response.json()

    if (data.code !== SUCCESS_CODE) {
      toast.error(data.msg || '服务器异常，请刷新后重试')
      throw { data }
    }

    return data
  },
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
})
