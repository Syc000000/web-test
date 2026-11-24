"use strict";
/**
 * 根据状态返回提示文案
 * @param status 请求状态，限定RequestStatus
 * @returns 对应提示字符串
 * */
function getMessage(status) {
    switch (status) {
        case "loading": return "加载中，请稍后...";
        case "success": return "请求成功！";
        case "error": return "请求失败，请重试";
    }
}
// ========== 测试代码 ==========
const s1 = "loading";
console.log(getMessage(s1));
const s2 = "success";
console.log(getMessage(s2));
//# sourceMappingURL=day18-union-literal.js.map