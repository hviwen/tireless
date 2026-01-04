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
// console.log(firstWord('hello words'), firstWord('he sss '))

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
// console.log(threeWords('hel sss sdsa ddss'), threeWords('1 s 2 s 3 a 4'))

/**
3. 最高价格
描述：编写一个函数，返回最贵物品的列表。

输入是一个包含 "name" 和 "price" 属性的对象数组。
输出是按价格降序排列的前 k 个物品数组。
输入：数字 k，对象数组
输出：对象数组

示例：

biggerPrice(2, [
  {"name": "bread", "price": 100},
  {"name": "wine", "price": 138},
  {"name": "meat", "price": 15},
  {"name": "water", "price": 1}
]) // 返回 [{"name": "wine", "price": 138}, {"name": "bread", "price": 100}]
 */
function biggerPrice(num, arr = []) {
    const priceSorted = arr.slice().sort((a, b) => b.price - a.price)
    return priceSorted.splice(0, num)
}
// const res = biggerPrice(2, [
//   {"name": "bread", "price": 100},
//   {"name": "wine", "price": 138},
//   {"name": "meat", "price": 15},
//   {"name": "water", "price": 1}
// ])
// console.log(res)

/**
4. 常见单词
描述：编写一个函数，计算文本中每个单词出现的次数。

单词应转换为小写。
单词由空格、换行符和制表符分隔。
输入：字符串文本，字符串数组单词
输出：对象 (键为单词，值为计数)

示例：

popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near']) 
// 返回 { i: 4, was: 3, three: 0, near: 0 }
 */
function popularWords(str = '', targetArr = []) {
    if (!str || typeof str !== 'string') return ''
    const strArr = str.replaceAll('\n', ' ').split(/\s+/).filter(i => i).map(i => i.toLocaleLowerCase())
    const result = {}
    for (let i = 0; i < targetArr.length; i++) {
        result[targetArr[i]] = 0
    }

    strArr.forEach(key => Reflect.has(result, key) ? result[key]++ : null)
    return result
}

// const _res3 = popularWords(`
// When I was One
// I had just begun
// When I was Two
// I was nearly new`, ['i', 'was', 'three', 'near']) 

// console.log(_res3);

/**
5. 第二个索引
描述：在字符串中找到子字符串的第二次出现位置。

如果子字符串只出现一次或不出现，则返回 undefined。
输入：字符串文本，字符串子字符串
输出：数字或 undefined

示例：

secondIndex("sims", "s") // 返回 3
secondIndex("find the river", "e") // 返回 12
secondIndex("hi", "h") // 返回 undefined
 */
function secondIndex(str = '', sIndexKey) {
    if (!str || typeof str !== 'string') return undefined
    const index = str.indexOf(sIndexKey)
    if (index === -1) return undefined
    const secondIndex = str.indexOf(sIndexKey, index + 1)
    return secondIndex === -1 ? undefined : secondIndex
}
// console.log(secondIndex("sims", "s"), secondIndex("find the river", "e"), secondIndex("hi", "h"))

/**
6. 标记之间
描述：提取两个标记之间的子字符串。

标记包含在原始字符串中，但不包含在结果中。
输入：字符串文本，字符串标记1，字符串标记2
输出：字符串

示例：

betweenMarkers("What is >apple<", ">", "<") // 返回 "apple"
betweenMarkers("<head><title>My page</title></head>", "<title>", "</title>") // 返回 "My page"
 */
function betweenMarkers(xmlText = '', tagLeft, tagRight) {
    if (!xmlText || typeof xmlText !== 'string') return ''
    let leftIndex = xmlText.indexOf(tagLeft)
    if (leftIndex === -1) return ''
    leftIndex += tagLeft.length

    const rightIndex = xmlText.lastIndexOf(tagRight)
    return xmlText.substring(leftIndex, rightIndex)
}

// const str = "<head><title>My page</title></head>"
// console.log(str.indexOf('<title>'), str.lastIndexOf('</title>'), betweenMarkers("What is >apple<", ">", "<"), betweenMarkers("<head><title>My page</title></head>", "<title>", "</title>"));

/**
7. Fizz Buzz
描述：编写一个函数，如果数字能被 3 整除返回 "Fizz"，能被 5 整除返回 "Buzz"，同时能被 3 和 5 整除返回 "FizzBuzz"，否则返回该数字的字符串形式。

输入：数字 (1-1000)
输出：字符串

示例：

fizzBuzz(15) // 返回 "FizzBuzz"
fizzBuzz(6) // 返回 "Fizz"
fizzBuzz(5) // 返回 "Buzz"
fizzBuzz(7) // 返回 "7"
 */
function fizzBuzz(num) {
    if (typeof num !== 'number') {
        throw new TypeError(`${num} type must be a number`)
    }
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz'
    if (num % 5 === 0) return 'Buzz'
    return num
}
// console.log(fizzBuzz(15), fizzBuzz(6), fizzBuzz(5), fizzBuzz(7))

/**
8. 偶数索引与最后一个
描述：计算偶数索引 (0, 2, 4...) 处元素的和，并乘以最后一个元素。

如果数组为空，返回 0。
输入：数字数组
输出：数字

示例：

evenLast([0, 1, 2, 3, 4, 5]) // 返回 30
evenLast([1, 3, 5]) // 返回 30
evenLast([6]) // 返回 36
 */
function evenLast(arr = []) {
    if (!arr || arr.length === 0) return 0
    return arr.reduce((prev, current, index) => {
        if (index % 2 === 0) {
            return prev + current
        } else {
            return prev
        }
    }) * arr[arr.length - 1]
}
// console.log(evenLast([0, 1, 2, 3, 4, 5]), evenLast([1, 3, 5]), evenLast([6]));

/**
9. 秘密信息
描述：从文本中提取秘密信息，收集所有大写字母。

输入：字符串 (1-1000 个字符)
输出：字符串

示例：

secretMessage("How are you? Eh, ok. Low or Lower? Ohhh.") // 返回 "HELLO"
secretMessage("hello world!") // 返回 ""
 */
function secretMessage(text = '') {
    if (!text || typeof text !== 'string') return ''
    const matchs = text.match(/[A-Z]+/g)
    return matchs?.length ? matchs.join('') : ''
}
// console.log(secretMessage("How are you? Eh, ok. Low or Lower? Ohhh."), secretMessage("hello world!"))

/**
10. 查找所有出现位置
描述：在字符串中查找子字符串的所有出现位置。

返回子字符串开始位置的索引数组。
输入：字符串文本，字符串子字符串
输出：数字数组

示例：

findOccurrences("Hello, hello, hello, world!", "hello") // 返回 [7, 14]
findOccurrences("Hello, hello, hello, world!", "Hello") // 返回 [0]
 */
function findOccurrences(text = '', target) {
    if (!text || typeof text !== 'string') {
        throw new TypeError(`${text} type must be a string`)
    }
    const result = []
    let index = text.indexOf(target)
    while (index !== -1) {
        result.push(index)
        index = text.indexOf(target, target.length + index)
    }
    return result
}
// console.log(findOccurrences("Hello, hello, hello, world!", "hello"), findOccurrences("Hello, hello, hello, world!", "Hello"));

/**
11. 数字求和
描述：计算字符串中所有数字的和。

数字是由非数字字符分隔的数字序列。
输入：字符串 (1-1000 个字符)
输出：数字

示例：

sumNumbers("hi 5 there 6") // 返回 11
sumNumbers("This picture is worth 1000 words") // 返回 1000
 */
function sumNumbers(text = '') {
    if (text === '' || typeof text !== 'string') {
        throw new TypeError(`${text} type must be a string`)
    }

    const words = text.split(/\s+/).filter(word => /^[0-9]+$/.test(word))

    if (words && words?.length) {
        return words.map(Number).reduce((prev, current) => {
            return prev + current
        })
    }
    return NaN
}
// console.log(sumNumbers("hi 5 there 6"), sumNumbers("This picture is worth 1000 words"));

/**
12. 三个连续数字
描述：检查数组是否包含三个具有相同值的连续数字。

输入：数字数组 (1-100 个元素)
输出：布尔值

示例：

threeConsecutive([1, 1, 1, 2, 2]) // 返回 true
threeConsecutive([1, 1, 2, 1, 1]) // 返回 false
 */
function threeConsecutive(arr = []) {
    if (!Array.isArray(arr) || arr.length === 0 || arr.length < 3) return false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) {
            return true
        }
    }
    return false
}
// console.log(threeConsecutive([1, 1, 1, 2, 2]), threeConsecutive([1, 1, 2, 1, 1]));

/**
13. 首字母大写
描述：将字符串中每个单词的首字母大写。

输入：字符串 (1-1000 个字符)
输出：字符串

示例：

capitalizeFirst("hello world") // 返回 "Hello World"
capitalizeFirst("i love js") // 返回 "I Love Js"
 */
function capitalizeFirst(text = '') {
    if (!text || typeof text !== 'string') return ''
    return text.split(/\s+/).map(i => `${i.at(0)}`.toLocaleUpperCase() + i.slice(1)).join(' ')
}
// console.log(capitalizeFirst("hello world"), capitalizeFirst("i love js"));

/**
14. 数字乘法
描述：计算数字中所有数位的乘积。

输入：数字 (1-10^9)
输出：数字

示例：

digitMultiplication(123) // 返回 6
digitMultiplication(9876) // 返回 3024
 */
function digitMultiplication(num) {
    if (typeof num !== 'number') {
        typeof new TypeError(`${num} type must be a number`)
    }
    const matchs = `${num}`.match(/[0-9]/g)

    if (matchs && matchs?.length) {
        return matchs.map(Number).reduce((prev, current) => prev * current, 1)
    }
    return NaN
}
// console.log(digitMultiplication(123), digitMultiplication(9876));

/**
15. 反向字符串
描述：反转字符串。

输入：字符串 (1-1000 个字符)
输出：字符串

示例：

backwardString("hello") // 返回 "olleh"
backwardString("world") // 返回 "dlrow"
 */
function backwardString(text = "") {
    if (!text || typeof text !== 'string') {
        throw new TypeError(`${text} type must be a string`)
    }
    return text.split('').reverse().join('')
}
// console.log(backwardString("hello"), backwardString("world"));

/**
16. 移除指定值之前的所有元素
描述：移除数组中给定值之前的所有元素。

如果数组中不存在该值，则返回原始数组。
输入：数组，值
输出：数组

示例：

removeAllBefore([1, 2, 3, 4, 5], 3) // 返回 [3, 4, 5]
removeAllBefore([1, 1, 2, 2, 3, 3], 2) // 返回 [2, 2, 3, 3]
 */
function removeAllBefore(arr = [], num) {
    if (!Array.isArray(arr) || arr.length === 0) return []
    const index = arr.indexOf(num)
    if (index === -1) return arr
    return arr.splice(index)
}
// console.log(removeAllBefore([1, 2, 3, 4, 5], 3), removeAllBefore([1, 1, 2, 2, 3, 3], 2));

/**
17. 全部相同
描述：检查数组中的所有元素是否相等。

输入：数组
输出：布尔值

示例：

allTheSame([1, 1, 1]) // 返回 true
allTheSame([1, 2, 1]) // 返回 false
 */
function allTheSame(arr = []) {
    return arr.every(i => i === arr[0])
}
// console.log(allTheSame([1, 1, 1]), allTheSame([1, 2, 1]));

/**
18. 数字计数
描述：计算字符串中数字的个数。

输入：字符串 (1-1000 个字符)
输出：数字

示例：

countDigits("hi") // 返回 0
countDigits("who is 1st here") // 返回 1
countDigits("my numbers is 2") // 返回 1
 */
function countDigits(text = '') {
    if (!text || typeof text !== 'string') return 0
    const matchs = text.match(/[0-9]/g)
    if (matchs && matchs?.length) {
        return matchs.length
    }
    return 0
}
// console.log(countDigits("hi"), countDigits("who is 1st here"), countDigits("my numbers is 2"));

/**
19. 开头零的数量
描述：计算字符串开头连续零的数量。

输入：字符串 (1-1000 个只包含数字的字符)
输出：数字

示例：

beginningZeros("100") // 返回 0
beginningZeros("001") // 返回 2
beginningZeros("00100") // 返回 2
 */
function beginningZeros(text = '') {
    if (!text || typeof text !== 'string') return 0
    let count = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '0') { count++ } else {
            break
        }
    }
    return count
}
console.log(beginningZeros("100"), beginningZeros("001"), beginningZeros("00100"));

/**
20. 拆分成对
描述：将字符串拆分为两个字符一组。

如果字符串长度为奇数，则在最后一对中添加下划线。
输入：字符串
输出：字符串数组

示例：

splitPairs("abcd") // 返回 ["ab", "cd"]
splitPairs("abc") // 返回 ["ab", "c_"]
 */
function splitPairs(text = "") {
    if (!text || typeof text !== 'string') return []
    text = text.length % 2 === 0 ? text : text += '_'

    const result = []
    for (let i = 0; i < text.length; i += 2) {
        result.push(text.slice(i, i + 2))
    }
    return result
}

console.log(splitPairs('abcd'), splitPairs("abc"));