document.addEventListener("DOMContentLoaded", function () {
  const rollBtn = document.getElementById("rollButton");
  const resultDisplay = document.getElementById("rollResult");

  rollBtn.addEventListener("click", () => {
    // Анимация тряски
    rollBtn.classList.add("shaking");
    setTimeout(() => {
      rollBtn.classList.remove("shaking");

      const roll = Math.floor(Math.random() * 6) + 1;
      resultDisplay.textContent = `🎲 Выпало: ${roll}`;
    }, 500); // длительность анимации
  });
});
