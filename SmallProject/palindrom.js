function checkString(string) {
  const len = string.length
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return 'not palindrom'
    }
  }
  return 'Palindrom'
}
const value = checkString('kiara')
console.log(value)
