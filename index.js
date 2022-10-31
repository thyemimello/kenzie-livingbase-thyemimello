import { creatCard } from "./scripts/cards.js";
import { filtersButtons } from "./scripts/filters.js";
import { getPost } from "./scripts/requests.js";

let news = await getPost();
creatCard(news);
filtersButtons(news);

const backToTopButton = document.querySelector(".button_footer");

backToTopButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
