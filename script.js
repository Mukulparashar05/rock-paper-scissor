let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let user_score=document.querySelector("#user-score");
let computer_score=document.querySelector("#comp-score");
const generatecomputerchoice= () => {
    const options=['rock','paper','scissors'];
    const randomnumber=Math.floor(Math.random()*3);
    return options[randomnumber];
    //rock paper scissors

}
const drowgame= () => {
 
    msg.innerText="its a drow"
}
const showwinner= (userwins,userchoice,computerchoice) => {
    if(userwins){
        userscore++;
        user_score.innerText=userscore;
        user_score.style.color="green";
     
        msg.innerText=`you wins! your ${userchoice} beats ${computerchoice} `
        msg.style.color="green";
    
    }
    else{
        computerscore++;
        computer_score.innerText=computerscore;
        computer_score.style.color="red";
        
        msg.innerText=`computer wins ${computerchoice} beats ${userchoice}`  
        msg.style.color="red";
        
    }

}
const playgame= (userchoice) =>{

// computer choice
const computerchoice=generatecomputerchoice();

if(userchoice===computerchoice){
  drowgame();
}
else{
    let userwins=true;
    if(userchoice==='rock'){
        userwins=computerchoice==="paper"?false:true; // if choice is paper then userwins is false else true
     }
    else if(userchoice==='paper'){
        userwins=computerchoice==="scissors"?false:true; // if choice is scissors then userwins is false else true
    }
    else if(userchoice==='scissors'){
        userwins=computerchoice==="rock"?false:true; // if choice is rock then userwins is false else true
    }
    showwinner(userwins,userchoice,computerchoice);
    
}}
choices.forEach((choice) => {

choice.addEventListener('click',() => {
    let userchoice=choice.id;
       
        playgame(choice.id);

    })
})
