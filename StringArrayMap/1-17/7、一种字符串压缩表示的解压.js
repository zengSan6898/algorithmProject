/**
 *有一种简易压缩算法：针对全部由小写英文字母组成的字符串，
 将其中连续超过两个相同字母的部分压缩为连续个数加该字母，其他部分保持原样不变。
 例如：字符串“aaabbccccd”经过压缩成为字符串“3abb4cd”。
 请您编写解压函数，根据输入的字符串，判断其是否为合法压缩过的字符串，
 若输入合法则输出解压缩后的字符串，否则输出字符串 !error 来报告错误。

 输入一行，为一个ASCII字符串，长度不会超过100字符，用例保证输出的字符串长度也不会超过100字符。
 4dff
 若判断输入为合法的经过压缩后的字符串，则输出压缩前的字符串；若输入不合法，则输出字符串“!error"
 ddddff
 */

const rl = require('readline').createInterface({ input: process.stdin })
const inter = rl[Symbol.asyncIterator]()
const readline = async () => (await inter.next()).value

void (async () => {
  const s = await readline()
  let stackArr = []
  let initNumArr = ''
  for (let i = 0; i < s.length; i++) {
    if (!(/[a-z]/.test(s[i]) || /[3-9]/.test(s[i]))) {
      console.error('!error')
      stackArr = []
      break
    }
    if (/[3-9]/.test(s[i])) {
      initNumArr += s[i]
    }
    if (/[a-z]/.test(s[i])) {
      const beforeNum = initNumArr ? parseInt(initNumArr) : 0
      initNumArr = ''

      const popData = stackArr.pop()
      if (!popData) {
        beforeNum ? stackArr.push(beforeNum) : ''
        stackArr.push(s[i])
      }
      // const popData0 = stackArr.pop()
      // console.log('stackArr666', stackArr)
      if (popData && s[i] == popData) {
        if (stackArr[stackArr.length - 1] != 1) {
          console.log('!error111')
          stackArr = []
          break
        } else {
          stackArr[stackArr.length - 1] = 2
          stackArr.push(popData)
        }
      }
      if (popData && s[i] != popData) {
        stackArr.push(popData)
        if (beforeNum) {
          stackArr.push(beforeNum)
          stackArr.push(s[i])
        } else {
          stackArr.push(1)
          stackArr.push(s[i])
        }
      }
    }
  }
  if (stackArr.length < 1) {
    return false
  }
  let resStr = ''
  stackArr.forEach((element, index) => {
    // console.log('9999', element, index)
    if ((index + 1) % 2 == 0) {
      //偶数 字母
      resStr += element.repeat(stackArr[index - 1])
    }
  })
  console.log(resStr)
})()
