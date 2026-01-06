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

const scriptURL = "https://script.google.com/macros/s/AKfycbz4-8XKotzqX61x5fGT7oP3YeFTXxINQH8iygmteV_hKHGI6qXYpdn15e-fLb95YuEY/exec";
const form = document.forms["message"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
