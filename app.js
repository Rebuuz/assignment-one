
// document.querySelector('.hamburger').addEventListener('click', (e) => {
//     console.log(e)

//     document.querySelector('.hamburger-items').classList.toggle('open')
// })

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".hamburger");

    menu.addEventListener("click", function () {
        const hamburgerItems = document.querySelector(".hamburger-items");
        hamburgerItems.classList.toggle("open");
        menu.classList.toggle("open");
    });
});