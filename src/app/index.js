import "external-svg-loader";
import '../styles/style.scss'

function importAll(r) {
    return r.keys().map(r);
}
importAll(require.context('../static/images/', false, /\.(png|jpe?g|svg)$/));

importAll(require.context('../static/icons/', false, /\.(png|jpe?g|svg)$/));


var previousActive = null
const activeNav = document.getElementById("active-nav")
const options = document.querySelectorAll('.container-elements')

const showOptions = (elm) => {

    const selects = document.getElementById(`elements-nav-${elm}`)

    Array.from(options).map((el) => {
        el.parentElement.children[0].children[1].classList.remove("active-container-arrow")
        el.parentElement.children[0].children[0].classList.remove("show-active-span")
        el.classList.remove('show-container-elements', 'container-elements-active-desktop')
    })

    if (elm) {
        selects.classList.add('show-container-elements', 'container-elements-active-desktop')
        selects.parentElement.children[0].children[0].classList.add('show-active-span')
        selects.parentElement.children[0].children[1].classList.add('active-container-arrow')
    }

    if (selects.classList.contains("show-container-elements") && selects.classList.contains("container-elements-active-desktop") && previousActive === elm) {
        selects.classList.remove('show-container-elements', 'container-elements-active-desktop')
        selects.parentElement.children[0].children[0].classList.remove('show-active-span')
        selects.parentElement.children[0].children[1].classList.remove('active-container-arrow')
        return previousActive = null
    }

    previousActive = elm
}

window.showOptions = showOptions

activeNav.addEventListener("input", (e) => {
    if (e.target.checked) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
})

window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 1023) {
        activeNav.checked = false
        document.body.style.overflow = 'auto'
    }
})
