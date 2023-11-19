const readlineSync=require('readline-sync');
let multi=parseInt(readlineSync.question("please type a muliplication number :"));
let limit=parseInt(readlineSync.question("How many numbers are multiple :"));
console.log("Muliplication Chart Of",multi);

for(let i=1;i<=limit;i++){
    console.log(i, "*", multi,"=", i*multi);
}