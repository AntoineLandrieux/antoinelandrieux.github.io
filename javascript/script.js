
let input = document.getElementById("search");

input.addEventListener('keypress', (event) => {
    if (event.key == "Enter")
        window.find(input.value);
});

document.getElementById("search-submit").addEventListener('click', () => {
    window.find(input.value);
});
