const transcript = document.getElementById("transcript");
const startBicara = document.getElementById("transcript");
let nenglanghunjukbanghu = true;
let recognition;

function recognize() {
    if (nenglanghunjukbanghu) {
        startBicara.innerText = 'Stop Talking';
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
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
        startBicara.innerText = 'Start Talking';
        recognition.stop();
    }
}