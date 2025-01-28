let userScore=0;
let compScore=0;

const userscorepara =document.querySelector(".userscore");
const compscorepara =document.querySelector(".compscore");

const choice = document.querySelectorAll(".choice");
const result = document.querySelector(".show");

const getcompchoice=()=>{
const opsion=["rock","paper","scissor"];
const randomindx=Math.floor(Math.random()*3);
return opsion[randomindx];
}
const drow=()=>{
    console.log("gamed Draw play again!")
    result.innerText="Game Drow play again";
    result.style.backgroundColor="rgb(255, 0, 187)";
}

const winner = (userWin,compchoice,userChoice)=>{
    if(userScore==5)
        document.querySelector(".win").style.visiblity="visible";
    else if(compScore==5)
        document.querySelector(".loose").style.visiblity="visible";
    
    
    if (userWin){
        
        userScore++;
        
        userscorepara.innerText=userScore;
        result.innerText=`You Win ${userChoice} beats computer\`s ${compchoice}` ;
        result.style.backgroundColor="green";

    }
        
    
    else{
        
        compScore++;
        
        compscorepara.innerText=compScore;
        console.log("you lose");
        result.innerText=`you lose ${compchoice} beats your ${userChoice}`
        result.style.backgroundColor="red";
    }
        
}


const playgame=(userChoice)=>{
    const compchoice = getcompchoice();

    console.log("user choice : ",userChoice);
    console.log("comp choice : ",compchoice);
    if(userChoice==compchoice){
        drow();
    }
    else{
        let userWin=true;
        
        if (userChoice=="rock"){
            //scissor paper
            //userWin= compchoice=="scissor" ? true:false;
            if(compchoice=="scissor"){
                userWin=true;
                
            }
                
            else{
                userWin=false;
            }
                
        }
        else if(userChoice=="paper"){
            //rock scissor
            if(compchoice=="rock")
                userWin=true;
            else
                userWin=false;

        }
        else{//scissor
            //rock paper
            if(compchoice=="paper")
                userWin=true;
            else
                userWin=false;

        }
        winner(userWin,compchoice,userChoice);
    }
    

}

choice.forEach((choice)=>{
    
    choice.addEventListener("click",(evt)=>{
        const userChoice=choice.getAttribute("id");
        // console.log("user choice",userChoice);
        playgame(userChoice);
        });
});