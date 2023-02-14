const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generateBtn = document.getElementById("generate-btn");
const pwOne = document.getElementById("pw-1");
const pwTwo = document.getElementById("pw-2");

function randomNumber() {
  return Math.floor(Math.random() * characters.length);
}

function getPassword() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    const randomCharacter = characters[randomNumber()];
    password += randomCharacter;
  }
  return password;
}

function renderPassword() {
  pwOne.textContent = getPassword();
  pwTwo.textContent = getPassword();
  pwOne.classList.add("border");
  pwTwo.classList.add("border");
}

generateBtn.addEventListener("click", function () {
  renderPassword();
});
