#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = ()=>{
    return new Promise((resolve) => {
        setTimeout(resolve,2000);
    })
}
async function welcome() {
    let rainbow = chalkAnimation.rainbow("      <<<<<Welcome to Currency Converter>>>>>")
    await sleep();
    rainbow.stop()
}
await welcome();


let converter = {
    "PKR" : {
        "USD" : 0.0044,
        "GBP" : 0.0036,
        "PKR" : 1,
    },
    "USD" : {
        "PKR" : 227.61,
        "GBP" : 0.82,
        "USD" : 1,
    },
    "GBP" : {
        "USD" : 1.22,
        "PKR" : 278.07,
        "GBP"  : 1,
    }
}

const answer : {
    orignial : "PKR"|"USD"|"GBP",
    Convertion : "PKR"|"USD"|"GBP",
    Amount : number,
} = await inquirer.prompt([
    {
        type : "list",
        name : "orignial",
        choices : ["PKR","USD","GBP"],
        message : "Enter your currency :",
    },
    {
        type : "list",
        name : "Convertion",
        choices : ["PKR","USD","GBP"],
        message : "Enter your Convertion currency :",
    },
    {
        type : "number",
        name : "Amount",
        message : "Enter your Amount: ",
    }
])

const {orignial,Convertion,Amount} = answer;

if (orignial && Convertion && Amount) {
    let result = converter [orignial][Convertion] * Amount;
    console.log(`Your Convertion from ${orignial} to ${Convertion} is : ${result}`);
    
}else{
    console.log("Invalid Inputs");
    
}