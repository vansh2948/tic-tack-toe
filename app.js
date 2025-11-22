let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn"); // Use querySelector instead
let newGameBtn = document.querySelector("#new-btn"); // Use querySelector instead
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 
let turnO = true; // playerX, playerO

const winPatterns = [ 
    [0,2,3], [0,3,6], [0,4,8], [1,4,7], 
    [2,5,8], [2,4,6], [3,4,5], [6,7,8]
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}; 

boxes.forEach((box) => {
    box.addEventListener("click", () => { 
       if (turnO) { 
        box.innerText = "O";
        turnO = false;
       } else {
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
       checkWinner();
    });
});

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
        }
    }
};


newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
