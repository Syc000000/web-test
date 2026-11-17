interface User {
    id:number;
    name:string;
    age?:number; //?代表可选属性，可以不传
}

interface Article {
    title:string
    content:string
    author:User
    createtime:string
}

//type 类型别名：联合类型示例（状态）
type Status = "draft" | "published" | "deleted"

function formatArticle(article:Article):string {
    
    return `${article.title}-${article.author.name}`
}

const testUser: User = {
    id:1,
    name:"前端学习者",
    age:20
};

const testArt = {
    title:"TS入门",
    content:"interface和type学习",
    author:testUser,
    createtime:"2026-11-17"
};

console.log(formatArticle(testArt));

const artStatus:Status = "published";
