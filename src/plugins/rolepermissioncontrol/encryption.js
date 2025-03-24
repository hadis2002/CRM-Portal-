import CryptoJS from 'crypto-js';
const SECRET_KEY = 'my-secret-key-123';

/**
 *
 * @param {string} data
 * @returns {string}
 */
export function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

/**
 *
 * @param {string} encryptedData
 * @returns {any}
 */

export function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}