const quizData = [{
        question: "nuclear forces are________",
        a: "Long range replusive forces",
        b: "Long range attractive forces",
        c: "short range attractive forces",
        d: "short range replusive forces",
        correct: "c",
    },
    {
        question: "A car travelling at 15 m/s overtake another car travelling at 10 m/s.Assuming each car is 4m long what is the time taken during the overtake?",
        a: "1.6s",
        b: "0.8s",
        c: "0.4s ",
        d: "0.6s ",
        correct: "a",
    },
    {
        question: "work done on heating one mole of monoatomic gas adiabatically through 20c is W.Then the work done on heeating 6 moles of rigid diatomic gas through the same change in temperature ",
        a: "9W",
        b: "10W",
        c: "12W",
        d: "8W",
        correct: "b",
    },
    {
        question: "when a bullet is fired from a riffle its momentum becomes20 kg m/s.If the velocity of the bullet is 1000 m/s,the velocity of the bullet is 1000 m/s,then what is its mass?",
        a: "30 g",
        b: "5 g",
        c: "10 g",
        d: "500 g",
        correct: "c",
    },
{
question:"when a body is acted upon by a resultant force,then the work done by the resultant force is equal to",
        a: "its initial kinetic energy",
        b: "its potential energy",
        c: "change in the kinetic energy",
        d: "change in the potential energy",
        correct: "c",
},
{
question:"choose the correct statement ",
        a: "acceleration due to gravity is increases with increasing altitude",
        b: "acceleration due to gravity is independent of mass of earth",
        c: "a geostationary satellite can have a time period less than 24 hours",
        d: "acceleration due to gravity decreases with increasing depth assuming earth to be a sphere of uniform density ",
        correct: "d",
},
{
question:"In CR circuit the growth of charge on the capacitor is  ",
        a: "more rapid if the CR is smaller",
        b: "more rapid if the CR is larger",
        c: "Independent of CR",
        d: "Independent of time",
        correct: "a",
},
{
question:"Alpha rays emitted from a radioactive substance are",
        a: "negative charged particles",
        b: "doubly ionized helium atoms",
        c: "ionized hydrogen nuclei",
        d: "uncharged particles",
        correct: "b",
},
{
question:"The ratio of maximum to minimum wavelength in Balmer series of an hydrogenic atom is ",
        a: "9/5",
        b: "12/7",
        c: "9/7",
        d: "14/9",
        correct: "a",
},
{
question:"A message signal of frequency 10KHZ and peak voltage of 15 volts is used to modulate a carrier frequency of 1 MHz and peak voltage of 30 volts.Determine the modulation index",
        a: "0.5",
        b: "0.6",
        c: "0.7",
        d: "0.8",
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