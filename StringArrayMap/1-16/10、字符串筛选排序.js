/**
 * 输入一个由N个大小写字母组成的字符串
 * 按照ASCII码值从小到大进行排序
 * 查找字符串中第K个最小ASCII码值的字母(k>=1)
 * 输出该字母所在字符串中的位置索引(字符串的第一个位置索引为0)
 * k如果大于字符串长度则输出最大ASCII码值的字母所在字符串的位置索引
 * 如果有重复字母则输出字母的最小位置索引
 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
const lines = []
readline.on('line', (data) => {
  lines.push(data)
  if (data.length == 2) {
    const [str, index] = lines
    findIndex(str, index)
  }
})
function findIndex(str, index) {
  if (index > str.length) index = str.length
  const fchar = [...str].sort()[index - 1]
  console.log(str.indexOf(fchar))
}
