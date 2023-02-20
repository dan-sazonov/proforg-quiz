// Email.send({
//   SecureToken : "fa5cdb1d-dae7-4227-9afe-4568c372839c",
//   To : 'p-294803@yandex.ru',
//   From : "p.294803@gmail.com",
//   Subject : "This is the subject",
//   Body : "fuck"
// }).then(message => console.log(message));

let allQuestions = [
  {
    question: "q1",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c",
    type: "radio"
  },
  {
    question: "q2",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c",
    type: "radio"
  },
  {
    question: "q3",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d",
    type: "radio"
  },
  {
    question: "q4",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c",
    type: "radio"
  },
  {
    question: "q5",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c",
    type: "radio"
  },
  {
    question: "q6",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c",
    type: "radio"
  },
  {
    question: "q7",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c",
    type: "radio"
  },
  {
    question: "q8",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d",
    type: "radio"
  },
  {
    question: "q9",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c",
    type: "radio"
  },
  {
    question: "q10",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c",
    type: "radio"
  },
  {
    question: "q11",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c",
    type: "radio"
  },
  {
    question: "q12",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c",
    type: "radio"
  }
];
let answeredQuestions = [1, 5, 3, 2];
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const startSlide = document.getElementById("startSlide");
const quizSlide = document.getElementById("quizSlide");
const finishSlide = document.getElementById("finishSlide");

// дергаем 10 рандомных вопросов
let myQuestions = [];
for (let i = 0; (i < 10) && (i < allQuestions.length); i++) {
  let r = Math.floor(Math.random() * (allQuestions.length - i)) + i;
  let randQuestion = allQuestions[r];
  allQuestions[r] = allQuestions[i];
  allQuestions[i] = randQuestion;

  myQuestions.push(randQuestion);
}

// начинаем опрос
function startPolling() {
  startSlide.setAttribute("hidden", "");
  quizSlide.removeAttribute("hidden");
}

startBtn.addEventListener("click", startPolling, false);

// рендерим вопрос
function rendQuestion(q) {
  // пишем текст вопроса
  document.getElementById("ansText").innerHTML = q.question;

  // пишем количество ответов
  document.getElementById("ansSup").innerHTML = q.type === "checkbox" ? "Выбери все верные ответы" : "Выбери один верный ответ";

  // пишем сами вопросы
  let quizForm = "";
  let ansNum = 0;
  for (let key of Object.keys(q.answers)) {
    ansNum++;
    quizForm += `<li class="form-check">
        <input class="form-check-input" type="${q.type}" value="" id="${key}" name="ans">
        <label class="form-check-label" for="${key}">${q.answers[key]}</label>
    </li>`;
  }
  document.getElementById("ansForm").innerHTML = quizForm;
}

rendQuestion(allQuestions[0])
console.log(myQuestions);
