const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(
  "#home, #about, #faq, #event, #contact, #gallery"
);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = link.getAttribute("href").replace("#", "");

    sections.forEach((sec) => {
      sec.classList.add("hidden");
    });

    document.getElementById(target).classList.remove("hidden");
  });
});