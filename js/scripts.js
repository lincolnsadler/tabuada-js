const multiplicationForm = document.querySelector("#tabuada-form");
const number = document.querySelector("#numero");
const limit = document.querySelector("#limite");
const multiplicationTable = document.querySelector("#resultado");

const createTable = (number, multiplicator) => {
    multiplicationTable.innerHTML = "";

    const title = document.createElement("h3");
    title.textContent = `Tabuada do número ${number} até ${multiplicator}`;
    multiplicationTable.appendChild(title);

  //  resumindo para os neandertais o let deixa isolado dentro do laço ai fica dahora para quando der erro rastrear o erro
  for (let i = 1; i <= multiplicator; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // bem mais simples
    row.innerHTML = `
      <div class="operation">${number} x ${i}</div>
      <div class="result">${number * i}</div>
    `;

        multiplicationTable.appendChild(row);
    }
};

multiplicationForm.addEventListener("submit", (event) => {
    event.preventDefault();

  const multiplicationNumber = parseInt(number.value);
  const multiplicatorNumber = parseInt(limit.value);

  if (!(multiplicationNumber) || !(multiplicatorNumber)) {
    multiplicationTable.innerHTML = "<p>Por favor, insira números válidos.</p>";
    return;
  }

    createTable(multiplicationNumber, multiplicatorNumber);
});
