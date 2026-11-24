//Day23 解构、函数参数解构、默认值
/**
 * 创建页面配置
 * @param options 可选配置对象，theme、fontSize都可以不传
 */
function createConfig({
    theme = "light",
    fontSize = 14
}:{ theme?:string,fontSize?:number}){
    //返回合并后的完整配置
    return {
        theme: theme,
        fontSize: fontSize
    }
}

//测试1:不传参，走默认
const cfg1 = createConfig({})
console.log("不传参:",cfg1)

//测试2:传一个参数
const cfg2 = createConfig({theme:"dark"})
console.log(cfg2)

//全传
const cfg3 = createConfig({theme:"dark",fontSize:16})
console.log(cfg3)

//基础结构练习
//对象结构
const todo = {id: 1, title: "学习解构"}
const {id, title} = todo
console.log("对象解构",id,title)

//数组解构
const numList = [100, 200]
const [n1, n2] = numList
console.log("数组解构:",n1,n2)