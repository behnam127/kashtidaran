import qs from 'qs'

export function requestDataStringify(requestData: object) {
  return qs.stringify(requestData)
}
