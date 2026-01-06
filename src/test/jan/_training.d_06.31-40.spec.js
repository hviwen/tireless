/**
31. 展平列表
描述：将嵌套数组展平为单层数组。

数组可以有多层嵌套。
输入：嵌套数组
输出：展平后的数组

示例：

flattenArray([1, 2, [3, 4, [5, 6], 7], 8]) // 返回 [1, 2, 3, 4, 5, 6, 7, 8]
flattenArray([1, [2, 3]]) // 返回 [1, 2, 3]
 */
function flattenArray(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }
    return [...arr].flat(Infinity)
}
// console.log(flattenArray([1, 2, [3, 4, [5, 6], 7], 8]));

/**
32. 密码验证器
描述：编写一个函数，根据以下规则验证密码：

至少 8 个字符长
同时包含大写和小写字母
至少有一个数字
至少包含一个特殊字符 (!, @, #, $, %, ^, &, *)
输入：字符串密码 (1-100 个字符)
输出：布尔值

示例：

validatePassword("Passw0rd!") // 返回 true
validatePassword("abc123") // 返回 false
validatePassword("PASSWORD123") // 返回 false
 */
function validatePassword(str = '') {
    if (!str || typeof str !== 'string') {
        throw new TypeError(`${str} type must be a string`)
    }
    if (str.length < 8) return false
    if (str.match(/[!@#$%^&*]/g) === null) return false
    if (str.match(/[0-9]/g) === null) return false
    if (str.match(/[a-z]+/g) === null) return false
    if (str.match(/[A-Z]+/g) === null) return false
    return true
}
// console.log(validatePassword("Passw0rd!"), validatePassword("abc123"), validatePassword("PASSWORD123"));

/**
33. 按扩展名排序
描述：按扩展名对文件名数组进行排序。

具有相同扩展名的文件应按名称排序。
没有扩展名的文件排在前面。
输入：字符串数组
输出：字符串数组

示例：

sortByExt(["1.cad", "1.bat", "1.aa", ".bat"]) // 返回 [".bat", "1.aa", "1.bat", "1.cad"]
sortByExt(["1.cad", "2.bat", "1.aa", ".bat"]) // 返回 [".bat", "1.aa", "2.bat", "1.cad"]
 */
function sortByExt(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }
    const sortRes = []
    const map = new Map()
    arr.forEach(item => {
        const extIndex = `${item}`.lastIndexOf('.')
        let fileName = `${item}`.slice(0, extIndex)
        const fileExt = `${item}`.slice(extIndex)

        if (!map.has(fileExt)) {
            map.set(fileExt, [fileName])
        } else {
            const fileNames = map.get(fileExt)
            fileNames.push(fileName)
            map.set(fileExt, fileNames)
        }
    })
    const sortExts = [...map.entries()].sort()

    sortExts.forEach(([fExt, fNames]) => {
        fNames.forEach(fName => `${fName}` === '' ? sortRes.push(fExt) : fName)
    })

    sortExts.forEach(([fExt, fNames]) => {
        const _fNames = fNames.filter(i => i)
        _fNames.forEach(fName => sortRes.push(`${fName}${fExt}`))
    })

    return sortRes
}
// const arr = ["1.cad", "1.bat", "1.aa", ".bat", '.cat', '.js', '123.222.js', 'b.a.bat']
// const extArr = ['.cat', '.acc', '.mp4', '.avi', '.sh', '.text', '.md']
// console.log(sortByExt(arr));
// console.log(sortByExt(["1.cad", "1.bat", "1.aa", ".bat"]), sortByExt(["1.cad", "2.bat", "1.aa", ".bat"]));

/**
34. 最长重复
描述：找出由相同字符组成的最长子串的长度。

输入：字符串 (1-1000 个字符)
输出：数字

示例：

longRepeat("sdsffffse") // 返回 4
longRepeat("ddvvrwwwrggg") // 返回 3
 */
function longRepeat(str = '') {
    if (!str || typeof str !== 'string') {
        throw new TypeError(`${str} type must be a string`)
    }
    let maxLang = 1
    let markLeft = str[0]
    let leftIndex = 0
    let markRight = ''
    for (let i = 0; i < str.length; i++) {
        markRight = str[i]
        if (markLeft !== markRight) {
            maxLang = Math.max(maxLang, i - leftIndex)
            markLeft = markRight
            leftIndex = i
        }
    }
    return maxLang
}
// console.log(longRepeat("sdsffffse"), longRepeat("ddvvrwwwrggg"));

/**
35. 验证字谜
描述：检查两个字符串是否互为字谜。

字谜是通过重新排列另一个单词的字母而形成的单词。
不区分大小写。
忽略空格和标点符号。
输入：两个字符串
输出：布尔值

示例：

isAnagram("Listen", "Silent") // 返回 true
isAnagram("Hello", "Ole Oh") // 返回 false
 */
function isAnagram(str1 = '', str2 = '') {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new TypeError(`${str1 || str2} type must be a string`)
    }
    return str1.match(/[a-zA-Z]/g).map(i => `${i}`.toLowerCase()).sort().join('') === str2.match(/[a-zA-Z]/g).map(i => `${i}`.toLowerCase()).sort().join('')
}
// console.log(isAnagram("Listen", "Silent"), isAnagram("Hello", "Ole Oh"));

/**
36. 频率排序
描述：按照出现频率的降序对数组中的元素进行排序。

如果两个元素具有相同的频率，则按值排序。
输入：数字数组
输出：数字数组

示例：

freqSort([4, 6, 2, 2, 6, 4, 4, 4]) // 返回 [4, 4, 4, 4, 2, 2, 6, 6]
freqSort([1, 2, 2, 1, 1, 1, 2, 2]) // 返回 [1, 1, 1, 1, 2, 2, 2, 2]
 */
function freqSort(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }

    const map = new Map()
    const res = []
    arr.forEach(i => !map.has(i) ? map.set(i, 1) : map.set(i, map.get(i) + 1))

    Array.from(map.entries()).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => {
        res.push(...Array(v).fill(k))
    })

    return res
}
// console.log(freqSort([4, 6, 2, 2, 6, 4, 4, 4]));

/**
37. 中位数
描述：找出数字数组的中位数。

如果数组长度为奇数，则中位数是中间值。
如果数组长度为偶数，则中位数是两个中间值的平均值。
输入：数字数组
输出：数字

示例：

median([1, 2, 3, 4, 5]) // 返回 3
median([3, 1, 2, 5, 3]) // 返回 3
median([1, 300, 2, 200, 1]) // 返回 2
median([3, 6, 20, 99, 10, 15]) // 返回 12.5
 */
function median(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }
    const sortArr = arr.slice().sort((a, b) => a - b)
    if ((sortArr.length - 1) % 2 === 0) return sortArr[(sortArr.length - 1) / 2]
    return (sortArr[sortArr.length / 2] + sortArr[(sortArr.length / 2 - 1)]) / 2
}
// console.log(median([1, 2, 3, 4, 5]), median([3, 1, 2, 5, 3]), median([3, 6, 20, 99, 10, 15]));

/**
38. 绝对值排序
描述：按绝对值对数字数组进行排序。

在排序结果中保留原始值。
输入：数字数组
输出：数字数组

示例：

absoluteSort([-20, -5, 10, 15]) // 返回 [-5, 10, 15, -20]
absoluteSort([1, 2, 3, 0]) // 返回 [0, 1, 2, 3]
absoluteSort([1, -1, 2, 3, 0]) // 返回 [0, 1, -1, 2, 3]
 */
function absoluteSort(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }

    const map = new Map()
    arr.forEach(i => {
        map.set(`${i}`, Math.abs(i))
    })
    return [...map.entries()].sort((a, b) => a[1] - b[1]).map(([k, v]) => Number(k))
}
// console.log(absoluteSort([-20, -5, 10, 15]), absoluteSort([1, 2, 3, 0]), absoluteSort([1, -1, 2, 3, 0]));

/**
39. 复制零
描述：复制数组中的每个零，将剩余元素向右移动。

数组长度保持不变（多余的元素被丢弃）。
输入：数字数组
输出：数字数组

示例：

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]) // 返回 [1, 0, 0, 2, 3, 0, 0, 4]
duplicateZeros([0, 0, 0]) // 返回 [0, 0, 0]
 */
function duplicateZeros(arr = []) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} type must be an array`)
    }
    const res = []
    arr.slice().forEach(i => {
        res.push(i)
        if (i === 0) { res.push(0) }
    })
    res.length = arr.length
    return res
}
// console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

/**
40. 共同单词
描述：找出同时出现在两个输入字符串中的共同单词。

单词不区分大小写。
结果应按字母顺序排序。
输入：两个字符串
输出：字符串数组

示例：

commonWords("hello,world", "hello,earth") // 返回 ["hello"]
commonWords("one,two,three", "four,five,one,two,six,three") // 返回 ["one", "three", "two"]
 */
function commonWords(str1 = '', str2 = '') {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new TypeError(`${str1 || str2} type must be a string`)
    }
    const leftStrArr = str1.split(',').map(i => `${i}`.toLowerCase()).sort()
    const rightStrArr = str2.split(',').map(i => `${i}`.toLowerCase()).sort()

    const res = []
    leftStrArr.forEach(i => {
        if (rightStrArr.includes(i)) {
            res.push(i)
        }
    })
    return res
}
// console.log(commonWords("hello,world", "hello,earth"), commonWords("one,two,three", "four,five,one,two,six,three"));
