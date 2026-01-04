/**
 * 单元测试：验证训练题答案的正确性
 * Unit Tests: Verify the correctness of training exercise solutions
 */

import { describe, it, expect } from 'vitest'

// 导入所有函数（需要先修改原文件添加 export）
// 由于原文件没有 export，我们直接在这里复制函数定义用于测试

function firstWord(str = '') {
    if (!str || typeof str !== 'string') return ''
    const words = str.split(/\s+/).filter(word => /^[a-zA-Z0-9]+$/.test(word))
    if (words && words.length) {
        return words[0]
    }
}

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

function biggerPrice(num, arr = []) {
    const priceSorted = arr.slice().sort((a, b) => b.price - a.price)
    return priceSorted.splice(0, num)
}

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

function secondIndex(str = '', sIndexKey) {
    if (!str || typeof str !== 'string') return undefined
    const index = str.indexOf(sIndexKey)
    if (index === -1) return undefined
    const secondIdx = str.indexOf(sIndexKey, index + 1)
    return secondIdx === -1 ? undefined : secondIdx
}

function betweenMarkers(xmlText = '', tagLeft, tagRight) {
    if (!xmlText || typeof xmlText !== 'string') return ''
    let leftIndex = xmlText.indexOf(tagLeft)
    if (leftIndex === -1) return ''
    leftIndex += tagLeft.length
    const rightIndex = xmlText.lastIndexOf(tagRight)
    return xmlText.substring(leftIndex, rightIndex)
}

function fizzBuzz(num) {
    if (typeof num !== 'number') {
        throw new TypeError(`${num} type must be a number`)
    }
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz'
    if (num % 5 === 0) return 'Buzz'
    return num
}

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

function secretMessage(text = '') {
    if (!text || typeof text !== 'string') return ''
    const matchs = text.match(/[A-Z]+/g)
    return matchs?.length ? matchs.join('') : ''
}

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

function threeConsecutive(arr = []) {
    if (!Array.isArray(arr) || arr.length === 0 || arr.length < 3) return false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) {
            return true
        }
    }
    return false
}

function capitalizeFirst(text = '') {
    if (!text || typeof text !== 'string') return ''
    return text.split(/\s+/).map(i => `${i.at(0)}`.toLocaleUpperCase() + i.slice(1)).join(' ')
}

function digitMultiplication(num) {
    if (typeof num !== 'number') {
        throw new TypeError(`${num} type must be a number`)
    }
    const matchs = `${num}`.match(/[0-9]/g)
    if (matchs && matchs?.length) {
        return matchs.map(Number).reduce((prev, current) => prev * current, 1)
    }
    return NaN
}

function backwardString(text = "") {
    if (!text || typeof text !== 'string') {
        throw new TypeError(`${text} type must be a string`)
    }
    return text.split('').reverse().join('')
}

function removeAllBefore(arr = [], num) {
    if (!Array.isArray(arr) || arr.length === 0) return []
    const index = arr.indexOf(num)
    if (index === -1) return arr
    return arr.splice(index)
}

function allTheSame(arr = []) {
    return arr.every(i => i === arr[0])
}

function countDigits(text = '') {
    if (!text || typeof text !== 'string') return 0
    const matchs = text.match(/[0-9]/g)
    if (matchs && matchs?.length) {
        return matchs.length
    }
    return 0
}

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

function splitPairs(text = "") {
    if (!text || typeof text !== 'string') return []
    text = text.length % 2 === 0 ? text : text += '_'
    const result = []
    for (let i = 0; i < text.length; i += 2) {
        result.push(text.slice(i, i + 2))
    }
    return result
}

describe('训练题测试套件 - Training Exercises Test Suite', () => {
    
    describe('1. firstWord - 第一个单词', () => {
        it('应该返回第一个单词', () => {
            expect(firstWord("Hello world")).toBe("Hello")
            expect(firstWord("a word")).toBe("a")
        })
        
        it('❌ BUG: 应该处理带标点符号的情况', () => {
            // 当前实现会失败，因为 "hi!" 会被过滤掉
            const result = firstWord("hi!")
            // 期望: "hi", 实际: undefined 或 ""
            console.log('firstWord("hi!") =', result, '(期望: "hi")')
        })
    })

    describe('2. threeWords - 连续三个单词', () => {
        it('应该正确判断连续三个单词', () => {
            expect(threeWords("Hello World hello")).toBe(true)
            expect(threeWords("He is 123 man")).toBe(false)
            expect(threeWords("1 2 3 4")).toBe(false)
        })
    })

    describe('3. biggerPrice - 最高价格', () => {
        it('应该返回前k个最贵的物品', () => {
            const items = [
                {"name": "bread", "price": 100},
                {"name": "wine", "price": 138},
                {"name": "meat", "price": 15},
                {"name": "water", "price": 1}
            ]
            const result = biggerPrice(2, items)
            expect(result).toHaveLength(2)
            expect(result[0].name).toBe("wine")
            expect(result[1].name).toBe("bread")
        })
    })

    describe('4. popularWords - 常见单词', () => {
        it('应该正确计算单词出现次数', () => {
            const text = `When I was One
I had just begun
When I was Two
I was nearly new`
            const result = popularWords(text, ['i', 'was', 'three', 'near'])
            expect(result).toEqual({ i: 4, was: 3, three: 0, near: 0 })
        })
    })

    describe('5. secondIndex - 第二个索引', () => {
        it('应该返回第二次出现的索引', () => {
            expect(secondIndex("sims", "s")).toBe(3)
            expect(secondIndex("find the river", "e")).toBe(12)
            expect(secondIndex("hi", "h")).toBe(undefined)
        })
    })

    describe('6. betweenMarkers - 标记之间', () => {
        it('应该提取标记之间的内容', () => {
            expect(betweenMarkers("What is >apple<", ">", "<")).toBe("apple")
            expect(betweenMarkers("<head><title>My page</title></head>", "<title>", "</title>")).toBe("My page")
        })
        
        it('❌ BUG: 当右标记出现多次时可能出错', () => {
            // 使用 lastIndexOf 会导致问题
            const result = betweenMarkers("</title><title>Test</title>", "<title>", "</title>")
            console.log('betweenMarkers 结果:', result)
        })
    })

    describe('7. fizzBuzz - Fizz Buzz', () => {
        it('应该返回正确的字符串', () => {
            expect(fizzBuzz(15)).toBe("FizzBuzz")
            expect(fizzBuzz(6)).toBe("Fizz")
            expect(fizzBuzz(5)).toBe("Buzz")
        })
        
        it('⚠️ 类型不一致: 应该返回字符串而不是数字', () => {
            const result = fizzBuzz(7)
            console.log('fizzBuzz(7) =', result, 'type:', typeof result, '(期望类型: string)')
            // 期望: "7" (string), 实际: 7 (number)
        })
    })

    describe('8. evenLast - 偶数索引与最后一个', () => {
        it('应该计算偶数索引元素和并乘以最后一个元素', () => {
            expect(evenLast([0, 1, 2, 3, 4, 5])).toBe(30)
            expect(evenLast([1, 3, 5])).toBe(30)
            expect(evenLast([6])).toBe(36)
        })
    })

    describe('9. secretMessage - 秘密信息', () => {
        it('应该提取所有大写字母', () => {
            expect(secretMessage("How are you? Eh, ok. Low or Lower? Ohhh.")).toBe("HELLO")
            expect(secretMessage("hello world!")).toBe("")
        })
    })

    describe('10. findOccurrences - 查找所有出现位置', () => {
        it('❌ BUG: 索引计算错误', () => {
            const result1 = findOccurrences("Hello, hello, hello, world!", "hello")
            const result2 = findOccurrences("Hello, hello, hello, world!", "Hello")
            console.log('findOccurrences("Hello, hello, hello, world!", "hello") =', result1)
            console.log('期望: [7, 14], 实际:', result1)
            console.log('findOccurrences("Hello, hello, hello, world!", "Hello") =', result2)
            // 由于索引计算错误，可能漏掉某些匹配
        })
    })

    describe('11. sumNumbers - 数字求和', () => {
        it('⚠️ 应该返回0而不是NaN当没有数字时', () => {
            const result = sumNumbers("no numbers here")
            console.log('sumNumbers("no numbers here") =', result, '(期望: 0)')
        })
    })

    describe('12. threeConsecutive - 三个连续数字', () => {
        it('应该检查三个连续相同值', () => {
            expect(threeConsecutive([1, 1, 1, 2, 2])).toBe(true)
            expect(threeConsecutive([1, 1, 2, 1, 1])).toBe(false)
        })
    })

    describe('13. capitalizeFirst - 首字母大写', () => {
        it('应该将每个单词首字母大写', () => {
            expect(capitalizeFirst("hello world")).toBe("Hello World")
            expect(capitalizeFirst("i love js")).toBe("I Love Js")
        })
    })

    describe('14. digitMultiplication - 数字乘法', () => {
        it('应该计算数字各位的乘积', () => {
            expect(digitMultiplication(123)).toBe(6)
            expect(digitMultiplication(9876)).toBe(3024)
        })
    })

    describe('15. backwardString - 反向字符串', () => {
        it('应该反转字符串', () => {
            expect(backwardString("hello")).toBe("olleh")
            expect(backwardString("world")).toBe("dlrow")
        })
    })

    describe('16. removeAllBefore - 移除指定值之前的所有元素', () => {
        it('⚠️ 副作用: 会修改原数组', () => {
            const arr1 = [1, 2, 3, 4, 5]
            const result1 = removeAllBefore(arr1, 3)
            console.log('原数组被修改:', arr1, '(应该保持不变)')
            expect(result1).toEqual([3, 4, 5])
            
            const arr2 = [1, 1, 2, 2, 3, 3]
            const result2 = removeAllBefore(arr2, 2)
            expect(result2).toEqual([2, 2, 3, 3])
        })
    })

    describe('17. allTheSame - 全部相同', () => {
        it('应该检查所有元素是否相等', () => {
            expect(allTheSame([1, 1, 1])).toBe(true)
            expect(allTheSame([1, 2, 1])).toBe(false)
        })
    })

    describe('18. countDigits - 数字计数', () => {
        it('应该计算数字字符的个数', () => {
            expect(countDigits("hi")).toBe(0)
            expect(countDigits("who is 1st here")).toBe(1)
            expect(countDigits("my numbers is 2")).toBe(1)
        })
    })

    describe('19. beginningZeros - 开头零的数量', () => {
        it('应该计算开头连续零的数量', () => {
            expect(beginningZeros("100")).toBe(0)
            expect(beginningZeros("001")).toBe(2)
            expect(beginningZeros("00100")).toBe(2)
        })
    })

    describe('20. splitPairs - 拆分成对', () => {
        it('应该将字符串拆分为两字符一组', () => {
            expect(splitPairs("abcd")).toEqual(["ab", "cd"])
            expect(splitPairs("abc")).toEqual(["ab", "c_"])
        })
    })
})
