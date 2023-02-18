import { parse } from 'parse5'

export function htmlToText(html) {
  const parsedHtml = parse(html)
  return extractTextOfJson(parsedHtml)
}

function extractTextOfJson(json) {
  let finalText = ''
  try {
    if (json?.childNodes?.length === 0) return finalText
    for (const child of json.childNodes) {
      if (child.nodeName === 'a') {
        continue
      }
      if (child.nodeName === '#text') {
        finalText += child.value
      }
      if (child.nodeName !== '#text') {
        finalText += extractTextOfJson(child)
      }
    }
    return finalText
  } catch (error) {
    return finalText
  }
}
