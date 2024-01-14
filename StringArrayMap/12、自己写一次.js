const rl = require('readline').createInterface({ input: process.stdin })
const readline = async () => (await rl[Symbol.asyncIterator]().next()).value

void (async function () {
  const [n, m] = (await readline()).split(' ').map((a) => Number(a))

  const features = []

  for (let i = 0; i < n; i++) {
    features[i] = await readline()
  }

  const cases = []
  for (let i = 0; i < m; i++) {
    const p = (await readline())
      .split(' ')
      .map((id) => features[id - 1])
      .reduce((a, b) => a + b)

    cases[i] = [p, i + 1]
  }
  // sort a-b升序  b-a降序
  cases
    .sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]))
    .forEach(([_, id]) => console.log(id))
})()

//加密解密

const rl1 = require('readline').createInterface({ input: process.stdin })
const su = rl1[Symbol.asyncIterator]()
const readline1 = async () => (await su.next()).value

void (async () => {
  const inputStr1 = await readline1().replace(/\*/g, '@')
  for (let i = 26; i > 0; i--) {
    const key = i + i > 9 ? '@' : ''
    const value = String.fromCharCode(97 + i - 1)
    inputStr1.replace(new RegExp(key, 'g'), value)
  }
})()
