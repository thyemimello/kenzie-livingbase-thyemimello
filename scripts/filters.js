import { creatCard } from "./cards.js";
import { getCategory } from "./requests.js";

export const filtersButtons = (data) => {
  const filtersContainer = document.querySelector("#filters");

  const categories = data.map((item) => item.category);

  const allButton = document.createElement("button");
  allButton.classList.add("all_button");
  allButton.id = "todos";
  allButton.innerText = "Todos";

  filtersContainer.appendChild(allButton);

  categories.forEach((category) => {
    const categoryButton = document.createElement("button");

    categoryButton.classList.add("category_button");
    categoryButton.id = category;

    categoryButton.innerText = category;

    categoryButton.addEventListener("click", async (event) => {
      const categories = await getCategory(event.target.id);
      creatCard(categories);
    });

    filtersContainer.appendChild(categoryButton);
  });
};
