// City of Port Alder: footer year + hamburger menu

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("is-open", open);
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

// Close after choosing a link, on Escape, or on a click outside the menu
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-nav")) setMenu(false);
});
