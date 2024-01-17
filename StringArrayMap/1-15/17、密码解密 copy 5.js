/*
给定一段“密文”字符串 s，其中字符都是经过“密码本”映射的，现需要将“密文”解密并输出。
映射的规则（'a' ~ 'i'）分别用（'1' ~ '9'）表示；
（'j' ~ 'z'）分别用（"10*" ~ "26*"）表示。约束：映射始终唯一。
输入描述：“密文”字符串，输出描述：明文字符串。
备注：翻译后的文本长度在100以内
用例： 输入：20*19*20*  输出：tst
*/
/**
 * 解析。a的ascall码 A 65 a是97  string.fromCharCode(数字)转换成字母
 */
// const rl = require('readline').createInterface({ input: process.stdin })
// let iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

// void async function () {
//   let s = await readline()
//   for (let i = 26; i >= 1; i--) {
//     const key = i + (i > 9 ? '*' : '')
//     const val = String.fromCharCode(97 + i - 1)
//     s = s.replaceAll(key, val)
//   }
//   console.log(s)
// }

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

// 输入处理
void (async function () {
  let s = await readline()
  s = s.replace(/\*/g, '@')

  for (let i = 26; i >= 1; i--) {
    const key = i + (i > 9 ? '@' : '')
    const val = String.fromCharCode(97 + i - 1)

    console.log(s, new RegExp(key, 'g'), key, val)
    s = s.replace(new RegExp(key, 'g'), val)

    // s = s.replace(/\$key/g, val)
    // s = s.replace(key, val)
  }

  console.log(s)
})()
