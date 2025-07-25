const multiplicationForm = document.querySelector("#tabuada-form");
const number = document.querySelector("#numero");
const limit = document.querySelector("#limite");
const multiplicationTable = document.querySelector("#resultado");
const span = document.querySelector("#span");

const createTable = (number, multiplicator) => {
    multiplicationTable.innerHTML = "";

    const title = document.createElement("h3");
    title.textContent = `Tabuada do número ${number} até ${multiplicator}`;
    multiplicationTable.appendChild(title);

    for (i = 1; i <= multiplicator; i++) {
        const result = number * i;

        const template = `
        <div class="row">
            <div class="operation">${number} x ${i}</div>
            <div class="result">${result}</div>
        </div>
    `;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }
};

multiplicationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const multiplicationNumber = +number.value;

    const multiplicatorNumber = +limit.value;

    // if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});
