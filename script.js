
// ReadyBoot Script - Enhanced for functionality and UX

document.addEventListener("DOMContentLoaded", () => {
  console.log("ReadyBoot website loaded successfully.");

  // Download button click tracker
  const downloadBtn = document.querySelector(".download-link");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      console.log("Download button clicked.");
      alert("✅ Your download will begin shortly!");
    });
  }

  // Scroll to top on header click
  const header = document.querySelector("header");
  if (header) {
    header.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Active link highlighting (for future nav if added)
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
