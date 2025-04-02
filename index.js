let count = 0;
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    if (count > 0) {
        count--;
    }
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.textContent = count;
}

function save() {
    let timestamp = new Date().toLocaleString();
    let entry = `${count} - Saved at: ${timestamp}`;
    saveEl.innerHTML += `<li>${entry}</li>`;
}

function clearHistory() {
    saveEl.innerHTML = "";
}
