export interface ApiResponse<T> {
  code: number
  data: T
  msg?: string
}

export interface PageResult<T> {
  code: number
  msg?: string
  data: {
    list: T[]
    total: number
    [key: string]: any
  }
}

export interface PageParams {
  pageNum: number
  pageSize: number
  [key: string]: any
}
