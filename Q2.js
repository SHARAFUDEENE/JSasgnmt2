const readlineSync=require('readline-sync');
array=['1','3','9','12','15','18','21']
console.log("the Square numbers of ",array,"is:");

for(let i=0;i<=6;i++){
    let square= array[i]*array[i]
    console.log("square of ",array[i] ,"is :",square);


}
