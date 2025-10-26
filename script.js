// Basic animation or interactivity
document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.getElementById("robot-viewer");
  const btn = document.querySelector(".glow");

  // Viewer hover messages
  viewer.addEventListener("mouseenter", () => {
    console.log("Robot activated 🤖");
  });

  viewer.addEventListener("mouseleave", () => {
    console.log("Robot deactivated 💤");
  });

  // Button click animation
  btn.addEventListener("click", () => { 
    btn.innerText = "Activating...";
    btn.classList.add("active");
    document.body.style.background = "radial-gradient(circle at 50% 50%, #001f3f, #000)";
    setTimeout(() => {
      btn.innerText = "Robot Activated 🤖";
      btn.style.background = "#0f0";
      btn.style.color = "#000";
      btn.classList.remove("active");
    }, 2000);
  });
});
