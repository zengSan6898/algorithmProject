/*
单词接龙的规则是：可用于接龙的单词首字母必须要前一个单词的尾字母相同；
当存在多个首字母相同的单词时，取长度最长的单词，如果长度也相等，则取字典序最小的单词；已经参与接龙的单词不能重复使用。
现给定一组全部由小写字母组成单词数组，并指定其中的一个单词作为起始单词，进行单词接龙，
请输出最长的单词串，单词串是单词拼接而成，中间没有空格。


输入的第一行为一个非负整数，表示起始单词在数组中的索引K，0 <= K < N ；
输入的第二行为一个非负整数，表示单词的个数N；
接下来的N行，分别表示单词数组中的单词。
单词个数N的取值范围为[1, 20]；单个单词的长度的取值范围为[1, 30]；

输出一个字符串，表示最终拼接的单词串。

*/

/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines = []
let k, n
rl.on('line', (line) => {
  lines.push(line)

  if (lines.length === 2) {
    const [k, n] = lines.map((a) => Number(a))
  }

  if (n && lines.length === n + 2) {
    lines.shift()
    lines.shift()

    console.log(getResult(lines, k))

    lines.length = 0
  }
})

function getResult(words, k) {
  const chain = words.splice(k, 1)

  const prefix = {}

  for (let word of words) {
    const w = word[0]
    prefix[w] ? prefix[w].push(word) : (prefix[w] = [word])
  }

  for (let key in prefix) {
    prefix[key].sort((a, b) =>
      a.length != b.length ? b.length - a.length : a > b ? 1 : -1
    )
  }

  while (true) {
    let tail = chain.at(-1).at(-1)

    if (prefix[tail] && prefix[tail].length > 0) {
      chain.push(prefix[tail].shift())
    } else {
      break
    }
  }

  return chain.join('')
}
