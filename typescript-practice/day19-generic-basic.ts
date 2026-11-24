//Day19 泛型入门
/**
 * identity 泛型函数：传入什么类型，返回什么类型
 * @param arg 任意参数类型
 * @returns 和入参相同的值
 */
function identity<T>(arg:T):T{
    return arg
}

/**
 * getFirst 获取数组第一个元素
 * @param arr T类型数组
 * @returns 数组第一项 空数组返回undefined
 */
function getFirst<T>(arr:T[]):T|undefined {
    return arr[0]
}

/**
 * wrapInArray 把单个值包装成数组
 * @param value 任意类型的值
 * @returns 由该值组成的数组T[]
 */
function wrapInArray<T>(value:T):T[] {
    return [value]
}

//============测试代码==========
//泛型自动推断，不用手写<number>
const num1 = identity(100)
const str = identity("hello ts")

//getFirst测试
const firstNum = getFirst([1,2,3])
const firstStr = getFirst(["a","b","c"])
const emptyFirst = getFirst([])

//wrapInArray测试
const numArr = wrapInArray(666)
const strArr = wrapInArray("泛型")

console.log(num1,str)
console.log(firstNum,firstStr,emptyFirst)
console.log(numArr,strArr)
