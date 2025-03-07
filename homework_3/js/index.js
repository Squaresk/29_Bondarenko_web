// Массив с загадками
const words = ["javascript", "programming", "function", "variable", "array"];
let chosenWord;
let attempts;
let guessedLetters;

function startGame() {
    // Выбор случайного слова
    chosenWord = words[Math.floor(Math.random() * words.length)];
    attempts = 6; // Количество попыток
    guessedLetters = []; // Угаданные буквы

    alert("перед тем, как ознакомиться с блогом\nпредлагаю сыграть в виселицу");
    
    while (attempts > 0) {
        let currentWordState = getCurrentWordState();
        let guess = prompt(`Слово: ${currentWordState}\nУ вас осталось попыток: ${attempts}\nВведите букву (или 'отмена' для выхода):`);

        // Проверка на нажатие кнопки 'отмена'
        if (guess === null) {
            alert("игра завершена. Спасибо за участие!");
            break;
        }

        // Обработка ввода
        if (guess.length !== 1 || !/^[a-zA-Z]$/.test(guess)) {
            alert("Пожалуйста, введите одну букву.");
            continue;
        }

        guess = guess.toLowerCase(); // Приводим к нижнему регистру

        if (guessedLetters.includes(guess)) {
            alert("Вы уже угадывали эту букву!");
            continue;
        }

        guessedLetters.push(guess); // Добавление буквы в угаданные
        if (!chosenWord.includes(guess)) {
            attempts--; // Уменьшаем количество попыток, если буква не угадана
            alert("нот коррект");
        } else {
            alert("коррект");
        }

        // Проверка на выигрыш
        if (isWordGuessed()) {
            alert(`гц вы угадали слово: ${chosenWord}`);
            break;
        }
    }

    if (attempts === 0) {
        alert(`гг((( слово: ${chosenWord}`);
    }

    // Запрос на возможность начать игру заново
    if (confirm("если увлеклись, можно повторить")) {
        startGame();
    } else {
        alert("можете переходить к самому сайту");
    }
}

// Функция для получения текущего состояния загаданного слова
function getCurrentWordState() {
    return chosenWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(" ");
}

// Функция для проверки, угадано ли слово
function isWordGuessed() {
    return chosenWord.split('').every(letter => guessedLetters.includes(letter));
}

// Запуск игры
startGame();
