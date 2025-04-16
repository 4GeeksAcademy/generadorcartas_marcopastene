window.onload = () => {
  let palos = ['♥', '♦', '♠', '♣'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let palo = palos[Math.floor(Math.random() * palos.length)];
  let number = numbers[Math.floor(Math.random() * numbers.length)];

  let color = (palo === '♥' || palo === '♦') ? 'red' : 'black';

  document.getElementById("palo-alto").textContent = palo;
  document.getElementById("palo-bajo").textContent = palo;
  document.getElementById("number").textContent = number;

  document.getElementById("palo-alto").style.color = color;
  document.getElementById("palo-bajo").style.color = color;
  document.getElementById("number").style.color = color;
};
