
import { getCategory } from "../../scripts/requests.js"
import { buttonHome, showButtonHome } from "../../scripts/buttons.js"


export function creatPost(event) {

    const post = document.querySelector(".card")
    post.innerHTML = ""

    event.forEach((values) => {
        const divPost = document.createElement("div")
        divPost.classList = 'divPost'

        const divContainer = document.createElement("div")
        divContainer.classList = 'container'

        const h2 = document.createElement("h2")
        h2.classList = 'titlePost'
        h2.innerText = values.title


        const divImg = document.createElement("div")
        divImg.classList = 'divImg'

        const imgPost = document.createElement("img")
        imgPost.src = values.image
        imgPost.alt = values.title

        const p = document.createElement("p")
        p.classList = 'subtitle'
        p.innerText = values.description

        const divValue = document.createElement('div')
        divValue.classList = 'divValue'

        const pValue = document.createElement("p")
        p.classList = 'pValue'
        p.innerText = values.content



        post.appendChild(divContainer)
        divContainer.append(divPost, divImg, divValue)
        divPost.append(h2, p)
        divImg.append(imgPost)
        divPost.append(pValue)


    })


}
creatPost()


export const savePost = async () => {
    let post = 0
    let category = []
    let page ['initial']

    page.forEach(element => {
        if (page.length > 0) {
            page = await getCategory(post)
        }

        if (!category.includes(element)) {
            category.push(element)
        }
    })

    post++

    localStorage.setItem("category", JSON.stringify(category))
    return category

}

buttonHome()

showButtonHome("button_opem_post")