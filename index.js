// Code your solutions in this file
const namesArray = ["Guadalupe", "Ollie", "Aki"];

function writeCards(namesArray, event) {
  const thankYouMessages = [];
  for (let i = 0; i < namesArray.length; i++) {
    thankYouMessages.push(
      `Thank you, ${namesArray[i]}, for the wonderful surprise gift!`
    );
  }
  return thankYouMessages;
}

function countDown(number) {
  let i = number;
  while (i >= 0) {
    console.log(i);
    i--;
  }
  return number;
}
countDown(10);