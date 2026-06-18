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
        options:[
            "localStorage.setItem()",
            "storeData()",
            "save()",
            "insert()"
        ],
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

const questionEl =
document.getElementById("question");

const optionsEl =
document.getElementById("options");

function loadQuestion(){

    const q = questions[currentQuestion];

    questionEl.textContent =
    q.question;

    optionsEl.innerHTML = "";

    q.options.forEach(option => {

        const button =
        document.createElement("button");

        button.classList.add("option");

        button.textContent = option;

        optionsEl.appendChild(button);

    });

}

loadQuestion();