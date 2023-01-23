function getSpecies() {
  let species = prompt("What is your species?");
  //console.log("The species is: " + species);
  document.write("The species is: " + species);
};

function getNutriment() {
  let nutriment = prompt("What is your nutriment?");
  console.log("Your nutriment is " + nutriment);
  document.write("Your nutriment is " + nutriment);
}

let ans1, ans2, ans3, ans4;

function askQuestion(question) {
  let answer = prompt(question + "?");
  //console.log(question);
  console.log(question + ": " + answer);
  document.write(question + ": " + answer);
  return answer;
};