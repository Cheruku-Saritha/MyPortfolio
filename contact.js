document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Resume Button
    document.querySelector(".resume-btn").addEventListener("click", function (event) {
      event.preventDefault();
      const resumeLink = this.getAttribute("href");
  
      // Show confirmation before downloading
      if (confirm("Do you want to download Saritha's Resume?")) {
        window.location.href = resumeLink;
      }
    });
  });
  