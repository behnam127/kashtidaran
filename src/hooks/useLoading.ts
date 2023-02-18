import { GlobalModalsContext } from 'context'
import { useContext } from 'react'

export function useLoading() {
  const { setGlobalModals, globalModals } = useContext(GlobalModalsContext)
  const showLoading = () => setGlobalModals({ ...globalModals, showLoadingModal: true })
  const hideLoading = () => setGlobalModals({ ...globalModals, showLoadingModal: false })
  return { showLoading, hideLoading }
}
