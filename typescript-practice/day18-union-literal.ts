// Day18 联合类型与字面量类型
//字面量联合类型
type RequestStatus = "loading" | "success" | "error"

/** 
 * 根据状态返回提示文案
 * @param status 请求状态，限定RequestStatus
 * @returns 对应提示字符串 
 * */ 

function getMessage(status:RequestStatus):string {
    switch (status) {
        case "loading": return "加载中，请稍后..."
        case "success": return "请求成功！"
        case "error": return "请求失败，请重试"
    }
}

// ========== 测试代码 ==========
const s1: RequestStatus = "loading"
console.log(getMessage(s1))

const s2: RequestStatus = "success"
console.log(getMessage(s2))
