import { loadMenu } from "./menu";

export function loadHome() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Chiru's Restaurant!";

  const description = document.createElement("p");
  description.textContent =
    "Enjoy the taste of India with love and care.";

  const bannerContainer = document.createElement("div");
  bannerContainer.classList.add("banner-section-bg-container");

  const bannerContent = document.createElement("div");
  bannerContent.classList.add("content");

  const heading = document.createElement("h1");
  heading.classList.add("banner-heading");
  heading.textContent = "Enjoy the Spice & love the Indian Food";

  const caption = document.createElement("p");
  caption.classList.add("banner-caption");
  caption.textContent = "Eat Healthy & Stay Happy";

  const menuButton = document.createElement("button");
  menuButton.textContent = "View Menu";
  menuButton.classList.add("custom-button");
  menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
  });

  bannerContent.appendChild(heading);
  bannerContent.appendChild(caption);
  bannerContent.appendChild(menuButton);
  bannerContainer.appendChild(bannerContent);
  content.appendChild(bannerContainer);
  content.appendChild(headline);
  content.appendChild(description);
}
