"use strict";
//原始待办数组
const todoList = [
    { id: 1, title: "map", done: true },
    { id: 2, title: "filter", done: true },
    { id: 3, title: "find", done: false },
    { id: 4, title: "reduce", done: false }
];
//map：把TodoItem[]->string[],只提取标题
const titleList = todoList.map((item) => {
    return item.title;
});
console.log("map提取标题：", titleList);
//filter: 筛选done为true的待办
const doneList = todoList.filter((item) => {
    return item.done === true;
});
console.log("filter已完成项：", doneList);
//find:找id=3的那一条
const targetTodos = todoList.find((item) => {
    return item.id === 3;
});
console.log("find:id=3:", targetTodos);
//reduce:统计未完成的待办总数
const countUnTodes = todoList.reduce((count, item) => {
    if (!item.done) {
        return count + 1;
    }
    return count;
}, 0); //0是初始累加值
console.log("reduce:未完成待办：", countUnTodes);
//# sourceMappingURL=day22-array-method.js.map