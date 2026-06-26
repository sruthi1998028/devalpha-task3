const questions = [
    { q: "What does HTML stand for?", a: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"], correct: 0 },
    { q: "Which property is used to change the background color?", a: ["bgcolor", "color", "background-color"], correct: 2 },
    { q: "How do you select an element with id 'header'?", a: [".header", "#header", "header"], correct: 1 },
    { q: "Which JavaScript keyword declares a variable?", a: ["var", "let", "both var and let"], correct: 2 },
    { q: "Which tag is used to link a JS file?", a: ["<script>", "<js>", "<link>"], correct: 0 },
    { q: "What does CSS stand for?", a: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], correct: 1 },
    { q: "Which property controls text size?", a: ["font-size", "text-style", "text-size"], correct: 0 },
    { q: "How do you make a list in HTML?", a: ["<ul>", "<list>", "<ol>"], correct: 0 },
    { q: "What is the correct way to write an array?", a: ["(1,2,3)", "[1,2,3]", "{1,2,3}"], correct: 1 },
    { q: "Which event occurs when a user clicks an element?", a: ["onchange", "onmouseclick", "onclick"], correct: 2 }
];

let currentIdx = 0;
let score = 0;

function showQuestion() {
    const qData = questions[currentIdx];
    // Safety check: Ensure the element exists
    const questionEl = document.getElementById('question');
    const btnContainer = document.getElementById('answer-buttons');
    
    if (!questionEl || !btnContainer) return;

    questionEl.innerText = `${currentIdx + 1}. ${qData.q}`;
    btnContainer.innerHTML = '';
    
    qData.a.forEach((choice, i) => {
        const btn = document.createElement('button');
        btn.innerText = choice;
        btn.classList.add('answer-btn');
        btn.onclick = () => selectAnswer(i);
        btnContainer.appendChild(btn);
    });
}

function selectAnswer(i) {
    if(i === questions[currentIdx].correct) score++;
    currentIdx++;
    if(currentIdx < questions.length) {
        showQuestion();
    } else {
        const container = document.getElementById('quiz-container');
        container.innerHTML = `
            <h1>Quiz Complete!</h1>
            <p>Your Final Score: ${score} / ${questions.length}</p>
            <button onclick="location.reload()" class="answer-btn">Restart Quiz</button>
        `;
    }
}

// THIS IS THE KEY FIX: Wait for HTML to load first
document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});