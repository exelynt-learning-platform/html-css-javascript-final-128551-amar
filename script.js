// Chai Stall Bill Counter
const billDisplay = document.querySelector("#bill");
const billBox = document.querySelector("#bill-box");
const chaiButton = document.querySelector("#chai-btn");
const samosaButton = document.querySelector("#samosa-btn");
const vadaPavButton = document.querySelector("#vadapav-btn");
const resetButton = document.querySelector("#reset-btn");

const BIG_ORDER_LIMIT = 200;
let bill = 0;

function updateBill() {
  billDisplay.textContent = bill;

  if (bill >= BIG_ORDER_LIMIT) {
    billBox.classList.add("big-order");
  } else {
    billBox.classList.remove("big-order");
  }
}

function addToBill(amount) {
  bill = bill + amount;
  updateBill();
}

chaiButton.addEventListener("click", function () {
  addToBill(15);
});

samosaButton.addEventListener("click", function () {
  addToBill(20);
});

vadaPavButton.addEventListener("click", function () {
  addToBill(25);
});

resetButton.addEventListener("click", function () {
  bill = 0;
  billBox.classList.remove("big-order");
  updateBill();
});
