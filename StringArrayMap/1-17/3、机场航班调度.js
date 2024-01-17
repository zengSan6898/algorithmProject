/**
 * 亭机场放了多架飞机，每架飞机都有自己的航班号，CA3385
 * CZ6678等，航班号前两个大写字母或者数字表示航空公司的缩写
 * 后4个数字表示航班信息，但是只有一条起飞跑道，首先按照航空公司的缩写
 * 对所有航班进行排序，同一公司的航班在按照航班后4个数字进行排序
 * 最终获得航班起飞排序，航空公司缩写排序按照$&*,0-9,A-Z排序
 *输入：
 *第一行输入航班信息，多个航班号之间用逗号分隔，输入航班不超过100个
    CA3385,CZ6678,SC6508,DU7523,HK4456,MK0987
 航班号长度6，后4位纯数字，不存在重复场景
 输出：
    CA3385,CZ6678,DU7523,HK4456,MK0987,SC6508
 */
const rl = require('readline').createInterface({ input: process.stdin })
const rlNext = rl[Symbol.asyncIterator]()
const readLine = async () => (await rlNext.next()).value

function compareFn(a, b) {
  if (a > b) {
    return 1 // 返回>0 排序是 b a
  } else if (a < b) {
    return -1 // <0 a b
  } else {
    return 0
  }
}

void (async function () {
  const inputStr = (await readLine()).split(',')
  inputStr.sort((a, b) => {
    const afirstAddr = a.slice(0, 2)
    const bfirstAddr = b.slice(0, 2)

    const aendAddr = a.slice(2)
    const bendAddr = b.slice(2)

    if (afirstAddr == bfirstAddr) {
      return compareFn(aendAddr, bendAddr)
    } else {
      return compareFn(afirstAddr, bfirstAddr)
    }
  })
  console.log(inputStr)
})()
