const readlineSync=require('readline-sync');
console.log("YOU CAN FIND ODD NUMBERS SUM ");
let sum=0;
let limit=parseInt(readlineSync.question("Enter A limit to find Odd numbers sum"));
for (let i=1;i<=limit;i++){
    
    if(i % 2==!0){
     
        sum+=i
    }
}
console.log("Sum of odd Numbers:",sum);