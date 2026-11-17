"use strict";
function formatArticle(article) {
    return `${article.title}-${article.author.name}`;
}
const testUser = {
    id: 1,
    name: "前端学习者",
    age: 20
};
const testArt = {
    title: "TS入门",
    content: "interface和type学习",
    author: testUser,
    createtime: "2026-11-17"
};
console.log(formatArticle(testArt));
const artStatus = "published";
//# sourceMappingURL=day17-interface-type.js.map