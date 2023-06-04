/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios'

export default class Http {
  protected axios: AxiosInstance

  /**
   * @param  {{}} axiosConfig
   */
  public constructor(axiosConfig: any) {
    this.axios = axios.create(axiosConfig)
  }

  /**
   * @returns any
   */
  public interceptors(): any {
    this.axios.interceptors.request.use((config) => {
      config.headers = config.headers ?? {}

      // Use any requets headers as needed
      // Ex: config.headers.Authorization = 'Bearer 12334'

      return config
    })

    this.axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        throw error
      }
    )
  }
}
