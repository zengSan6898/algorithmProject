/**
 * 给定两个字符串，从字符串2中找出字符串1中的所有字符，去重并按照ASCII值从小到大排序。
 * 输入字符串1：长度不超过1024
 * 输入字符串2：长度不超过1000000
 * 字符范围满足ASCII编码要求，按照ASCII的值由小到大排序
 * 输入描述:
 *    bach
 *    bbaaccedfg
 * 输出描述
 *    abc
 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
const lines = []
readline.on('line', (line) => {
  lines.push(line)
  if (lines.length === 2) {
    const [str1, str2] = lines
    console.log(getChangeSection(str1, str2))
    lines.length = 0
  }
})

function getChangeSection(str1, str2) {
  const s1 = new Set(str1)
  const s2 = new Set(str2)
  return [...s1]
    .filter((item) => s2.has(item))
    .sort()
    .join('')
}
