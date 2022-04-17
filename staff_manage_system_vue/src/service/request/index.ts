import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { CCRequestInterceptors, CCRequestConfig } from './type'
class CCRequest {
  instance: AxiosInstance
  interceptors?: CCRequestInterceptors

  constructor(config: CCRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 1. config的interceptor
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2. 所有实例的
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        return data
      },
      (err) => {
        if(err.response.status === 404) {
          console.log("404 NOT FOUND");
        }
        return err
      }
    )
  }

  // 单个请求
  request<T>(config: CCRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if(config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance.request<any, T>(config).then((res) => {
        if(config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
      }).catch((err) => {
        if(config.interceptors?.responseInterceptorCatch) {
          err = config.interceptors.responseInterceptorCatch(err)
        }
        reject(err)
      })
    })
  }

  get<T>(config: CCRequestConfig<T>): Promise<T> {
    return this.request({...config, method: 'GET'})
  }
  post<T>(config: CCRequestConfig<T>): Promise<T> {
    return this.request({...config, method: 'POST'})
  }
  delete<T>(config: CCRequestConfig<T>): Promise<T> {
    return this.request({...config, method: 'DELETE'})
  }
  patch<T>(config: CCRequestConfig<T>): Promise<T> {
    return this.request({...config, method: 'PATCH'})
  }
}

export default CCRequest
