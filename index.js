const readline = require("readline");
const cowsay = require("cowsay");
let testCount = 0;
let passedCount = 0;
let failedCount = 0;
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});
rl.on('line',(lineStr)=>{
    // console.log(lineStr);
    if (lineStr.startsWith("ok")  ){
        passedCount+=1;
        testCount+=1;
    } else if (lineStr.startsWith("not ok")){
        failedCount++;
        testCount++;
    }
})
rl.on('close',()=>{
    if (failedCount){
        console.log(cowsay.say({T:"U",e:"XX",text:`NOOOOOOOB
${failedCount} Failed!`}));
        console.log()
    } else {
        console.log(cowsay.say({e:"OO",text:"GOOOOOOOD"}));
        console.log("All passed");
    }
    console.log(`TESTS Passed:${passedCount}, Failed:${failedCount}, Total:${testCount}`);

})