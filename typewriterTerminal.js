let introductions = [
    "Kia Ora! Ko DK toku ingoa.",
    "Hello! I'm DK.",
    "Bonjour! Je m'appelle DK.",
    "你好！我叫DK",
    "Hallo! Mein Name ist DK.",
    "こんにちは！私の名前はDKです",
    "नमस्कार! मेरा नाम DK है।",
    "Привет! Меня зовут ДК.",
    "¡Hola! Mi nombre es DK.",
    "Merhaba! Benim adım DK."
];

let introI = 0;
let introC = 0;

let cursor = "&nbsp;";
function startTypewriterEffect() {
    // Blink cursor
    setInterval(() => {
        let element = document.getElementById("terminalText");
        let text = element.innerHTML;
        text = text.substr(0, text.length - cursor.length);
        cursor = (cursor === "_") ? "&nbsp;" : "_";
        element.innerHTML = text + cursor;
    }, 250);

    setTimeout(typeGreeting, 1250);
}

function typeGreeting() {
    let intro = introductions[introI];
    let element = document.getElementById("terminalText");
    let text = element.innerHTML;
    if (introC < intro.length) {
        text = text.slice(0, text.length - cursor.length) + intro.charAt(introC) + text.slice(text.length - cursor.length);
        introC++;
        element.innerHTML = text;
        setTimeout(typeGreeting, 100);
    } else {
        introC = 0;
        if (++introI == introductions.length) introI = 0;
        setTimeout(deleteGreeting, 1250);
    }
}

function deleteGreeting() {
    let element = document.getElementById("terminalText");
    let text = element.innerHTML;
    text = text.slice(0, text.length - cursor.length - 1) + text.slice(text.length - cursor.length);
    element.innerHTML = text;
    if (text === cursor) setTimeout(typeGreeting, 1250);
    else setTimeout(deleteGreeting, 50);
}
