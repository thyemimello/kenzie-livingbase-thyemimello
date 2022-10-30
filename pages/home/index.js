import { buttonOpen, showButtonHome } from "../../scripts/buttons.js";
import { cards } from "../../scripts/cards.js";
import { savePost } from "../../pages/post/post.js";
import { catLocalsToragy } from "../../scripts/requests.js";
import { getPost } from "../../scripts/requests.js";

await savePost()

catLocalsToragy()

showButtonHome("grupButton")


let post = 0

await cards(localStorage.getItem("categoryProdut"), post)

post++

const obsDiv = document.querySelector(".obsDiv")

const observer = new IntersectionObserver(async (opem) => {
    if (opem.some((op) => op.isIntersecting)) {
        const postget = await getPost(post)

        if (postget.length > 0) {
            cards(localStorage.getItem("categoryProdut"), post)
            post++
        }
    }
})

observer.observer(obsDiv)

buttonOpen()


