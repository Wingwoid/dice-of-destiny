document.addEventListener('DOMContentLoaded', () => {
  const diceBtn = document.querySelector('.dice-button');
  if (diceBtn) {
    diceBtn.addEventListener('click', () => {
      diceBtn.classList.add('dice-rolling');
      setTimeout(() => {
        diceBtn.classList.remove('dice-rolling');
      }, 500);
    });
  }
});

