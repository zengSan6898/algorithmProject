const { read } = require('fs')

/**
 * 学生编号从1开始
 * 输入
 *   n个人
 *   身高空格间隔
 *   体重空格间隔
 * 4
 * 100 100 120 130
 * 40 30 60 50
 * 输出
 * 2 1 3 4
 *   原始序列中的学生编号，学生编号从1开始，身高由低到高，身高相同体重由轻到重排列
 */
const rl = require('readline').createInterface({ input: process.stdin })
const inter = rl[Symbol.asyncIterator]()
const readline = async () => (await inter.next()).value

void (async () => {
  const n = await readline()
  const peList = []
  const height = (await readline()).split(' ')
  const weight = (await readline()).split(' ')
  height.forEach((element, i) => {
    peList[i] = [i + 1, element, weight[i]]
  })
  peList
    .sort((a, b) => {
      if (a[1] != b[1]) {
        return a[1] - b[1]
      } else {
        return a[2] - b[2]
      }
    })
    .forEach(([a, b, c]) => console.log(a))
})()
