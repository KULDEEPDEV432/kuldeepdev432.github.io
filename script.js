
document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll('.download-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert("✅ Your download will start shortly!");
    });
  });
});
