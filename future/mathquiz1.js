const quizData = [{
        question: "let the greatest common divisor of m,n be 1.if 1/1.7+1/7.13+1/13.19+......upto 20 terms =m/n,then 5m+2n=",
        a: "325",
        b: "330",
        c: "342",
        d: "337",
        correct: "c",
    },
    {
        question: "The solution of d^2y/dx^2=0 represents?",
        a: "straight lines",
        b: "a circle",
        c: "a parabola",
        d: "a point",
        correct: "a",
    },
    {
        question: "If the equation x^3 +6x+20=0 hasa one imaginary root 1+3i,then its real root is",
        a: "2",
        b: "-2",
        c: "3",
        d: "-3",
        correct: "b",
    },
    {
        question: "1/1.4 + 1/4.7 + 1/7.10+ ----- to n terms= ",
        a: "1/5n-1",
        b: "1/n+4",
        c: "n/3n+1",
        d: "n/5n-1",
        correct: "c",
    },
 {
        question: "1^3 + 2^3+3^3 +.......+100^3=K^2 then k= ",
        a: "10100",
        b: "5000",
        c: "5050",
        d: "1010",
        correct: "c",
    },
{
        question: "If the polarb of a point P with respect to a circle of radicus r which touches the coordinate axes and lies in the first quadrant is x+2y=4r,then the point P is  ",
        a: "(r,2r)",
        b: "(2r,r)",
        c: "(2r,3r)",
        d: "(-r,4r)",
        correct: "c",
    },
{
        question: "If the points A(-1,0,7), B(3,2,t),C(5,k,-2) are collinear,then the ratio in which the point P(t,k-2t,t+k) divides the line segment BC is ",
        a: "-2:3",
        b: "-1:2",
        c: "4:3",
        d: "1:1",
        correct: "b",
    },
{
        question: "If the general solution of the differential equation (y - x + 1)dy - (y + x + 2) dx = 0 is f(x,y,c) = 0,then the value of c such that f(1,1,c)=0 is ",
        a: "4",
        b: "-4",
        c: "2",
        d: "1",
        correct: "b",
    },
{
        question: "A polygon has 54 diagonals.The number of sides of this polygon is ",
        a: "12",
        b: "15",
        c: "16",
        d: "9",
        correct: "a",
    },
{
        question: "A homogeneous equation of second degree in x and y represents which of the following ? ",
        a: "Two",
        b: "A pair of straight lines through the orgin  ",
        c: "only one line through origin",
        d: "A circle whose centre isn't the origin",
        correct: "b",
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