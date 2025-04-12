document.addEventListener('DOMContentLoaded', () => {
  const diceBtn = document.getElementById('rollBtn');
  const resultDiv = document.getElementById('result');

  const outcomes = [
    "🌇 Прогуляйтесь как будто вы герой фэнтези-приключения. Не разговаривайте как обычно!",
    "📷 Сделай фото объекта, напоминающего магический артефакт.",
    "🎧 Слушай звуки города — найди 3, которые могли бы быть в игре.",
    "📝 Придумай заклинание дня и опиши его эффект.",
    "💌 Оставь анонимную добрую записку где-нибудь в городе.",
    "📦 Нарисуй 'лут', который ты бы хотел найти сегодня.",
  ];

  diceBtn.addEventListener('click', () => {
    diceBtn.classList.add('dice-rolling');
    
    setTimeout(() => {
      diceBtn.classList.remove('dice-rolling');

      const randomIndex = Math.floor(Math.random() * outcomes.length);
      resultDiv.textContent = outcomes[randomIndex];
    }, 500);
  });
});
