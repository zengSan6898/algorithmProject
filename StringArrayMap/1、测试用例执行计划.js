/**
 * N个特性：F1---FN
 * M个测试用例 T1---TN
 * 特性id
 * 测试用例集合
 * 输入：
 * 5 4  5个特性 4 个测试用例
 * 1
 * 1
 * 2
 * 3
 * 5  此时特性id输入完毕
 * 1 2 3
 * 1 4
 * 3 4 5
 * 2 3 4 此时测试用例输入完毕
 * 输出： 3  4  1 2
 *
 *
 * 优先级大的测试用例先执行，优先级相同，用例ID小的先执行
 * 测试用例优先级计算方法
 * T1=f1+f2+f3 = 1+1+2=4
 * T2=f1+f4 = 1+3=4
 * T3=f3+f4+f5 = 2+3+5=10
 * T4=f2+f3+f4 = 1+2+3=6
 *
 *
 *
 */
const rl = require('readline').createInterface({ input: process.stdin })
let iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // console.log((await readline()).split(' ').map((a) => Number(a)))
  const [n, m] = (await readline()).split(' ').map((a) => Number(a))
  // console.log(n, m)
  // n个特性
  const features = new Array(n)
  for (let i = 0; i < n; i++) {
    features[i] = parseInt(await readline())
  }
  // console.log(features)
  // m个测试用例
  const cases = []
  for (let i = 0; i < m; i++) {
    const p = (await readline())
      .split(' ')
      .map((id) => features[id - 1])
      .reduce((a, b) => a + b)

    cases.push([p, i])
  }
  // console.log(cases)
  cases
    .sort((a, b) => (a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]))
    .forEach(([_, id]) => {
      console.log(id + 1)
    })
  // console.log(cases)
})()
