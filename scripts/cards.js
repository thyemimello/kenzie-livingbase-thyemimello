import { getPost } from "./requests.js"

export function creatCard(event) {

    const li = document.querySelector(".card")
    li.innerHTML = ""

    event.forEach((values) => {
        const divCard = document.createElement("div")
        divCard.classList = 'divCard'

        const divIMg = document.createElement("div")
        divIMg.classList = 'divImg'

        const img = document.createElement("img")
        img.src = values.image
        img.alt = values.title

        const divtext = document.createElement("div")
        divtext.classList = 'divText'

        const h3 = document.createElement("h3")
        h3.classList = 'titleCard'
        h3.innerText = values.title

        const p = document.createElement("p")
        p.classList = 'subtitle'
        p.innerText = values.description

        const divButton = document.createElement("div")
        divButton.classList = 'divButton'

        const buttonCard = document.createElement("button_card")
        buttonCard.innerText = "Acessar conteúdo"
        buttonCard.classList.add("buttonCard")

        buttonCard.addEventListener("Click", () => {
            localStorage.setItem("idPost", event.id)
            window.location.replace("../../post/index.html")

        })

        li.appendChild(divCard)
        divCard.append(divIMg, divtext, divButton)
        divIMg.append(img)
        divIMg.append(h3, p)
        divButton.appendChild(buttonCard)


    })
    creatCard()


    export const cards = async (category, page) => {
        const showcard = document.querySelector(".show_card")

        const post = await getPost(page)

        let postOpen = [...post]

        if (category != "Todos") {
            postOpen = post.filter(event => event.category == category)
        }

        postOpen.forEach(event => showcard.appendChild(creatCard(event)))
    }
    cards()