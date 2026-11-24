/**
 * 手写Pick 从对象中挑选指定Key，返回新对象
 * @param obj 原始对象
 * @param keys 需要挑选的key数组
 * @returns 只包含指定Key的新对象
 */
function pick<T,K extends keyof T>(obj:T,keys:K[]):Pick<T,K>{
    const result = {} as Pick<T,K>
    for(const key of keys) {
        result[key] = obj[key]
    }
    return result
}

type User1 = {
    id:number
    name:string
    age:number
    email:string
}

const user : User1 = {
    id:1,
    name:"小明",
    age:20,
    email:"test@xxx.com"
}

const pickedUser = pick(user,["id","name","age"])
console.log(pickedUser)