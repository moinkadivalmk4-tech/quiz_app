let currentQuestion = 0;
let score = 0;

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