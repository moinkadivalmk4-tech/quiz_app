const questionEl =
document.getElementById("question");

const optionsEl =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

loadQuestion();

nextBtn.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

    }else{

        showResult();

    }

});