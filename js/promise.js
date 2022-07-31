// let p=new Promise(function(res,rej){
//     let isOnline=false;
//     if(isOnline)
//     {
//         res("rinki is online");
//     }
//     else{
//         rej("rinki is offline");
//     }
// });
// p.then(function(val){
//     console.log(val);
// })
// p.catch(function(err){
//     console.log(err);
// })
// p.finally(function(){
//     console.log('anything...');
// })
// console.log('hii promise is going on...');

// let p=new Promise(function(res,rej){
//    setTimeout(()=>{res("i am faster")},1000);
//    setTimeout(()=>{rej("i am slow")},500);
// });
// p.then(data=>console.log(data)).catch(err=>console.log(err)).finally(val=>console.log('any'));


// let html=new Promise((res,rej)=>{
//     res("Yes completed");
// });
// let css=new Promise((res,rej)=>{
//     res("Yes completed");
// });
// let javascript=new Promise((res,rej)=>{
//     rej("Not completed");
// });

// Promise.all([html,css,javascript])
// .then(val=>console.log(val))
// .catch(err=>console.log(err));
// Promise.all([html,css,javascript])
// .then(val=>val.forEach(x=>console.log(x)))
// .catch(err=>console.log(err));
// Promise.any([html,css,javascript])
// .then(val=>console.log(val))
// .catch(err=>console.log(err));


// let ApiFetch=function(){
//     let data=new Promise(function(res,rej){
//         let AjaxRequest=new XMLHttpRequest();
//         AjaxRequest.open("GET","https://api.github.com/users");
//         AjaxRequest.onload=function(){
//             res(this.response);
//         };
//         AjaxRequest.onerror=function(){
//             rej(this.response);
//         };
//         AjaxRequest.send();
//     });
//     data.then(res=>console.log(JSON.parse(res))).catch(err=>console.log(err));
// };
// ApiFetch();
// (async function(){
//     let gitApi=await window.fetch("https://api.github/users");
//     let res= await gitApi.json();
//     console.log(res);
//     // let data=await gitApi.json();
//     // console.log(data);
// })();

// let githubAPi=function(){
//     return new Promise (function(res,rej){
//         let AjaxRequest=new XMLHttpRequest();
//         AjaxRequest.open("GET","https://api.github.com/users");
//         AjaxRequest.onload=function(){
//             res(JSON.parse(this.response));
//         };
//         AjaxRequest.onerror=function(){
//             rej(this.responseText);
//         };
//         AjaxRequest.send();
//     });
// };
// let newsAPi=function(){
//     return new Promise (function(res,rej){
//         let AjaxRequest=new XMLHttpRequest();
//         AjaxRequest.open("GET","https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5");
//         AjaxRequest.onload=function(){
//             res(JSON.parse(this.response));
//         };
//         AjaxRequest.onerror=function(){
//             rej(this.responseText);
//         };
//         AjaxRequest.send();
//     });
// };
// let TVAPi=function(){
//     return new Promise (function(res,rej){
//         let AjaxRequest=new XMLHttpRequest();
//         AjaxRequest.open("GET","https://api.tvmaze.com/search/shows?q=postman");
//         AjaxRequest.onload=function(){
//             res(JSON.parse(this.response));
//         };
//         AjaxRequest.onerror=function(){
//             rej(this.responseText);
//         };
//         AjaxRequest.send();
//     });
// };
// Promise.all([githubAPi(),newsAPi(),TVAPi()])
// .then(data=>{console.log(data);})
// .catch(err=>console.log(err));
// Promise.allSettled([githubAPi(),newsAPi(),TVAPi()])
// .then(data=>console.log(data))
// .catch(err=>console.log(err));


// let promise1=()=>new Promise((res,rej)=>{
//     setTimeout(()=>rej("hii shashi promise race"),100);
// });
// let promise2=()=>new Promise((res,rej)=>{
//     setTimeout(()=>rej("hii rinki promise race"),500);
// });
// let promise3=()=>new Promise((res,rej)=>{
//     setTimeout(()=>rej("hii dixith promise race"),1000);
// });
// Promise.allSettled([promise1(),promise2(),promise3()])
// .then(data=>{data.forEach(x=>{
//     if(x.status==="rejected")
//     {
//         console.log(x.reason + "fulfilled" );
//     }
//     else {
//         console.log(x.reason);
//     }
// });
// })
// .catch(err=>console.log(err));