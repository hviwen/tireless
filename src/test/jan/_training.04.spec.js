/**
1. 第一个单词
描述：编写一个函数，返回给定文本中的第一个单词。

文本可以包含 a-z, A-Z, 0-9, 空格和标点符号。
第一个单词是第一个连续的非空格字符序列。
输入：字符串 (1-1000 个字符)
输出：字符串

示例：

firstWord("Hello world") // 返回 "Hello"
firstWord("a word") // 返回 "a"
firstWord("hi!") // 返回 "hi"} str 
*/
function firstWord(str = '') {
    if (!str || typeof str !== 'string') return ''
    const words = str.split(/\s+/).filter(word => /^[a-zA-Z0-9]+$/.test(word))
    if (words && words.length) {
        return words[0]
    }
}

firstWord('hello words')
console.log(firstWord('he sss '))

/**
2. 连续三个单词
描述：编写一个函数，检查输入字符串是否至少包含三个连续的单词。

单词是由字母组成并由空格分隔的序列。
数字不被视为单词。
输入：字符串 (1-1000 个字符)
输出：布尔值

示例：

threeWords("Hello World hello") // 返回 true
threeWords("He is 123 man") // 返回 false
threeWords("1 2 3 4") // 返回 false
 */

function threeWords(str = '') {
    if (!str || typeof str !== 'string') return ''
    const words = str.split(/\s+/)

    const sets = []
    if (words?.length) {
        for (let i = 0; i < words.length; i++) {
            if (/^[a-zA-Z]+$/.test(words[i])) {
                sets.push(words[i])
            } else {
                sets.length = 0
            }
            if (sets.length >= 3) {
                return true
            }
        }
    }
    return false
}

console.log(threeWords('hel sss sdsa ddss'))
console.log(threeWords("He is 123 sss"))
console.log(threeWords('1 s 2 s 3 a 4'))