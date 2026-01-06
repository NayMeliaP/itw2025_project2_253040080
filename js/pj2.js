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

const scriptURL =
  "https://script.google.com/macros/s/AKfycbymQnVDTO7N3W4AryTfgfKrT_l-kb5lCewoh70vQUg/dev";
const form = document.forms["message"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
