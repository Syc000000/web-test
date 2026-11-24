//Day20 类型收窄+unknown
/**
 * processInput 处理未知输入，先做类型收窄再处理
 * @param input 未知类型输入 unknown
 * @returns 处理后的字符串
 */
function processInput(input:unknown):string {
    //typeof收窄：判断是不是字符串
    if (typeof input === "string") {
        return input.toUpperCase()
    }
    if (typeof input === "number") {
        return String(input*input)
    }
    return "unsupported"
}

console.log(processInput("hello ts"));    // 输出 HELLO TS
console.log(processInput(9));             // 输出 81
console.log(processInput(true));          // 输出 unsupported
console.log(processInput([1,2,3]));       // 输出 unsupported
console.log(processInput(null));          // 输出 unsupported