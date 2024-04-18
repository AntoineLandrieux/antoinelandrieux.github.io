
const w = setInterval(() => {
    Write()
}, 500);

const element = document.getElementById("message");

const messages = [
    "This site is so cool !",
    "I love you",
    `Today is ${new Date().toDateString()}`,
    "Visit my github account now !",
    "WTF? How did you get here??",
    "I'm hungry.",
    `How much is ${Math.floor(Math.random() * 100)}*${Math.floor(Math.random() * 100)} ?`
];

let pos = 0;
let msg = Math.floor(Math.random() * (messages.length - 1));
let message = "Hello World!";

function NextMessage() {
    if ((msg + 1) >= messages.length)
        msg = -1;
    msg = msg + 1;
    return msg;
};

function Write() {

    if (element == null)
        return clearInterval(w);

    pos = (pos > message.length + 3) ? 0 : pos + 1;
    message = (pos == 0 ? messages[NextMessage()] : message);
    element.innerText = message.slice(0, pos);
}
