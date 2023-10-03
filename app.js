document.querySelector('.hamburger').addEventListener('click', (e) => {
    console.log(e)

    document.querySelector('.hamburger-items').classList.toggle('open')
})
