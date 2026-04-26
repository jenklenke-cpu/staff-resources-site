var derp = ["string,", "string2"];
console.log(derp.join(" , "));

const accordions = document.querySelectorAll(".accordion");

console.log("Accordion count:", accordions.length);

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    const panel = accordion.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
