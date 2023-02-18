var CryptoJS = require('crypto-js')

function encrypt(text) {
  return CryptoJS.AES.encrypt(text, 'arzjoo_coding_21966').toString()
}

function decrypt(text) {
  var bytes = CryptoJS.AES.decrypt(text, 'arzjoo_coding_21966')
  return bytes.toString(CryptoJS.enc.Utf8)
}

export { encrypt, decrypt }
