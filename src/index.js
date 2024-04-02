const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("btn");

const searchFunction = (event) => {
  event.preventDefault();
  let inpWord = document.getElementById("inp-word").value;
  console.log("input word:", inpWord);
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
       <div class="word">
          <h3>${inpWord}</h3>
          <button onclick="playSound()">
          <i class="fa-solid fa-volume-high"></i>
        </div>
        <div class="wordDetails">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          
        </div>
        <div class="wordMeaning">
          <p>
            ${data[0].meanings[0].definitions[0].definition}
          </p>
          <p class="wordExample">
            ${data[0].meanings[0].definitions[0]?.example && ""}
          </p>
    `;
      // sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
};

btn.addEventListener("click", searchFunction);

function playSound() {
  sound.play();
}
// create function for inputing word
// create event listener for btn
// update text to feature the correct word
