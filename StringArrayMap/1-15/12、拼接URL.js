/**
 * 题目描述
 * 给定一个url前缀和url后缀,通过,分割 需要将其连接为一个完整的url,
 * 如果前缀结尾和后缀开头都没有/，需要自动补上/连接符  如果前缀结尾和后缀开头都为/，需要自动去重
 * 约束：不用考虑前后缀URL不合法情况
 * 输入描述: url前缀(一个长度小于100的字符串)，url后缀(一个长度小于100的字符串)
 * 输出描述: 拼接后的url
 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: stdout,
})

const linesData = []
readline.on('line', (line) => {
  linesData.push(line)
  if (linesData.length == 1) {
    getUrl(linesData)
    linesData.length = 0
  }
})
function getUrl(linesData) {
  const [pre, sufx] = linesData.split(',')
  pre.replace(/\/+$/, '') + '/' + sufx.replace(/^\/+/, '')
}
