//1.add
function add(a:number,b:number):number {
    return a + b;
}

//2.greet 字符串拼接
function greet(name:string): string {
    return `hello,${name}`;
}

//3.sum 接收数字数组，返回数组所有数字和
//nums:number[] 等价 Array<number>
function sum(nums:number[]):number {
    let total = 0;
    for(const item of nums) {
        total += item;
    }

    return total;
}

//4.firstAndLLast 接收字符串数组 返回第一个和最后一个元素 元组[string,string]
//元组：固定长度、固定每个位置类型的数组
function firstAndLast(arr:string[]):[string,string] {
    if (arr.length === 0) {
       throw new Error("数组不能为空");
    }
    const first = arr[0]!;
    const last = arr[arr.length-1]!;
    return [first,last];
}

//5.isAdult 是否成年
function isAdult(age:number):boolean {
    return age>=18;
}

console.log(add(3,5));
console.log(greet("小明"));
console.log(sum([10, 20, 30]));
console.log(firstAndLast(["苹果", "香蕉", "橙子"]));
console.log(isAdult(20));
console.log(isAdult(16));

// ========== 验收测试：下面这行故意传错类型，VS Code标红 + tsc编译报错 ==========
// add("3", 5)  // ❌ 传字符串给number类型参数，直接报错
// greet(123)   // ❌ 传数字给string类型参数
// sum([1, 2, "3"]) // ❌ 数组混入字符串