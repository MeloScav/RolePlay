#!/usr/bin/env node
const prompts = require('prompts');

/* Player */
let player = {
    nom : thisName,
    sante : 200,
    force : 15,

    decrire(){
        return `${this.nom} has ${this.sante} points of life and ${this.force} in point of view`
    }
}

const question = [
    {
    type: "text",
    name: "chooseName",
    message: "Choose your name : "
    }
];



let play = async () => {
    const response = await prompts(question);

    let thisName = response.chooseName ;

    if(thisName  == ""){
        thisName = "Christophe-Michel";
    }

    console.log(`Hello, ${thisName}`);


    try {
        

    } catch (err) {
        console.log(err);
        console.log(
            chalk.red(
            "Incorrect values. Please try again :  :) "
            )
        );
        play();
    }

       

};
play();


