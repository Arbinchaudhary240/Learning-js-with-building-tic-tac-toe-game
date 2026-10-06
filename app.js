let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".resetGame");
let new_game = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let tie_msg = document.querySelector(".tie-msg");

let turnX = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetgame = () => {
    turnX = true;
    msgContainer.classList.add("hide");
    tie_msg.classList.add("hide");
    enableBtns();
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked");
        if(turnX) {
            box.innerText = "X";
            //console.log("box is clicked");
            console.log(box.innerText);
            turnX = false;
        } else{
            box.innerText = "O";
            //console.log("box was clicked");
            console.log(box.innerText);
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// for win condition box disabled
const disableBtns = () => {
    for(let box of boxes){
        box.disabled=true;
    }
} 

// for reset all box enabled
const enableBtns = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations! Winner is ${winner}`;
}

const tie = () => {
    tie_msg.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPattern) {
        //console.log(pattern[0],pattern[1], pattern[2]);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("winner", pos1val);
            disableBtns();
            showWinner(pos1val);
            return;
        }
    }

    if([...boxes].every((box) => box.innerText !== "")) {
        tie();
    }
};



reset_btn.addEventListener("click", resetgame);
new_game.addEventListener("click", resetgame); 