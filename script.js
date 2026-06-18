const questions = [
    {
        question:"Which keyword declares a variable in JavaScript?",
        options:["var","float","string","define"],
        answer:"var"
    },
    {
        question:"Which HTML tag creates a hyperlink?",
        options:["link","a","url","href"],
        answer:"a"
    },
    {
        question:"Which method stores data in localStorage?",
        options:["localStorage.setItem()","storeData()","save()","insert()"],
        answer:"localStorage.setItem()"
    },
    {
        question:"Which symbol is used for comments in JavaScript?",
        options:["//","##","<!--","**"],
        answer:"//"
    },
    {
        question:"Which CSS property changes text color?",
        options:["font-color","text-color","color","background"],
        answer:"color"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){

    const q = questions[currentQuestion];

    questionEl.textContent = q.question;

    optionsEl.innerHTML = "";

    q.options.forEach(option => {

        const button = document.createElement("button");

        button.classList.add("option");

        button.textContent = option;

        button.addEventListener("click",()=>{

            const allOptions =
                document.querySelectorAll(".option");

            allOptions.forEach(btn=>{
                btn.disabled = true;
            });

            if(option === q.answer){
                button.style.backgroundColor = "lightgreen";
                score++;
            }else{
                button.style.backgroundColor = "salmon";
            }

        });

        optionsEl.appendChild(button);

    });

}

loadQuestion();
nextBtn.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

    }else{

        showResult();

    }

});
function showResult(){

    const percentage =
        ((score / questions.length) * 100)
        .toFixed(0);

    document.querySelector(".quiz-box").innerHTML = `
        <h2>Quiz Completed</h2>
        <h3>Score: ${score}/${questions.length}</h3>
        <h3>${percentage}%</h3>
        <button onclick="location.reload()">
            Restart Quiz
        </button>
    `;

}