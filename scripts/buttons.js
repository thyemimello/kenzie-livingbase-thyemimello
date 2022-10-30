export const buttonHome = () => {
    const buttonHome = document.querySelector(".buttonHome")

    buttonHome.addEventListener("click", () => {
        localStorage.removeItem("categoryProdut")
        window.location.replace("../home/index.html")
    })
}

export const createButtons = (event) => {
    const createButtons = document.createElement("button")
    createButtons.innerText = event
    createButtons.classList.add("buttonCategory")
    createButtons.addEventListener("click", () => {
        localStorage.setItem("categoryProdut", event)
        window.location.replace("../home/index.html")
    })
    return createButtons
}

export const showButtonHome = (typeButton) => {
    const showButton = ["Todos", ...JSON.parse(localStorage.getItem("showButton"))]

    const grupButton = document.querySelector(`.${typeButton}`)
    grupButton.innerText = ""

    showButton.forEach(event => {
        grupButton.appendChild(createButtons(event))
    })
}

export const buttonOpen = () => {
    const buttonCategory = [...document.querySelectorAll(".buttonCategory")]

    buttonCategory, forEach((event) => {
        event.classList.remove(buttonOpen)

        if (localStorage.getItem("categoryProdut") == event.innerText) {
            event.classList.add("buttonOpen")
        }
    })
}