/**
 * 分页响应体
 * @param list 响应数据列表
 * @param total 总条数
 */
export interface PageResult<T> {
  list: T[]
  total: number
  [key: string]: any
}

/**
 * 分页请求参数
 * @param pageNum 页码
 * @param pageSize 每页数量
 */
export interface PageParams {
  pageNum: number
  pageSize: number
}
