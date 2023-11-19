const readlineSync=require('readline-sync');
let mark=parseInt(readlineSync.question("Please type your mark :"));
if(mark>90){
    console.log("Your Grade is A");
}
else if(mark>80){
    console.log("Congrats...Your Grade is B");
}
else if(mark>70){
    console.log("Congrats...Your Grade is  C");

}
else if(mark>60) {
    console.log("Congrats...Your Grade is D"
    );
}
else if (mark>=50){  console.log("Congrats...Your Grade is E");}
else {console.log("SORRY YOU ARE FAILED");}