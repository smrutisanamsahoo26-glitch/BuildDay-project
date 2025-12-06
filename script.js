
let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

const input = document.getElementById("quoteInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("quoteList");

function renderQuotes() {
    list.innerHTML = "";

    quotes.forEach((quote, index) => {
        const li = document.createElement("li");
        li.textContent = quote;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";

        delBtn.onclick = () => {
            quotes.splice(index, 1);
            localStorage.setItem("quotes", JSON.stringify(quotes));
            renderQuotes();
        };

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    quotes.push(text);
    localStorage.setItem("quotes", JSON.stringify(quotes));
    input.value = "";
    renderQuotes();
});

renderQuotes();
