/* -----------------------
   DARK MODE SYSTEM
----------------------- */
const themeToggle = document.getElementById("themeToggle");
const userTheme = localStorage.getItem("theme");

// apply saved theme
if (userTheme === "dark") document.body.classList.add("dark");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

/* Update footer year */
document.getElementById("year").textContent = new Date().getFullYear();

/* -----------------------
   SKILL BAR ANIMATION
----------------------- */
const bars = document.querySelectorAll(".skill-bar span");

function animateSkills() {
  bars.forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const rect = skillsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) animateSkills();
});

/* -----------------------
   CONTACT — MAILTO
----------------------- */
document.getElementById("mailtoBtn").onclick = () => {
  const name = document.querySelector("[name='name']").value;
  const email = document.querySelector("[name='email']").value;
  const msg = document.querySelector("[name='message']").value;

  window.location.href = `mailto:you@example.com?subject=Message from ${name}&body=${msg}%0A%0A${email}`;
};

/* -----------------------
   RESUME GENERATOR
----------------------- */
document.getElementById("downloadResumeBtn").onclick = async () => {
  const element = document.body;
  const canvas = await html2canvas(element);
  const img = canvas.toDataURL("image/png");

  const pdf = new jspdf.jsPDF("p", "mm", "a4");
  const width = pdf.internal.pageSize.getWidth();
  const ratio = canvas.height / canvas.width;

  pdf.addImage(img, "PNG", 0, 0, width, width * ratio);
  pdf.save("Cv fima.pdf");
};
