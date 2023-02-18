import { defaultErrorMessage } from 'configs'

export function serverResponseMessageHandler(messages) {
  try {
    let messageArray = []
    for (const msg of messages) {
      messageArray.push(msg.message)
    }
    return messageArray.join('\n')
  } catch (error) {
    return defaultErrorMessage
  }
}
