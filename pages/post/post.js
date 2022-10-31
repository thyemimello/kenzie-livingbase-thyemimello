// import { getPostCurrent } from "../../scripts/requests.js";
const baseUrl = "https://m2-api-living.herokuapp.com";

const postId = localStorage.getItem("@postId");

const getPostCurrent = async (id) => {
  await fetch(`${baseUrl}/news/${id}`)
    .then((resposne) => resposne.json())
    .then((response) => creatPost(response))
    .catch((err) => console.log(err));
};

getPostCurrent(postId);

export function creatPost(post) {
  console.log(post);
  const main = document.querySelector("#post_main");
  const homeButton = document.querySelector(".button_home");

  homeButton.addEventListener("click", () => {
    window.location.href = "../../index.html";
  });
  main.innerHTML = "";

  const title = document.createElement("h1");
  const subTitle = document.createElement("h3");
  const image = document.createElement("img");
  const paragraph = document.createElement("p");

  title.classList.add("title");
  subTitle.classList.add("subTitle");
  image.classList.add("image");
  paragraph.classList.add("paragraph");

  title.innerText = post.title;
  subTitle.innerText = post.description;
  image.src = post.image;
  paragraph.innerText = post.content;

  main.append(title, subTitle, image, paragraph);
}
