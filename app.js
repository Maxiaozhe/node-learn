const readline = require('readline');
const color=require('cli-color');
const rl = readline.createInterface(
    process.stdin,
    process.stdout);
const numberCount = (start, end, num) => {
    let count = 0;
   for (let i = start; i <= end; i++) {
        let nums = i.toString().split('');
        nums.forEach(x => {
            if (x === num) {
                count++;
            }
        });
    }
    return count;
}

const tryParseInt = (str,min=0,max=99999999) => {
    num = parseInt(str);
    if (isNaN(num)) {
        console.error(color.red("请输入数字，笨蛋！"));
        return null;
    }
    if(num.toString().length>9){
        console.error(color.red("数字太大了，笨蛋！"));
        return null;
    }
    if(num <min || num > max){
        console.error(color.red(`请输入数字（${min}-${max}），笨蛋！`));
        return null;
    }
    return num.toString();
}

const question=async (message)=>{
    return new Promise((resolve,reject)=>{
        rl.question(message,(answer)=>{
            resolve(answer);
        });
    });
}

const  inputParams=async ()=>{
    let start = await question(color.green("从多少开始？"));
    if(tryParseInt(start)==null){
        process.exit(-1);
    }
          
    let end = await question(color.green("到多少结束？"));
    if(tryParseInt(end)==null){
        process.exit(-1);
    }
    let num = await question(color.green("计算（0-9）哪个数字出现的次数？"));
    return {
        start,
        end,
        num
    };
}

async function  main(){
    let isFirst =true;
    while( isFirst || (await question('还玩吗?(Y/N):')).toLowerCase()!=='n'){
        let params = await inputParams();
        let num= parseInt(params.num);
        if(isNaN(num)){
            for(let i=0;i<10;i++){
                num=i.toString();
                let count = numberCount(params.start,params.end,num);
                console.info(`数字${color.green(num)}出现的次数:${color.green(count)}次`);
            }
        }else{
            let count = numberCount(params.start,params.end,params.num);
            console.info(`数字${color.green(params.num)}出现的次数:${color.green(count)}次`);
        }

        isFirst=false;
    }
    process.exit(0);
}

main();

