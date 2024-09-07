let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#Comp-score");
const getcomp = () =>{
    const options = ["rock","paper","Scissor"];
    const randin = Math.floor(Math.random()*3);
    return options[randin];
}
const drawgame = () =>{
    
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin) =>{
    if(userWin){
        user++;
        userscore.innerText = user;
        
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";
    }
    else {
        comp++;
        compscore.innerText = comp;
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userChoice) =>{
    console.log("user choice =",userChoice);
    const compchoice = getcomp();
    console.log("Comp choice =",compchoice);

    if(userChoice == compchoice){
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoice === "Scissor"){
            userWin = compchoice === "rock"? false : true;
        }
        else if (userChoice === "rock"){
            userWin = compchoice ==="Scissor"?true: false;
        }
        else {
            userWin = compchoice ==="rock"?true:false;
        }
        showWinner(userWin);
    }
} 
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});