//Day21 复盘：主题切换脚本，改为TS，无any
/**
 * 切换页面明暗主题
 * @param themeBtn 切换按钮 DOM元素
 * @param bodyEl body DOM元素
 */
function toggleTheme(themeBtn:HTMLButtonElement,bodyEl:HTMLBodyElement):void {
    if(bodyEl.classList.contains("dark")) {
        bodyEl.classList.remove("dark")
        themeBtn.innerText = "切换暗色模式"
    } else {
        bodyEl.classList.add("dark")
        themeBtn.innerText = "切换亮色模式"
    }
}

document.addEventListener("DOMContentLoaded",function():void {
    const themeBtn : HTMLButtonElement | null = document.getElementById("themeBtn") as HTMLButtonElement
    const bodyEl : HTMLBodyElement = document.body as HTMLBodyElement

    if(themeBtn) {
        themeBtn.addEventListener("click", function():void {
            toggleTheme(themeBtn,bodyEl)
        })
    }
})