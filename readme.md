# Node
async/await �̎g�p�e�X�g

1. Node�I?��?�o�T��
�g�preadline��
```js
const readline = require('readline');
const rl = readline.createInterface(
    process.stdin,
    process.stdout);

 rl.question(message,(answer)=>{
     console.log(answer);           
 });


```
2. �g�pasync/await��?�E��?�n?
����?�������ʐ��pawait?�p�I����
```js
const question=async (message)=>{
    return new Promise((resolve,reject)=>{
        rl.question(message,(answer)=>{
            resolve(answer);
        });
    });
}
```
