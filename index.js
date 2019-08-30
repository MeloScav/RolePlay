#!/usr/bin/env node
const prompts = require('prompts');
const CFonts = require('cfonts');
const gradient = require('gradient-string');
const chalkAnimation = require('chalk-animation');

let score = 0;


CFonts.say('The game', {
    font: 'chrome',           
	align: 'center',              
	colors: ['candy'],        
	background: 'transparent',  
	letterSpacing: 1,    
	lineHeight: 2,     
	space: true,         
	maxLength: '0',      
});



/*                            Questions                              */
/*   Class   */
const questions = [
    {
    type: "text",
    name: "chooseName",
    message: "Choose your name : "
    },
    {
    type: "select",
    name: "chooseCharacterClass",
    message: "Choose your class : ",
    choices: [
        { title: "Developer", description: "Your are the code guardian", value: "Developer"},
        { title: "Pioupiou", description: "Your are a small duck, you say yes to everything", value: "Pioupiou"},
        { title:"Unicorn", description: "You are a babymetal rockstar", value:"Unicorn" },
        { title:"The redhead", description: "He was as red-faced as he was red-headed", value: "The redhead" },
      ],
    initial: 0
    }
];

/*   Firts choices   */
const first = [
    {
    type: "select",
    name: "firstChoice",
    message: " Where do you want to go : ",
    choices: [
        { title: "Stairs", description: "Beautiful stairs but very long", value: "Stairs"},
        { title: "Elevator", description: "Easy and relaxing", value: "Elevator"}
      ],
    initial: 0
    }
];

/*   Question Elevator  */
const questionE = [
    {
    type: "select",
    name: "qElevator",
    message: " Is CHIMMO the best site in the world ? ",
    choices: [
        { title: "Yes", description: "It's your last word ?", value: "Yes"},
        { title: "No", description: "Are you sure ? ", value: "No"}
    ],
    initial: 0
    }
];

/*    Question Stairs   */
const questionS = [
    {
    type: "select",
    name: "qStairs",
    message: 'Did you\'ve seen her "Artisan" ?',
    choices: [
        { title: "Yes", description: "Really?", value: "Yes"},
        { title: "No", description: "Are you sure ?", value: "No"}
    ],
    initial: 0
    }
];

/*     Boum ascenseur    */
const questionEric = [
    {
    type: "select",
    name: "qEric",
    message: 'Do you want to read it ?',
    choices: [
        { title: "Yes", description: "You want, really ?", value: "Yes"},
        { title: "No", description: "Are you sure ?", value: "No"}
    ],
    initial: 0
    }
];

/*          Questions arcades            */
const questionArcades = [
    {
    type: "select",
    name: "qAnthony",
    message: "Do you want to play it ? ",
    choices: [
        { title: "Yes", description: "Beautiful virtual game", value: "Yes"},
        { title: "No", description: "Are you sure ? It's really beautiful... ", value: "No"}
    ],
    initial: 0
    }
];



/*                             THE GAME                         */
let play = async () => {
    const response = await prompts(questions);

    /*      Choix de classes          */
    let thisName = response.chooseName ;
    let thisClass = response.chooseCharacterClass;

    if(thisName  == ""){
        thisName = "Christophe Michel";
        thisClass = "THE singer God"
    }
    /*     Christophe Michel, le bonus     */
    if(thisName == "Christophe Michel"){
        console.log(gradient.rainbow(`
    Hello ${thisName}, you are ${thisClass} 
         `));
         score = 200;
    }
    else{
        console.log(`
    Hello ` + gradient.fruit(thisName) + ", you are " + gradient.fruit(thisClass)
        );
    }

    console.log(`
    Oh, miserable! You have decided to venture into the Fort-BeCode! 
    You don’t know what’s going to happen (and we either). 
    You will have to be brave and make good choices!`)

    /*             Choix du chemin         */
    let begin = async () => {
        const resp = await prompts(first);
        let thisChoice = resp.firstChoice ;
    
        if(thisChoice == "Elevator"){
            console.log(` 
        You take the elevator and come face to face with Nicolas. He generates an ACF field around you.
        To get out, you have to answer his question : "Is CHIMMO the best site in the world ?" `)
       

            /*     Question dans l'ascenseur   */
            let second = async () => {
                const respYoN = await prompts(questionE);
                let choiceYoN = respYoN.qElevator ;

                if(choiceYoN == "Yes"){
                    console.log(`
        The elevator goes up and you can go to the BeCode class.
                `);
                    score = score +15 ;

                   /*          Retour en haut si oui         */
                    console.log(`
        There you meet Julie who introduces you to the witch « Lara-Vel »
        She asks you if you've seen her "Artisan" ?`);
            
                /*         Question en haut : Julie     */
                let third = async () => {
                    const respStairs = await prompts(questionS);
                    let choiceStairsYoN = respStairs.qStairs ;
        
                    if(choiceStairsYoN == "Yes"){
                        console.log(`
        She's asking you to take him back to the « Terminal ».
        `);
        console.log(`
        You are stupid, you have taken the wrong root and you find yourself out of the PIL without the pass. 
        GAME OVER...
        `);   
                    }
                    else{
                        console.log(`
        She’s asking you to look for him with Ashraf, aka « Harry-Coder ».
                        `);

                        /*   Début ARCADE    */
                        let arcade = async () => {
                            console.log("You enter the arcade and the master of the game Anthony invites you to face him in a airhockey game in VR.")
                            const respArc = await prompts(questionArcades);
                            let choiceArcadesYoN = respArc.qAnthony ;
                
                            if(choiceArcadesYoN == "Yes"){
                                console.log(`
        You accept, but Jessica who was hidden in the room throws a real puck in the face. 
        GAME OVER...`)
                            }
                            else{
                                let finish = `
        You refuse because you don't want to test a game before you see his code. Good choice !
        hristophe Michel makes his appearance and congratulates you before leaving on his magic lama...`
                                if(thisName == "Christophe Michel"){
                                    console.log(finish + `
        Ps: There is only one real Christophe Michel !
                                    `);
                                }
                                else{
                        console.log(finish);  
                                }
                
                            }
                
                        }
                        arcade();
                        /*  Fin ARCADE  */
                    }
                
                }
                third();
                /*    Fin question Julie   */


                /*   Explosion ascenseur   */
                }
                else{
                    console.log(`
        BOUM !!!!!
        The elevator explodes and you find yourself in BeCode's cellar.
        You meet Eric who asks you to sign an attendance contract...
                    `);
                
                /*      Question Eric        */
                    let eric = async () => {
                        const respEric = await prompts(questionEric);
                        let choiceEricYoN = respEric.qEric ;
            
                        if(choiceEricYoN == "Yes"){
                            console.log(`
            GAME OVER, you score : ${score}
                        `);
                            score = score +10 ;
                        }
                        else{
            /*    Salle d'arcade après Eric    */
                            console.log(`
            You run to the arcade....
                            `);

                            /*  Arcade  */
                            arcade();
                        }

                    }
                    eric();
                    /*  Fin question Eric  */
                }
            
            }
            second();
            /*          Fin question ASCENSEUR        */
    
    
    
    }
        /*      Quand tu prends les ESCALIERS       */
        else{
            console.log(`
        You go up the stairs, they take you directly to the BeCode class.
        There you meet Julie who introduces you to the witch « Lara-Vel »
        She asks you if you've seen her "Artisan" ?`)

        
            /*          Question escaliers  : Julie         */
            let third = async () => {
                const respStairs = await prompts(questionS);
                let choiceStairsYoN = respStairs.qStairs ;

                if(choiceStairsYoN == "Yes"){
                    console.log(`
        She's asking you to take him back to the « Terminal ».
                `);
                /* tu te perds et tu meures */
                    console.log("You are stupid, you have taken the wrong root and you find yourself out of the PIL without the pass. Game Over");   

                }
                else{
                    console.log(`
        She’s asking you to look for him with Ashraf, aka « Harry-Coder ».
        Harry-Coder takes you to the arcade....
        `);
                    console.log("Harry Coder sass the monsters with his magic wand and leads you straight to the arcade.");

        /* Arcades  */
        arcade();

                }
        
            }
            third();
            /*          Fin question Julie      */

        }
       
    }
    begin();

};
play();
/*         End game             */




