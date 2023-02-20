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

let myQuestions = [];
for (let i = 0 ; (i < 10) && (i < allQuestions.length) ; i++) {
  let r = Math.floor(Math.random() * (allQuestions.length - i)) + i;
  let randQuestion = allQuestions[r];
  allQuestions[r] = allQuestions[i];
  allQuestions[i] = randQuestion;

  myQuestions.push(randQuestion);
}

console.log(myQuestions)
