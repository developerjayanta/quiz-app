const questions = [
    {
        question : "what is the largest animal in the world",
        answer : [
            {text: "shark", correct:"false"},
            {text:"elephant", correct:"true"},
            {text:"girrafe", correct:"false"},
            {text:"bear", correct:"false"},
        ]
    },
    {
        question : "Which is the largest desert in the world?",
        answer : [
            {text: "sahara desart", correct:"true"},
            {text:"arabian", correct:"false"},
            {text:"gobi desart", correct:"false"},
            {text:"thar desart", correct:"false"},
        ]
    },
    {
        question : "What is the longest river in the world?",
        answer : [
            {text: "ganga", correct:"false"},
            {text:"nile", correct:"true"},
            {text:"amazon", correct:"false"},
            {text:"ajay", correct:"false"},
        ]
    },
    {
        question : "Which country has the most time zones?",
        answer : [
            {text: "russia", correct:"false"},
            {text:"united states", correct:"false"},
            {text:"france", correct:"true"},
            {text:"india", correct:"false"},
        ]
    }
]

const mainquestion = document.querySelector(".question");
const btn = document.querySelectorAll(".ans-button .btn");
const totalbtn = document.querySelector(".ans-button");
const nextbtn = document.querySelector(".next-btn");
console.log(mainquestion);

let questioncountbtn = 0;
let winningcount = 0;

function results(){
    questioncountbtn = 0;
    winningcount = 0;
    nextbtn.innerHTML = "Next";
    showquestion();
}

function showquestion(){
    resetstate();
    let currquestion = questions[questioncountbtn];
    currcount = questioncountbtn + 1;
    
     mainquestion.innerHTML = currcount + "." + currquestion.question;
     currquestion.answer.forEach(ans => {
        let newbtn = document.createElement("button");
        newbtn.innerHTML = ans.text;
        totalbtn.appendChild(newbtn);
        newbtn.classList.add("btn");
        if(ans.correct){
            newbtn.dataset.correct = ans.correct;
        }
        newbtn.addEventListener("click", getanswer);
     });
}

function resetstate(){
    while(totalbtn.firstChild){
        totalbtn.firstChild.remove();
    }
}

function getanswer(e){
  const selectedbtn = e.target;
  const iscorrect = selectedbtn.dataset.correct === "true";
  if(iscorrect){
    selectedbtn.classList.add("corrects");
    winningcount++;
  } else{
    selectedbtn.classList.add("incorrect");

  }
  Array.from(totalbtn.children).forEach(button=>{
if(button.dataset.correct === "true"){
    button.classList.add("corrects");
} button.disabled = true;
  })
  nextbtn.style.display = "block";
}

function nextquestion(){
    questioncountbtn++;
    if(questioncountbtn < questions.length){
        showquestion();
    } else {
        showscore();
    }
}

function showscore(){
    mainquestion.innerHTML = `your score is ${winningcount}`;
    nextbtn.innerHTML = "play again";
    resetstate();
}

nextbtn.addEventListener("click", ()=>{
    if(questioncountbtn < questions.length){
        nextquestion();
    } else{
       results();
    }
})
results();