let userScore=0;
let compScore=0;
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");


const gencompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You Win! Your ${userChoice} Beats ${compChoice}`;
        userScore++;
        user_score.innerText=userScore;
        msg.style.backgroundColor="green";
    }
    else{
        msg.innerText=`You Lose! ${compChoice} Beats Your ${userChoice}`;
        compScore++;
        comp_score.innerText=compScore;
        msg.style.backgroundColor="red"; 
    }
}

const playGame=(userChoice)=>{
    const compChoice=gencompChoice();
        if(userChoice===compChoice){
            msg.innerText="Game Draws! Play Again";
            msg.style.backgroundColor="#081b31";
        }
        else{
            let userWin=true;
            if(userChoice==="Rock"){
                userWin=compChoice==="Paper"?false:true;
            }
            else if(userChoice==="Paper"){
                userWin=compChoice==="Scissors"?false:true;
            }
            else{
                userWin=compChoice==="Rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
        
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})