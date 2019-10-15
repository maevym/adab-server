const transcript = document.getElementById("transcript");
const startTalk = document.getElementById("start-talking");
let huamamamamamama = true;

function recognize() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    if (huamamamamamama) {
        startTalk.innerText = 'Stop Talking';
        recognition.lang = 'id-ID';
        recognition.interimResults = false;
        recognition.onresult = function (event) {
            console.log('You said: ', event.results[0][0].transcript);
            transcript.innerHTML += (event.results[0][0].transcript);
        };
        recognition.onerror = function (evt) {
            console.log(evt);
        };
        recognition.onend = function () {
            recognition.stop();
            recognition.start();
        };
        recognition.start();
    } else {
        startTalk.innerText = 'Stop Talking';
        recognition.stop();
    }
}