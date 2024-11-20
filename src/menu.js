import pizzaImage from "./assets/pizza.jpg";
import pastaImage from "./assets/pasta.jpg";
import saladImage from "./assets/salad.jpg";
import dessertImage from "./assets/dessert.jpg";

export function loadMenu() {
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const items = [
    {
      name: "Fruit Salad",
      description: "Fresh mixed greens with a tangy vinaigrette",
      imageUrl: saladImage,
    },
    {
      name: "Indian Pizza",
      description: "Delicious cheese pizza with fresh toppings",
      imageUrl: pizzaImage,
    },
    {
      name: "Indian Pasta",
      description: "Creamy pasta with a rich tomato sauce",
      imageUrl: pastaImage,
    },
    {
      name: "Indian Special Dessert",
      description: "Indulgent chocolate cake with vanilla ice cream",
      imageUrl: dessertImage,
    },
  ];

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.name;
    img.classList.add("image");
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    cardBody.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    cardBody.appendChild(itemDescription);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);
  });

  content.appendChild(headline);
  content.appendChild(cardContainer);
}
