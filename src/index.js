import "./styles.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function loadPage() {
  document.getElementById("home-tab").addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  document.getElementById("menu-tab").addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  document.getElementById("contact-tab").addEventListener("click", () => {
    clearContent();
    loadContact();
  });

  loadHome();
}

loadPage();
