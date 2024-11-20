export function loadContact() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const contactInfo = document.createElement("p");
  contactInfo.textContent = "Phone: +91 9884871790";

  const email = document.createElement("p");
  email.textContent = "Indianchef@gmail.com";

  const address = document.createElement("p");
  address.textContent = "Krogers Promenad 11, Silverdal - Sweden";

  content.appendChild(headline);
  content.appendChild(contactInfo);
  content.appendChild(email);
  content.appendChild(address);
}
