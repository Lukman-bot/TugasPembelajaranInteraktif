function startQuiz(topic) {
    window.location.href = `kuis/kuis.html?topic=${topic}`;
}

const quizzes = {
    html: [
        { 
            question: "Apa itu HTML?", 
            options: [
                "Hypertext Markup Language", 
                "Hyperlink Text Markup Language", 
                "Hyperlinking Text Marking Language", 
                "Hypertext Marking Language"
            ], 
            answer: "Hypertext Markup Language" 
        },
        { 
            question: "Elemen apa yang digunakan untuk membuat paragraf?", 
            options: [
                "&lt;p&gt;", 
                "&lt;h1&gt;", 
                "&lt;br&gt;", 
                "&lt;div&gt;"
            ], 
            answer: "&lt;p&gt;" 
        },
        { 
            question: "Tag HTML untuk membuat tautan adalah?", 
            options: [
                "&lt;a&gt;", 
                "&lt;link&gt;", 
                "&lt;href&gt;", 
                "&lt;url&gt;"
            ], 
            answer: "&lt;a&gt;" 
        },
        { 
            question: "Elemen apa yang digunakan untuk menampilkan gambar?", 
            options: [
                "&lt;img&gt;", 
                "&lt;image&gt;", 
                "&lt;picture&gt;", 
                "&lt;src&gt;"
            ], 
            answer: "&lt;img&gt;" 
        },
        { 
            question: "Tag HTML mana yang digunakan untuk membuat daftar tak berurutan?", 
            options: [
                "&lt;ul&gt;", 
                "&lt;ol&gt;", 
                "&lt;li&gt;", 
                "&lt;list&gt;"
            ], 
            answer: "&lt;ul&gt;" 
        },
        { 
            question: "Bagaimana cara membuat tabel?", 
            options: [
                "&lt;table&gt;", 
                "&lt;tab&gt;", 
                "&lt;tabel&gt;", 
                "&lt;list&gt;"
            ], 
            answer: "&lt;table&gt;" 
        },
        { 
            question: "Elemen mana yang digunakan untuk membuat heading level 1?", 
            options: [
                "&lt;h1&gt;", 
                "&lt;header&gt;", 
                "&lt;head1&gt;", 
                "&lt;heading&gt;"
            ], 
            answer: "&lt;h1&gt;" 
        },
        { 
            question: "Apa fungsi dari &lt;br&gt;?", 
            options: [
                "Memasukkan baris baru", 
                "Membuat teks tebal", 
                "Membuat teks miring", 
                "Menyisipkan gambar"
            ], 
            answer: "Memasukkan baris baru" 
        },
        { 
            question: "Bagaimana cara menambahkan komentar di HTML?",
             options: [
                "&lt;!-- Komentar --&gt;", 
                "// Komentar", 
                "/* Komentar */", 
                "&lt;comment&gt; Komentar &lt;/comment&gt;"
            ], 
            answer: "&lt;!-- Komentar --&gt;" 
        },
        { 
            question: "Apa arti atribut href pada tag &lt;a&gt;?", 
            options: [
                "Hypertext Reference", 
                "Hyperlink Reference", 
                "Hypertext Resource", 
                "Hyperlink Resource"
            ], 
            answer: "Hypertext Reference" 
        }
    ],
    css: [
        { 
            question: "Apa itu CSS?", 
            options: [
                "Cascading Style Sheets", 
                "Colorful Style Sheets", 
                "Computer Style Sheets", 
                "Creative Style Sheets"
            ], 
            answer: "Cascading Style Sheets" 
        },
        { 
            question: "Bagaimana cara menambahkan CSS eksternal ke dokumen HTML?", 
            options: [
                "&lt;link rel='stylesheet' href='style.css'&gt;", 
                "&lt;style src='style.css'&gt;", 
                "&lt;css src='style.css'&gt;", 
                "&lt;stylesheet&gt;style.css&lt;/stylesheet&gt;"
            ], 
            answer: "&lt;link rel='stylesheet' href='style.css'&gt;" 
        },
        { 
            question: "Properti CSS apa yang digunakan untuk mengubah warna teks?", 
            options: [
                "color", 
                "font-color", 
                "text-color", 
                "text-style"
            ], 
            answer: "color" 
        },
        { 
            question: "Bagaimana cara membuat teks tebal dengan CSS?", 
            options: [
                "font-weight: bold;", 
                "font-style: bold;", 
                "font-size: bold;", 
                "text-style: bold;"
            ], 
            answer: "font-weight: bold;" 
        },
        { 
            question: "Properti CSS apa yang digunakan untuk mengubah ukuran font?", 
            options: [
                "font-size", 
                "text-size", 
                "font-style", 
                "text-style"
            ], 
            answer: "font-size" 
        },
        { 
            question: "Bagaimana cara mengatur background color di CSS?", 
            options: [
                "background-color: blue;", 
                "bg-color: blue;", 
                "color-background: blue;", 
                "background: blue;"
            ], 
            answer: "background-color: blue;" 
        },
        { 
            question: "Properti CSS apa yang digunakan untuk membuat garis batas di sekitar elemen?", 
            options: [
                "border", 
                "outline", 
                "margin", 
                "padding"
            ], 
            answer: "border" 
        },
        { 
            question: "Bagaimana cara mengatur margin di CSS?", 
            options: [
                "margin: 10px;", 
                "padding: 10px;", 
                "border: 10px;", 
                "spacing: 10px;"
            ], 
            answer: "margin: 10px;" 
        },
        { 
            question: "Bagaimana cara menambahkan komentar di CSS?", 
            options: [
                "/* Komentar */", 
                "// Komentar", 
                "&lt;!-- Komentar --&gt;", 
                "' Komentar"
            ], 
            answer: "/* Komentar */" 
        },
        { 
            question: "Properti CSS apa yang digunakan untuk mengatur jarak dalam elemen?", 
            options: [
                "padding", 
                "margin", 
                "border", 
                "spacing"
            ], 
            answer: "padding" 
        }
    ],
    js: [
        { 
            question: "Apa itu JavaScript?", 
            options: [
                "Bahasa pemrograman untuk web", 
                "Bahasa markup", 
                "Bahasa styling", 
                "Bahasa database"
            ], 
            answer: "Bahasa pemrograman untuk web" 
        },
        { 
            question: "Bagaimana cara membuat fungsi di JavaScript?", 
            options: [
                "function myFunction() {}", 
                "def myFunction() {}", 
                "create function myFunction() {}", 
                "new Function() {}"
            ], 
            answer: "function myFunction() {}" 
        },
        { 
            question: "Bagaimana cara menulis komentar di JavaScript?", 
            options: [
                "// Komentar", 
                "&lt;!-- Komentar --&gt;", 
                "/* Komentar */", 
                "' Komentar"
            ], 
            answer: "// Komentar" 
        },
        { 
            question: "Apa itu variabel dalam JavaScript?", 
            options: [
                "Penyimpanan data", 
                "Fungsi", 
                "Komentar", 
                "Operator"
            ], 
            answer: "Penyimpanan data" 
        },
        { 
            question: "Bagaimana cara mendeklarasikan variabel di JavaScript?", 
            options: [
                "var x;", 
                "variable x;", 
                "let x;", 
                "int x;"
            ], 
            answer: "var x;" 
        },
        { 
            question: "Fungsi JavaScript apa yang digunakan untuk mengubah konten HTML?", 
            options: [
                "document.getElementById(id).innerHTML", 
                "document.innerHTML(id)", 
                "getElementById.innerHTML", 
                "getElementById(id).value"
            ], 
            answer: "document.getElementById(id).innerHTML" 
        },
        { 
            question: "Bagaimana cara memanggil fungsi 'myFunction'?", 
            options: [
                "myFunction()", 
                "call myFunction", 
                "myFunction.call()", 
                "call function myFunction()"
            ], 
            answer: "myFunction()" 
        },
        { 
            question: "Apa arti dari '=== ' di JavaScript?", 
            options: [
                "Perbandingan tipe dan nilai", 
                "Perbandingan hanya nilai", 
                "Perbandingan hanya tipe", 
                "Operator penugasan"
            ], 
            answer: "Perbandingan tipe dan nilai" 
        },
        { 
            question: "Fungsi mana yang digunakan untuk menampilkan pesan pada dialog?", 
            options: [
                "alert()", 
                "message()", 
                "msg()", 
                "notify()"
            ], 
            answer: "alert()" 
        },
        { 
            question: "Bagaimana cara menambahkan elemen ke akhir array?", 
            options: [
                "array.push(element)", 
                "array.add(element)", 
                "array.append(element)", 
                "array.insert(element)"
            ], 
            answer: "array.push(element)" 
        }
    ]
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getQuiz() {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic');
    const quiz = quizzes[topic];
    const quizContainer = document.getElementById('quiz');
    const quizTitle = document.getElementById('quiz-title');

    if (quiz) {
        quizTitle.innerText = `Kuis ${topic.toUpperCase()}`;
        quiz.forEach((q, index) => {
            const optionsCopy = [...q.options];
            shuffle(optionsCopy);
            const questionElem = document.createElement('div');
            questionElem.classList.add('question');
            questionElem.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <div class="options">
                    ${optionsCopy.map((option, i) => `
                        <label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            `;
            quizContainer.appendChild(questionElem);
        });
    }
}

function submitQuiz() {
    const submitButton = document.getElementById('submit');
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sedang Memproses Nilai...';

    setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        const topic = params.get('topic');
        const quiz = quizzes[topic];
        let score = 0;
        const maxScore = 100;

        quiz.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            const decodedAnswer = decodeHTML(q.answer);
            if (selectedOption && selectedOption.value === decodedAnswer) {
                score++;
            }
        });

        const percentageScore = (score / quiz.length) * maxScore;

        const roundedScore = Math.round(percentageScore);

        const result = document.getElementById('result');
        result.innerText = `Nilai Anda: ${roundedScore} dari ${maxScore}`;

        result.classList.add('birthday-animation');

        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Submit';
        }, 3000);
    }, 3000);
}

// Fungsi untuk mendekode HTML entities
function decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

// Load quiz questions when quiz.html is loaded
if (window.location.pathname.endsWith('kuis/kuis.html')) {
    window.onload = getQuiz;
}
