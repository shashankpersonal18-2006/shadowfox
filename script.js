window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
document.querySelectorAll(".scroll").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
function showMessage() {
  alert("Welcome! This is a JavaScript-enabled demo portfolio.");
}
const projects = [
  { title: "Project One", desc: "Responsive website using HTML & CSS." },
];

const container = document.getElementById("projectContainer");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "col-md-4 mb-3";
  div.innerHTML = `
    <div class="card p-3">
      <h5>${project.title}</h5>
      <p>${project.desc}</p>
    </div>
  `;
  container.appendChild(div);
});
document.getElementById("year").textContent = new Date().getFullYear();
