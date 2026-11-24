"use strict";
/**
 * 手写Pick 从对象中挑选指定Key，返回新对象
 * @param obj 原始对象
 * @param keys 需要挑选的key数组
 * @returns 只包含指定Key的新对象
 */
function pick(obj, keys) {
    const result = {};
    for (const key of keys) {
        result[key] = obj[key];
    }
    return result;
}
const user = {
    id: 1,
    name: "小明",
    age: 20,
    email: "test@xxx.com"
};
const pickedUser = pick(user, ["id", "name", "age"]);
console.log(pickedUser);
//# sourceMappingURL=day19-generic-pick.js.map