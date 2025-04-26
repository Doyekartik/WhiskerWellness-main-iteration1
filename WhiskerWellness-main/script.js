document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bg-video");
    const loginBtn = document.getElementById("login-btn");
  
    // Pause the video initially
    video.pause();
  
    loginBtn.addEventListener("click", () => {
      video.play(); // Play the video
      setTimeout(() => {
        // After a short delay, remove the video and show white screen
        video.style.display = "none";
        document.body.classList.add("white-screen");
      }, 1000); // Adjust delay if you want it to fade out after playing briefly
    });
  });
  