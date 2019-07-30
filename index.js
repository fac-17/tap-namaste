const readline = require("readline");
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
    console.log(`TESTS Passed:${passedCount}, Failed:${failedCount}, Total:${testCount}`);
    if (failedCount){
        console.log("FAIL");
    } else {
        console.log("All passed");
        console.log(`
        
        `)
    }

})