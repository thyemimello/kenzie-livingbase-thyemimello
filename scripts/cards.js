const setId = (postId) => {
  localStorage.setItem("@postId", postId);
};

export function creatCard(news) {
  const main = document.querySelector(".container");
  main.innerHTML = "";

  news.forEach((values) => {
    const cardContainer = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardContentContainer = document.createElement("div");
    const cardContentTitle = document.createElement("h2");
    const cardContentParagraph = document.createElement("p");
    const cardContentbutton = document.createElement("button");

    cardContainer.classList.add("card_container");
    cardContainer.id = values.id;
    cardImage.classList.add("card_image");
    cardContentContainer.classList.add("card_content_container");
    cardContentTitle.classList.add("card_title");
    cardContentParagraph.classList.add("card_paragraph");
    cardContentbutton.classList.add("card_button");

    cardImage.src = values.image;
    cardContentTitle.innerText = values.title;
    cardContentParagraph.innerText = values.description;
    cardContentbutton.innerText = "Acessar conteúdo";

    cardContentbutton.addEventListener("click", () => {
      setId(values.id);
      window.location.href = "../pages/post/index.html";
    });

    cardContentContainer.append(
      cardContentTitle,
      cardContentParagraph,
      cardContentbutton
    );

    cardContainer.append(cardImage, cardContentContainer);

    main.appendChild(cardContainer);
  });
}
