# Node
async/await の使用テスト

1. Node的?入?出控制
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
2. 使用async/await来?脱回?地?
将回?函数改写成可用await?用的方式
```js
const question=async (message)=>{
    return new Promise((resolve,reject)=>{
        rl.question(message,(answer)=>{
            resolve(answer);
        });
    });
}
```
