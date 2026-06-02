document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.getElementById("robot-viewer");
  const activateButton = document.getElementById("activate-btn");

  if (!viewer || !activateButton) {
    return;
  }

  viewer.addEventListener("mouseenter", () => {
    console.log("Robot activated");
  });

  viewer.addEventListener("mouseleave", () => {
    console.log("Robot in standby");
  });

  activateButton.addEventListener("click", () => {
    const originalLabel = "Activate Robot";

    activateButton.textContent = "Activating...";
    activateButton.disabled = true;

    document.body.style.background =
      "radial-gradient(circle at 50% 50%, #001f3f, #000)";

    setTimeout(() => {
      activateButton.textContent = "Robot Activated";
      activateButton.style.background = "#8bff9e";
      activateButton.style.color = "#03210f";
    }, 1200);

    setTimeout(() => {
      activateButton.textContent = originalLabel;
      activateButton.disabled = false;
      activateButton.removeAttribute("style");
      document.body.style.background = "";
    }, 2600);
  });
});
