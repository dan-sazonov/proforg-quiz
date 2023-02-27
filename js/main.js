let allQuestions = [
  {
    question: "С какого дня назначается ГАС?",
    answers: {
      a: "Через 2 недели после сдачи промежуточной аттестации",
      b: "С подачи заявления на ГАС",
      c: "С момента поступления в университет",
      d: "С первого дня месяца, следующего за промежуточной аттестацией"
    },
    correctAnswer: ["d"],
    type: "text"
  },
  {
    question: "Перечислите виды стипендий",
    answers: {
      a: "Именные",
      b: "Стипендии слушателям подготовительных отделений",
      c: "Стипендия ректора",
      d: "Стипендия Санкт-Петербурга"
    },
    correctAnswer: ["a", "b"],
    type: "text"
  },
  {
    question: "Норматив ГАС для студентов ВО",
    answers: {
      a: "1663",
      b: "1190",
      c: "1484",
      d: "1488"
    },
    correctAnswer: ["c"],
    type: "text"
  },
  {
    question: "Выплачивается ли ГАС иностранным студентам в случае получения неудовлетворительной оценки?",
    answers: {
      a: "Да",
      b: "Нет"
    },
    correctAnswer: ["a"],
    type: "text"
  },
  {
    question: "Выплачивается ли академическая стипендия во время академического отпуска?",
    answers: {
      a: "Да",
      b: "Нет"
    },
    correctAnswer: ["b"],
    type: "text"
  },
  {
    question: "Численность студентов, получающих ПГАС, не может превышать…",
    answers: {
      a: "10% получающих ГАС",
      b: "10% от всего стипендиального фонда",
      c: "13% получающих ПГАС по другим направлениям",
      d: "20% получающих ПГАС по другим направлениям"
    },
    correctAnswer: ["a"],
    type: "text"
  },
  {
    question: "Может ли студент получать ПГСС в первом семестре?",
    answers: {
      a: "Да",
      b: "Нет"
    },
    correctAnswer: ["b"],
    type: "text"
  },
  {
    question: "Может ли студент 20-ти лет, учащийся на втором курсе, получать ПГСС?",
    answers: {
      a: "Да",
      b: "Нет"
    },
    correctAnswer: ["a"],
    type: "text"
  },
  {
    question: "Ограничение размера повышенной социальной стипендии",
    answers: {
      a: "Нет ограничений",
      b: "1484",
      c: "Величина МРОТ",
      d: "20000"
    },
    correctAnswer: ["a"],
    type: "text"
  },
  {
    question: "Может ли студент получать ГСС при закрытии ОДНОГО предмета на оценку «удовлетворительно»?",
    answers: {
      a: "Да",
      b: "Нет"
    },
    correctAnswer: ["a"],
    type: "text"
  },
  {
    question: "На какой промежуток времени назначается ГСС?",
    answers: {
      a: "На 12 месяцев со дня получения справки",
      b: "На 6 месяцев со дня получения справки",
      c: "На последующий учебный год",
      d: "На последующий календарный год"
    },
    correctAnswer: ["a"],
    type: "text"
  },
  {
    question: "Сколько видов стипендий закреплено в ФЗ-273 «Об образовании в РФ»",
    answers: {
      a: "4",
      b: "7",
      c: "12",
      d: "3"
    },
    correctAnswer: ["b"],
    type: "text"
  },
  {
    question: "Номер приказа, определяющий порядок назначения и выплаты стипендии студентам РФ",
    answers: {
      a: "455",
      b: "36",
      c: "39",
      d: "1663"
    },
    correctAnswer: ["d"],
    type: "text"
  },
  {
    question: "Профсоюз имеет право удерживать членские взносы со всех видов стипендии",
    answers: {
      a: "Да",
      b: "Нет"
    },
    correctAnswer: ["a"],
    type: "text"
  },
  {
    question: "Студенты, проживающие в общежитии и получающие ГСС, освобождены от платы за наем помещения",
    answers: {
      a: "Да",
      b: "Нет"
    },
    correctAnswer: ["a"],
    type: "text"
  },
  {
    question: "Что должен предоставить студент, чтобы претендовать на получение социальной стипендии?",
    answers: {
      a: "Справку из МФЦ",
      b: "Справка об инвалидности",
      c: "Справка из органов соцзащиты населения",
      d: "Чек из стоматологии"
    },
    correctAnswer: ["a", "c"],
    type: "text"
  },
  {
    question: "Может ли студент контрактной формы обучения получать стипендию?",
    answers: {
      a: "Да",
      b: "Нет"
    },
    correctAnswer: ["a"],
    type: "text"
  },
  {
    question: "Номер статьи ФЗ «Об образовании в РФ», посвященный стипендиям и другим денежным выплатам",
    answers: {
      a: "36",
      b: "1488",
      c: "11",
      d: "39"
    },
    correctAnswer: ["a"],
    type: "text"
  }
];

let answeredQuestions = 0;
let usrScore = 0;
let usrAnswersInput = []

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
  rendQuestion(0);
}

// рендерим вопрос
function rendQuestion(n) {
  let q = allQuestions[n]
  // пишем текст вопроса
  document.getElementById("ansText").innerHTML = q.question;

  // пишем количество ответов
  if (q.type === "checkbox") document.getElementById("ansSup").innerHTML = "Выбери все верные ответы"
  if (q.type === "radio") document.getElementById("ansSup").innerHTML = "Выбери один верный ответ"
  if (q.type === "text") document.getElementById("ansSup").innerHTML = "Введи текст своего ответа"
  // document.getElementById("ansSup").innerHTML = q.type === "checkbox" ? "Выбери все верные ответы" : ("radio" ? "Выбери один верный ответ" : "Введи текст своего ответа");

  // пишем сами вопросы
  let quizForm = `<input class="form-check" type="text" id="usrTxtAns" name="ans">`;
  let ansNum = 0;
  // for (let key of Object.keys(q.answers)) {
  //   ansNum++;
  // quizForm += `<li class="form-check">
  //     <input class="form-check-input" type="${q.type}" value="" id="${key}" name="ans">
  //     <label class="form-check-label" for="${key}">${q.answers[key]}</label>
  // </li>`;
  // }
  document.getElementById("ansForm").innerHTML = quizForm;
  document.getElementById(`it${n + 1}`).classList.add("active");
}

// проверяем ответ
function checkAns() {
  // let usrAns = [];
  // document.querySelectorAll('input[name=ans]:checked').forEach(element => usrAns.push(element.id));
  //
  // let isSame = (usrAns.length === allQuestions[answeredQuestions].correctAnswer.length) && usrAns.every(function (element, index) {
  //   return element === allQuestions[answeredQuestions].correctAnswer[index];
  // });

  // if (isSame) {
  //   usrScore++
  // }

  usrAnswersInput.push(`${allQuestions[answeredQuestions].question} - ${document.forms.ansForm.elements.usrTxtAns.value}`)
  nextQuestions();
}

function nextQuestions() {
  if (answeredQuestions === 14) {
    showResults();
  } else {
    answeredQuestions++;
    rendQuestion(answeredQuestions);
  }
}

function showResults() {
  const curMin = document.getElementById("minutes").innerHTML;
  const curSec = document.getElementById("seconds").innerHTML;

  quizSlide.setAttribute("hidden", "");
  finishSlide.removeAttribute("hidden");

  document.getElementById("minRez").innerHTML = 5 - curMin;
  document.getElementById("secRez").innerHTML = 60 - curSec;

  if (timeFuckedup) {
    usrScore = 0
  }

  document.getElementById("quizRez").innerHTML = usrScore;

  let label = '';
  if (usrScore === 1) {
    label = "балл"
  } else if (usrScore >= 2 && usrScore <= 4) {
    label = "балла"
  } else {
    label = "баллов"
  }
  document.getElementById("quizRezLbl").innerHTML = label;
}

function sendResults() {
  let form = document.forms.usr_data;
  let textObj = {
    name: form.elements.student_name.value,
    group: form.elements.student_group.value,
    score: usrScore * 0.4,
    dontFuckedup: !timeFuckedup
  };

  let tg = {
    token: "6112219593:AAGrm2Rw9P142oEDuPzq09nOiLAVBIt4x8A", // охуенно плохая идея, знаю
    chat_id: "385056286"
  }


  console.log(usrAnswersInput)
  let text = `{"name": "${textObj.name}", "stGroup": "${textObj.group}", "loseTime": "${textObj.dontFuckedup}", "answers": [`
  usrAnswersInput.forEach(element => text += `"${element}",`);
  text += `]}`
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`;
  const xht = new XMLHttpRequest();
  xht.open("GET", url);
  xht.send();

  alert("Ответ записан, спасибо)")
}

nextBtn.addEventListener("click", checkAns, false);
startBtn.addEventListener("click", startPolling, false);
finishBtn.addEventListener("click", sendResults, false);
