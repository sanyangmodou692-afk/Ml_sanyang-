// Show today's date
const dateElement = document.getElementById("todayDate");
const today = new Date();
dateElement.textContent = today.toDateString();

// Progress tracking
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const progressCount = document.getElementById("progressCount");

function updateProgress() {
  let completed = 0;
  checkboxes.forEach(box => {
    if (box.checked) completed++;
  });
  progressCount.textContent = completed;
}

// Save + load progress
checkboxes.forEach(box => {
  const key = box.parentElement.textContent;

  // Load saved state
  const saved = localStorage.getItem(key);
  if (saved === "true") box.checked = true;

  box.addEventListener("change", () => {
    localStorage.setItem(key, box.checked);
    updateProgress();
  });
});

updateProgress();