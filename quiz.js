const question = {
    "Как тебя зовут?": ["Маким", "Алена", "Олег", "Алена"],
    "Сколько тебе лет?": ["7", "30", "18", "18"],
    "Где учишься?": ["Школа", "Детский сад", "Колледж", "Колледж"],
    "Когда мы познакомились?": ["Март 17", "Февраль 27", "Январь 7", "Февраль 27"],
    "Как меня зовут?": ["Андрей", "Влад", "Сережа", "Сережа"],
    "Сколько мне лет?": ["17", "14", "16", "16"],
    "В каком классе я учусь?": ["9", "10", "11", "11"],
    "В какой город хочу уехать?": ["Санкт-Петербург", "Волгоград", "Ростов-на-Дону", "Санкт-Петербург"],
    "Какой предмет не буду сдавать?": ["Информатика", "Обществознание", "Проф. матан", "Обществознание"],
    "Ты красотка?":["Да", "Да", "Да", "Да",],
};

const text_quiz = document.querySelector(".text-quiz");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const quiz = document.querySelector(".quiz")
const text_exit = document.querySelector(".text-exit")

var i = 0;
var vereble = "";

function showQuestion() {
    if (i < Object.keys(question).length) {
        text_quiz.innerHTML = Object.keys(question)[i];
        question1.innerHTML = question[Object.keys(question)[i]][0];
        question2.innerHTML = question[Object.keys(question)[i]][1];
        question3.innerHTML = question[Object.keys(question)[i]][2];
    } else {
        text_exit.classList.remove("opas-zero")
    }
}

function right(vereble) {
    const correctAnswer = question[Object.keys(question)[i]][3];

    if (vereble === correctAnswer) {
        i += 1;
        quiz.classList.add("green-color")
        setTimeout(() => {
            quiz.classList.remove("green-color")
        }, 1000);
    } else {
        i = 0;
        quiz.classList.add("red-color")
        setTimeout(() => {
            quiz.classList.remove("red-color")
        }, 1000);
    }

    setTimeout(() => {
        showQuestion(); // Показать следующий вопрос или сообщение о завершении
    }, 2000);
}

showQuestion(); 

question1.addEventListener('click', function() {
    vereble = question[Object.keys(question)[i]][0];
    right(vereble);
});
question2.addEventListener('click', function() {
    vereble = question[Object.keys(question)[i]][1];
    right(vereble);
});
question3.addEventListener('click', function() {
    vereble = question[Object.keys(question)[i]][2];
    right(vereble);
});