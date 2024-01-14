/**
 *输入密文字符串
  输出解密字符
  加密规则是a-i分别是1-9  j-z分别是10*-26*
  输入
   20*19*20
  输出
   tst
 */
const rl = require('readline').createInterface({ input: process.stdin })
const rw = rl[Symbol.asyncIterator]()
const readline = async () => (await rw.next()).value

void (async function () {
  const inputStr = (await readline()).replace(/\*/g, '@')
  for (let i = 26; i > -1; i--) {
    const key = i + (i > 9 ? '@' : '')
    const val = String.fromCharCode(97 + i - 1)
    inputStr.replace(new RegExp(key, 'g'), val)
  }
  console.log(inputStr)
})()
