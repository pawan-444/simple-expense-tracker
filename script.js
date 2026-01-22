let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
  const desc = document.getElementById("desc").value;
  const amount = Number(document.getElementById("amount").value);

  if (!desc || amount <= 0) return;

  expenses.push({ desc, amount });
  localStorage.setItem("expenses", JSON.stringify(expenses));

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";

  render();
}

function render() {
  const list = document.getElementById("list");
  const total = document.getElementById("total");

  list.innerHTML = "";
  let sum = 0;

  expenses.forEach(e => {
    sum += e.amount;
    const li = document.createElement("li");
    li.innerHTML = `${e.desc} <span>₹${e.amount}</span>`;
    list.appendChild(li);
  });

  total.innerText = sum;
}

render();
