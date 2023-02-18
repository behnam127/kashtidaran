import { GlobalModalsContext } from 'context'
import { useContext } from 'react'

export function useSupport() {
  const { setGlobalModals, globalModals } = useContext(GlobalModalsContext)
  const showSupport = () => setGlobalModals({ ...globalModals, showSupportModal: true })
  const hideSupport = () => setGlobalModals({ ...globalModals, showSupportModal: false })
  return { showSupport, hideSupport }
}
