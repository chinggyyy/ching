const messages = [
    "Sure ka?",
    "Sure jud??",
    "Sure najud na?",
    "Basig mag change pa...",
    "Weee???!",
    "Pag no gihapon ma sad jud ko do awa...",
    "Wala na sad nako...",
    "sad najud kaayo ko...",
    "Okay. Nangluod nako...",
    "Last najud dili jud??!💙 "
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
    window.location.href = "page1.html";
}