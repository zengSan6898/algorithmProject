/***
 * 给定一个字符串，只包含大写字母，求在包含同一字母的子串中，长度第 k 长的子串的长度，相同字母只取最长的那个子串。
 * 输入：
 *   第一行有一个子串(1<长度<=100)，只包含大写字母。  AAAAHHHBBCDHHHH
 *   第二行为 k的值   3
 * 输出：
 *   输出连续出现次数第k多的字母的次数。2
 *     同一字母连续出现的最多的是A和H，四次；
 *     第二多的是H，3次，但是H已经存在4个连续的，故不考虑；
 *     下个最长子串是BB，所以最终答案应该输出2。
 *
 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
const lines = []
readline.on('line', (line) => {
  lines.push(line)
  if (lines.length === 2) {
    getChange(lines[0], lines[1])
    lines.length = 0
  }
})
function getChange(s, k) {
  const gt = []
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (stack.length == 0 || stack[stack.length - 1] == s[i]) {
      stack.push(s[i])
    } else {
      gt.push([stack[stack.length - 1], stack.length])
      stack.length = 0
      stack.push(s[i])
    }
  }
  if (stack.length > 0) {
    gt.push([stack[stack.length - 1], stack.length])
  }
  const res = gt.sort((a, b) => {
    return b[1] - b[0]
  })
  if (res.length < k) {
    return console.log(-1)
  }
  const [d, t] = res[k - 1]
  console.log(t)
}
