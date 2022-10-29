//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    console.log(count)
    let counter = count + " - "
    saveEl.textContent += counter
    countEl.textContent = 0
    count = 0
}
