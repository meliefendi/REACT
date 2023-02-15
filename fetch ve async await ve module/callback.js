// setTimeout(()=>{
//     console.log("Merhaba Dünya")
// }, 2000)

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")        //burada işlemler karışık olarak gelir 
// .then((data)=> data.json())
// .then((users) =>console.log(users));

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((data)=> data.json())
// .then((post)=>{
//     console.log(post)
// })

// async function getData(){
//     const users =await(await fetch("https://jsonplaceholder.typicode.com/users")).json();    //burada ise veriler düzenli olarak yazım sırasıyla gelir.
    
//     const post1 =await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 =await(await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log(users);
//     console.log(post1);
//     console.log(post2);
// }

// getData()

(async()=>{
    const users =await(await fetch("https://jsonplaceholder.typicode.com/users")).json();    //burada ise aynı sonuç çıkar sadece getData() yapmadan anonim foksiyon şekilnde yaptık.
    
    const post1 =await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

    const post2 =await(await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

    console.log(users);
    console.log(post1);
    console.log(post2);
})()