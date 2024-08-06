
let lastY = window.scrollY;
let navbr = document.getElementById("navbar");
let input = document.getElementById("search");

input.addEventListener('keypress', (event) => {
    if (event.key == "Enter")
        window.find(input.value);
});

document.getElementById("search-submit").addEventListener('click', () => {
    window.find(input.value);
});

document.addEventListener('scroll', () => {
    let y = window.scrollY;
    if (y > lastY && !navbr.classList.contains("hide"))
        navbr.classList.add("hide");
    else if (y < lastY)
        navbr.classList.remove("hide");
    lastY = y;
});
