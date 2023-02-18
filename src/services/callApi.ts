import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { baseURL } from 'configs'

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  client_type: 'app'
}

type callApiType = AxiosRequestConfig & {
  // apiToken: string
}

export async function callApi({ url, headers = DEFAULT_HEADERS, data = null, method = 'GET' }: callApiType) {
  try {
    const config = {
      baseURL,
      method,
      url,
      headers,
      data
    }
    const myAxios = axios.create()
    const res = await myAxios(config)
    // console.log('======AxiosRes==============================')
    // console.log(res)
    // console.log('====================================')
    return { ...res.data, status: res.status }
    // return handleResponse(res)
  } catch (error: any) {
    // console.log('=========AxiosError===========================')
    // console.log(error)
    // console.log('====================================')

    const finalError = error?.response?.data ?? {}
    return finalError
  }
}

function handleResponse(res: AxiosResponse) {
  // if fulifilled
  const resHasData = 'data' in res
  const dataHasSuccess = resHasData && 'success' in res.data
  if (resHasData && dataHasSuccess) {
    return { ...res.data, status: res.status }
  }
  // if failded
  const hasError = 'error' in res
  const resErrorHasResponse = hasError && 'response' in res.error
  const dataInError = resErrorHasResponse && 'data' in res.error.response
  const successInErrorData = dataInError && 'success' in res.error.response.data
  if (successInErrorData) {
    return res.error.response.data
  }
  return { success: 0, msg: null, status: null }
}
