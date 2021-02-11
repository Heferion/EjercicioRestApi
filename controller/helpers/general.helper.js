/** packages */

const CryptoJS = require("crypto-js");
const config = require("config");

/** Encryp password */
exports.EncryptPassword = (password)=>{
    let secretKey = config.get("secretkeys").cryptojs;
    let encryptedPassword = ciphertext = CryptoJs.AES.encrypt(password,secretKey).toString();
    return encryptedPassword;
}