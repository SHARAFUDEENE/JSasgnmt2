const readlineSync=require('readline-sync');
let number=parseInt(readlineSync.question("Please type number of elements"));
let array=[];
let count=0;
let even=[];
for(let i=0;i<number;i++){
    array[i]=parseInt(readlineSync.question('enter' +(i+1)+'th Element:'));
    if(array[i]%2==0){
        
    }
}
for(let c=0;c<number;c++){
    if(array[c] %2 ==0){

    count++;


    }
    
}console.log("Number of even numbers in the given array is",count);
