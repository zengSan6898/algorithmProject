/**
 * 给定一个非空字符串S，其被N个‘-’分隔成N+1的子串，给定正整数K，要求除第一个子串外，其余的子串每K个字符组成新的子串，并用‘-’分隔。
 *  对于新组成的每一个子串，如果它含有的小写字母比大写字母多，则将这个子串的所有大写字母转换为小写字母；
 *  反之，如果它含有的大写字母比小写字母多，则将这个子串的所有小写字母转换为大写字母；大小写字母的数量相等时，不做转换。
 * 输入： 输入为两行，第一行为参数K，第二行为字符串S。
 *   3
 *   12abc-abCABc-4aB@
 * 输出： 输出转换后的字符串。
 * 12abc-abc-ABC-4aB-@
 *
 * 子串为12abc、abCABc、4aB@，第一个子串保留，
 * 后面的子串每3个字符一组为abC、ABc、4aB、@，
 * abC中小写字母较多，转换为abc，
 * ABc中大写字母较多，转换为ABC，
 * 4aB中大小写字母都为1个，不做转换，
 * @中没有字母，连起来即12abc-abc-ABC-4aB-@
 *
 * 12
 * 12abc-abCABc-4aB@
 * 子串为12abc、abCABc、4aB@，第一个子串保留，
 * 后面的子串每12个字符一组为  abCAB4caB@，
 * 这个子串中大小写字母都为4个，不做转换，
 * 连起来即12abc-abCABc4aB@
 */
const rl = require('readline').createInterface({ input: process.stdin })
const inter = rl[Symbol.asyncIterator]()
const readline = async () => (await inter.next()).value

void (async () => {
  const k = parseInt(await readline())
  const inputStr = (await readline()).split('-')
  const subStr = inputStr.slice(1).join('')
  const subKstr = []
  let index = k
  let i = 0
  while (index < subStr.length) {
    const subStrCase = subStr.slice(i, index)
    subKstr.push(changeStrCase(subStrCase))
    index += k
    i += k
  }

  if (index > subStr.length) {
    const subStrCase = subStr.slice(i)
    subKstr.push(changeStrCase(subStrCase))
  }
  console.log(`最终的结果是：${inputStr[0]}-${subKstr.join('-')}`)
})()
function changeStrCase(str) {
  let lowCaseNum = 0
  let uperCaseNum = 0
  for (let i = 0; i < str.length; i++) {
    if ('a' <= str[i] <= 'z') lowCaseNum++
    if ('A' <= str[i] <= 'Z') uperCaseNum++
  }
  if (lowCaseNum < uperCaseNum) {
    return str.toUpperCase()
  } else if (lowCaseNum > uperCaseNum) {
    return str.toLowerCase()
  }
  return str
}
