const quizData = [{
        question: "What is the % strength of 22.4 volume of H2O2 solution?",
        a: "3.4 %",
        b: "2.5 %",
        c: "5 %",
        d: "6.8 %",
        correct: "d",
    },
    {
        question: "Hard water contains ion of ",
        a: "Zinc",
        b: "Magnesium and Calcium",
        c: "Iron",
        d: "Iron and Manganese",
        correct: "b",
    },
    {
        question: "Which of the following elements reacts with water?",
        a: "C",
        b: "Ge",
        c: "Sn",
        d: "Pb",
        correct: "b",
    },
    {
        question: "which of the following ores does not contain iron?",
        a: "Hematite",
        b: "Magnetite",
        c: "Calamine",
        d: "Siderite",
        correct: "c",
    },

{
question:"Which among the following is an arsenic based antibiotic drug.For which paul Ehrlich was awarded Nobel prize in 1908 ",
        a: "Salvarsan",
        b: "Pencillin",
        c: "Prontosil",
        d: "Sulphapyridine",
        correct: "a",
},
{
question:"The dry ice is ___________  ",
        a: "Dry CO2 gas ",
        b: "Solid CO2 ",
        c: "Dry SO2 gas",
        d: "Solid NH3",
        correct: "b",
},
{
question:"Which among the following is used in detergents",
        a: "Sodium acetate",
        b: "Sodium stearate",
        c: "Calcium stearate",
        d: "Sodium lauryl sulphate",
        correct: "d",
},
{
question:"The main constituent of vinegar is __________ ",
        a: "Formic acid",
        b: "Oxalic acid",
        c: "Nitric acid ",
        d: "Acetic acid",
        correct: "d",
},
{
question:"Which of the following is not a semi-synthetic polymer?",
        a: "cis-poly isoprene",
        b: "Cellulose nitrate",
        c: "Cellulose acetate",
        d: "Vulcanized rubber",
        correct: "a",
},
{
question:"Biochemical Oxygen Demand(BOD) is a measure of organic materials present in water. BOD value less than 5 ppm indicates a water sample to be",
        a: "Rich in dissolved oxygen",
        b: "Poor in dissolved oxygen",
        c: "Highly polluted",
        d: "Not suitable for aquatic life",
        correct: "a",
},

];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);