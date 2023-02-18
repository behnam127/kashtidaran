import { useQuery } from '@tanstack/react-query'
import { callApi } from 'services/callApi'

const DEFAULT_STALE_TIME = 1000 * 60 * 30
const getAppSetting = async () => {
  try {
    const url = '/settings'
    const appSetting = await callApi({ url })
    return appSetting
  } catch (error) {
    throw 'fetch error'
  }
}

export const useAppSetting = (staleTime = DEFAULT_STALE_TIME) => {
  const { isLoading, data } = useQuery(['appSetting'], getAppSetting, {
    staleTime,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })
  return { isLoading, data }
}
