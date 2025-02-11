const messages = [
    "tem certeza?",
    "certeza absoluta??",
    "certeza mesmo?",
    "pufavooooo",
    "só pensa sobre!",
    "se tu disser não, eu vou ficar triste...",
    "eu vou ficar muito triste...",
    "eu vou ficar muito muito triste...",
    "ta bom, vou parar de insistir...",
    "só pensa nos benefícios amor 🥺"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}