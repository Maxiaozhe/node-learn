# Node
async/await の使用テスト

1. Node的输入输出控制
使用readline来
```js
const readline = require('readline');
const rl = readline.createInterface(
    process.stdin,
    process.stdout);

 rl.question(message,(answer)=>{
     console.log(answer);           
 });


```
2. 使用async/await来摆脱回调地狱
将回调函数改写成可用await调用的方式
```js
const question=async (message)=>{
    return new Promise((resolve,reject)=>{
        rl.question(message,(answer)=>{
            resolve(answer);
        });
    });
}
```
