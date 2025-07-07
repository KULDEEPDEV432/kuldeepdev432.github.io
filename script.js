
document.addEventListener("DOMContentLoaded", () => {
  console.log("ReadyBoot website loaded successfully.");
  const downloadBtn = document.querySelector(".download-link");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      console.log("Download button clicked.");
      alert("✅ Your download will begin shortly!");
    });
  }
});
