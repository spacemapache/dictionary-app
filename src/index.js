let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("btn");

// create function for inputing word
// create event listener for btn
// update text to feature the correct word

let btn = document.querySelector("btn");
btn.addEventListener("click", searchWord);

function searchWord(event) {
  event.preventDefault();
}
