let inputString = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      inputString = eval(inputString);
      document.querySelector('.display').value = inputString;
    } else if (e.target.innerHTML === 'C') {
      inputString = "";
      document.querySelector('.display').value = inputString;
    } else {
      inputString += e.target.innerHTML;
      document.querySelector('.display').value = inputString;
    }
  });
});
