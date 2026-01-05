/**
21. 最接近的值
描述：在集合中找到最接近给定值的数。

如果两个值距离相等，则返回较小的一个。
输入：数字集合，数字
输出：数字

示例：

nearestValue(new Set([4, 7, 10, 11, 12, 17]), 9) // 返回 10
nearestValue(new Set([4, 7, 10, 11, 12, 17]), 8) // 返回 7
 */
function nearestValue(sets, num) {
    if (!(sets instanceof Set)) {
        throw new TypeError(`${sets} type must be a Set`)
    }

    const diffArr = []
    sets.forEach(i => diffArr.push(Math.abs(i - num)))
    const index = diffArr.indexOf(Math.min(...diffArr))
    return [...sets][index]
}
// console.log(nearestValue(new Set([4, 7, 10, 11, 12, 17]), 9), nearestValue(new Set([4, 7, 10, 11, 12, 17]), 8));

/**
22. 最大数位
描述：找出数字中的最大数位。

输入：数字 (0-10^6)
输出：数字

示例：

maxDigit(0) // 返回 0
maxDigit(52) // 返回 5
maxDigit(634) // 返回 6
 */
function maxDigit(num) {
    if (typeof num !== 'number' || !isFinite(num) || isNaN(num)) {
        throw new Error(`${num} type must be a number and must be finited and not a NaN`)
    }
    if (num === 0) return 0
    const lang = Number('1e' + (`${num}`.length - 1))
    return Math.floor(num / lang)
}
// console.log(maxDigit(0), maxDigit(3), maxDigit(52), maxDigit(634))

/**
23. 替换第一个元素
描述：从数组中移除第一个元素并将其添加到末尾。

如果数组为空，则返回空数组。
输入：数组
输出：数组

示例：

replaceFirst([1, 2, 3, 4]) // 返回 [2, 3, 4, 1]
replaceFirst([1]) // 返回 [1]
replaceFirst([]) // 返回 []
 */
function replaceFirst(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }
    if (arr.length === 0 || arr.length === 1) return arr
    arr.push(arr.shift())
    return arr
}
// console.log(replaceFirst([1, 2, 3, 4]), replaceFirst([1]));

/**
24. 元音字母计数
描述：计算字符串中元音字母 (a, e, i, o, u) 的数量。

忽略大小写。
输入：字符串 (1-1000 个字符)
输出：数字

示例：

countVowels("Hello") // 返回 2
countVowels("AEIOU") // 返回 5
 */
function countVowels(str = '') {
    if (!str || typeof str !== 'string') {
        throw new TypeError(`${str} type must be a string`)
    }
    const matchs = str.toLowerCase().match(/[aeiou]+/g)
    if (matchs) {
        return matchs.join('').length
    }
    return 0
}
// console.log(countVowels("Hello"), countVowels("AEIOU"));

/**
25. 是否为偶数
描述：检查一个数字是否为偶数。

输入：数字 (整数)
输出：布尔值

示例：

isEven(2) // 返回 true
isEven(5) // 返回 false
isEven(0) // 返回 true
 */
function isEven(num) {
    if (typeof num !== 'number' || !isFinite(num) || isNaN(num)) {
        throw new Error(`${num} type must be a number and must be finited and not a NaN`)
    }
    return num % 2 === 0
}
// console.log(isEven(2), isEven(5), isEven(0));

/**
26. 按元素频率排序数组
描述：按元素频率对数组进行排序，频率最高的元素排在前面。

如果两个元素频率相同，则保持原始顺序。
输入：数组
输出：数组

示例：

frequencySort([4, 6, 2, 2, 6, 4, 4, 4]) // 返回 [4, 4, 4, 4, 6, 6, 2, 2]
frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']) // 返回 ['bob', 'bob', 'bob', 'carl', 'alex']
 */
function frequencySort(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }
    const map = new Map()
    arr.forEach(i => !map.has(i) ? map.set(i, 1) : map.set(i, map.get(i) + 1))
    const result = []
    Array.from(map.entries()).sort((a, b) => b[1] - a[1]).forEach(([key, value]) => {
        const part = Array(value).fill(key)
        result.push(...part)
    })

    return result
}
// console.log(frequencySort(['bob', 'bob', 'carl', 'alex', 'alex', 'bob']), frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));

/**
27. 时间转换
描述：将时间从 24 小时制转换为 12 小时制。

输入：24 小时制格式的字符串时间 "HH:MM"
输出：12 小时制格式的字符串时间 "H:MM A.M./P.M."

示例：

timeConverter("12:30") // 返回 "12:30 P.M."
timeConverter("09:00") // 返回 "9:00 A.M."
timeConverter("23:15") // 返回 "11:15 P.M."
 */
function timeConverter(str = "") {
    if (!str || typeof str !== 'string') {
        throw new TypeError(`${str} type must be a string`)
    }
    let timeMark = 'A.M.'
    let [h, m] = str.split(':').map((item, i) => i === 0 ? Number(item) : item)
    if (h >= 0 && h < 12) {
        return `${h}:${m} ${timeMark}`
    } else {
        timeMark = 'P.M.'
        if (Math.abs(12 - h) !== 0) {
            h = Math.abs(12 - h)
            return `${h}:${m} ${timeMark}`
        }
        return `${h}:${m} ${timeMark}`
    }
}
// console.log(Number('00'),timeConverter("00:00"), timeConverter("09:00"), timeConverter("12:30"), timeConverter("23:15"));

/**
28. 非唯一元素
描述：从数组中移除所有唯一元素，只保留出现多次的元素。

应保留原始顺序。
输入：数组
输出：数组

示例：

nonUniqueElements([1, 2, 3, 1, 3]) // 返回 [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) // 返回 []
nonUniqueElements([5, 5, 5, 5, 5]) // 返回 [5, 5, 5, 5, 5]
 */
function nonUniqueElements(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }
    const resArr = []
    const map = new Map()
    arr.forEach(i => !map.has(i) ? map.set(i, 1) : map.set(i, map.get(i) + 1))
    const _filter = [...map.entries()].filter(([key, value]) => value !== 1).map(([key, value]) => key)
    arr.forEach(i => _filter.includes(i) ? resArr.push(i) : i)
    return resArr
}
// console.log(nonUniqueElements([1, 2, 3, 1, 3]), nonUniqueElements([1, 2, 3, 4, 5]), nonUniqueElements([5, 5, 5, 5, 5]));

/**
29. 日期转换
描述：将日期从 "YYYY-MM-DD" 格式转换为 "DD.MM.YYYY" 格式。

输入："YYYY-MM-DD" 格式的字符串日期
输出："DD.MM.YYYY" 格式的字符串日期

示例：

dateConverter("2021-01-15") // 返回 "15.01.2021"
dateConverter("1970-12-31") // 返回 "31.12.1970" 
 */
function dateConverter(date = '') {
    if (!date || typeof date !== 'string') {
        throw new TypeError(`${date} type must be a string`)
    }
    const [year, month, day] = date.split('-')
    return `${day}.${month}.${year}`
}
// console.log(dateConverter("2021-01-15"), dateConverter("1970-12-31"));

/**
30. 最频繁元素
描述：在数组中找到出现频率最高的元素。

如果有多个元素具有相同的最高频率，则返回最先遇到的元素。
输入：数组
输出：任意数据类型

示例：

mostFrequent([3, 1, 3, 1, 1]) // 返回 1
mostFrequent(["a", "b", "c", "a", "b", "a"]) // 返回 "a"
 */
function mostFrequent(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }
    const map = new Map()
    arr.forEach(i => !map.has(i) ? map.set(i, 1) : map.set(i, map.get(i) + 1))
    const mapSort = [...map.entries()].sort((a, b) => b[1] - a[1]).map(([key, value]) => key)
    if (mapSort?.length) {
        return mapSort[0]
    }
}
// console.log(mostFrequent([3, 1, 3, 1, 1]), mostFrequent(["a", "b", "c", "a", "b", "a"]));
