const quiz = [
  {
    q: "HAVE YOU PRACTICED SPORT OR ANY PHYSICAL ACTIVITY DURING THE LAST MONTH?",
    o: [
      "A  5 times or more per week",
      "B  1 or 2 times per week",
      "C  Less than 4 times per month",
      "D  I don’t practice sport during the month"
    ]
  },
  { q: "HOW MANY HOURS DO YOU SLEEP DAILY?", o: ["A <5", "B 5–6", "C 7–8", "D >8"] },
  { q: "DO YOU FOLLOW A HEALTHY DIET?", o: ["A Always", "B Often", "C Sometimes", "D Never"] },
  { q: "DO YOU EXERCISE REGULARLY?", o: ["A Yes", "B Sometimes", "C Rarely", "D Never"] },
  { q: "DO YOU DRINK ENOUGH WATER?", o: ["A Always", "B Often", "C Sometimes", "D Never"] },
  { q: "HOW OFTEN DO YOU FEEL STRESSED?", o: ["A Always", "B Often", "C Sometimes", "D Never"] },
  { q: "DO YOU SMOKE?", o: ["A Yes", "B Occasionally", "C Rarely", "D No"] },
  { q: "DO YOU CONSUME ALCOHOL?", o: ["A Frequently", "B Occasionally", "C Rarely", "D Never"] },
  { q: "DO YOU TAKE BREAKS WHILE WORKING?", o: ["A Always", "B Often", "C Sometimes", "D Never"] },
  { q: "DO YOU EAT FRUITS DAILY?", o: ["A Yes", "B Often", "C Sometimes", "D No"] },
  { q: "DO YOU WALK DAILY?", o: ["A Yes", "B Often", "C Sometimes", "D No"] },
  { q: "DO YOU MEDITATE?", o: ["A Yes", "B Often", "C Rarely", "D No"] },
  { q: "HOW WOULD YOU RATE YOUR HEALTH?", o: ["A Excellent", "B Good", "C Average", "D Poor"] }
];

let index = 0;

const qno = document.getElementById("qno");
const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");

function loadQuestion() {
  qno.textContent = index + 1;
  questionText.textContent = quiz[index].q;
  optionsDiv.innerHTML = "";

  quiz[index].o.forEach(text => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = text;
    btn.onclick = () => {
      document.querySelectorAll(".option").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  if (index < quiz.length - 1) {
    index++;
    loadQuestion();
  } else {
    alert("Quiz Completed");
  }
}

loadQuestion();
