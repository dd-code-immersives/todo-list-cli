const prompt = require('prompt-sync')();

/**
 * 
 * 
 * Start off your project by creating a loop that loops forever (use a while loop). Inside this loop you'll want to do three things:

1. Display content to the user
2. Prompt the user for an action
3. Handle that action accordingly
Start off by adding a comment for each of these describing what you intend to do. 

 */

let todo_list = [];
welcomeMessage(); //welcome user, only runs once

while(true) {

    //get user input (option select returns integer 1-3) runs many times 
    // unless user puts in 3 , and we break from the loop
    let opt = selectOption();

    //handle the options the user selects
    if (opt === 1) {
        console.log("User selected 1");
    }else if (opt === 2) {
        console.log("User selected 2");
    }else if (opt === 3) {
        console.log("Exiting Program...");
        break; 
    }

}
// define welcome message
function welcomeMessage() {
    console.log("Welcome to the To-Do List Manager Application!"); 
    console.log("==============================================");
}



// define selectOption ask user for input
function selectOption(){

    console.log("~ Select an action ~");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3] Exit Program" );
    const option = Number(prompt('>'));
    return option;
}