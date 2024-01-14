/**
 * 输入：
 *   访问历史日志的条数
 *   每一行的url
 *   需要统计的层数  查询的关键字
 *   5
 *  /huawei/computing/no/one
 *  /huawei/computing
 *  /huawei
 *  /huawei/cloud/no/one
 *  /huawei/wireless/no/one
 *  2 computing
 *输出：
   第二层上 computing 出现了两次 所以结果是2
 *
 *
 */
const rl = require('readline').createInterface({ input: process.stdin })
const iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async () => {
  const n = await readline()
  const tongjiArray = []
  for (let i = 0; i < n; i++) {
    tongjiArray[i] = await readline()
  }
  const [times, str] = (await readline()).split(' ')
  let tongjiTimes = 0
  tongjiArray.forEach((item) => {
    const splitStr = item.split('/')
    if (
      splitStr.length >= parseInt(times) &&
      splitStr[parseInt(times)] == str
    ) {
      tongjiTimes++
    }
  })
  console.log(tongjiTimes)
})()
