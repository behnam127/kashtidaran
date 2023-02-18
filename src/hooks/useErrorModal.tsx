import { GlobalModalsContext } from 'context'
import { useContext } from 'react'

export function useErrorModal() {
  const { setGlobalModals, globalModals, setErrorMessage, setErrorModalAction } = useContext(GlobalModalsContext)
  const showErroModal = () => setGlobalModals({ ...globalModals, showErrorModal: true })
  const hideErrorModal = () => setGlobalModals({ ...globalModals, showErrorModal: false })
  const setErrorModalMessage = (message: string) => setErrorMessage(message)
  return { showErroModal, hideErrorModal, setErrorModalMessage, setErrorModalAction }
}
