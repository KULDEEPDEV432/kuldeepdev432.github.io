
// ReadyBoot Script - Optimized for future use

document.addEventListener("DOMContentLoaded", () => {
  console.log("ReadyBoot website loaded successfully.");

  // Example: Add click log to download link
  const downloadBtn = document.querySelector(".download-link");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      console.log("Download button clicked.");
    });
  }
});

