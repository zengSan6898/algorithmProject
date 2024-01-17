/**
 * 期望你来实现英文输入法单词联想功能。
 * 需求如下：
 * 依据用户输入的单词前缀，从已输入的英文语句中联想出用户想输入的单词，按字典序输出联想到的单词序列，
 * 如果联想不到，请输出用户输入的单词前缀。
 * 英文单词联想时，区分大小写,缩略形式如”don’t”，判定为两个单词，”don”和”t”,
 * 输出的单词序列，不能有重复单词，且只能是英文单词，不能有标点符号
 *
 * 输入描述: 输入为两行。首行输入一段由英文单词word和标点符号组成的语句str；接下来一行为一个英文单词前缀pre。
 *     0 < word.length() <= 20
 *     0 < str.length <= 10000
 *     0 < pre <= 20
 *
 * 输出描述: 输出符合要求的单词序列或单词前缀，存在多个时，单词之间以单个空格分割
 * 输出符合要求的单词序列或单词前缀，存在多个时，单词之间以单个空格分割
 */
/* JavaScript Node ACM模式 控制台输入获取 */

const readlineStd = require('readline').createInterface({
  input: process.stdin,
  output: process.output,
})
const linesData = []
readlineStd.on('line', (line) => {
  linesData.push(line)
  if (linesData.length == 2) {
    const [inputStr, matchChart] = linesData
    revore(inputStr, matchChart)
  }
  linesData.length = 0
})
function revore(inputStr, matchChart) {
  const resData = inputStr
    .split(/^a-zA-Z/)
    .filter((item) => item.includes(matchChart))
    .sort()
  if (resData.length === 0) return matchChart
  console.log(resData.join(' '))
}

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
