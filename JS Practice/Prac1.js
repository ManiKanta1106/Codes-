/*const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270,
};
console.log(product);*/

/*const profile = {
    userName : "SpiceMan",
    isFollow : false,
    followers : 319,
    following : 439,

};

console.log(typeof profile["userName"]);*/



// let number = prompt("Enter the number");
// if(number % 5 === 0){
//     console.log(number," is multiple of 5");
// }else {
//     console.log(number," is not multiple of 5");
// }


// let score = prompt("Enter your score(1 - 100:");
// let grade;

// if(score >= 90 && score <=100){
//     grade = "A";
// }else if(score >= 70 && score <= 89){
//     grade = "B";
// }else if(score >= 60 && score <= 69){
//     grade = "C";
// }else if(score >= 50 && score <= 59){
//     grade = "D";
// }else if(score >= 0 && score <= 49){
//     grade = "F";
// }

// console.log("according to your scores, Your grade was : ", grade);
// for(i = 1; i<=100;i++){
//     if( i % 2 === 0){
//         console.log("i = ",i);
//     }
    
// }


// let gameNum = 25;
// let userNum = prompt("Enter the game number : ");

// while (userNum != gameNum){
//   userNum = prompt("You entered wrong number. Guess again : ");
// }

// console.log("Congra25tulations, you entered the right number");

// let fullName = prompt("Enter the fullname without spaces: ");

// let username = "@"+fullName+fullName.length;
// console.log(username);

// let marks = [85, 92,60, 65, 36, 66];

// let sum = 0;

// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`the average of total marks : ${avg}`);

// let items = [250, 645, 300, 900, 50]

// for(let i=0;i<items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);

// let companies = ["Wipro", "IBM", "Accenture", "TCS", "JP Morgan", "Qualcomm"];

// console.log(companies.shift("Wipro"));

// console.log(companies.splice(0,1,"virtusa"));

// // console.log(companies.push("Amazon"));


// function countVowels(str){
//     let count = 0;
//     for(const char of str) {
//         if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }

//     return count;
// }

// let arr = [2,3,4,5,6];

// arr.forEach((num)=>{
//     console.log(num * num);
// })

// let marks = [88,96,57,99,92,76];

// const output = marks.filter((val) => {
//     return val > 90;
// });

// console.log(output);

// let n = prompt("Enter a number : ");

// let arr = [];

// for(let i=1;i<=n;i++){
//     arr[i-1] = i;
// }

// console.log(arr)

// const sum = arr.reduce((res, cur) => {
//     return res + cur;
// })

// console.log(sum);

// const fact = arr.reduce((res, curr) =>{
//     return res * curr;
// })

// console.log(`Factorial = ${fact}`);

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});