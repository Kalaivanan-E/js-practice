
// Synchronous it will executes code line by line, it will wait for the previous one to complete
//  and then next line will be execute


function task1(){
    console.log("Task 1 is started")
    
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    console.log("Task1 executing .....")
    while(Date.now() <= end){
    }
    console.log("Task1 completed")
}

task1()

