"use strict";
//Day21 复盘：主题切换脚本，改为TS，无any
/**
 * 切换页面明暗主题
 * @param themeBtn 切换按钮 DOM元素
 * @param bodyEl body DOM元素
 */
function toggleTheme(themeBtn, bodyEl) {
    if (bodyEl.classList.contains("dark")) {
        bodyEl.classList.remove("dark");
        themeBtn.innerText = "切换暗色模式";
    }
    else {
        bodyEl.classList.add("dark");
        themeBtn.innerText = "切换亮色模式";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("themeBtn");
    const bodyEl = document.body;
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            toggleTheme(themeBtn, bodyEl);
        });
    }
});
//# sourceMappingURL=day21-js2ts.js.map