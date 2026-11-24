//Day24 DOM查询、空值判断、点击事件
//定义计数变量，初始值0
let count: number = 0

//泛型querySelect哦让：指定拿到的是按钮元素，类型：HTMLButtonElement | null
const btn = document.querySelector<HTMLButtonElement>("#btn")
//获取用来显示数字的文本元素
const countText = document.querySelector<HTMLSpanElement>("#count-text")

//空值判断：如果btn不为null，才绑定点击事件
if(btn) {
    btn.addEventListener("click", function(){
        count += 1
        if(countText) {
            countText.innerText = `计数：${count}`
        }
    })
}