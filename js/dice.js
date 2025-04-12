const rollBtn = document.getElementById("rollButton");
const output = document.getElementById("output");
let rollCount = 0;

const movementSteps = [
  "Идите прямо 250 шагов и найдите что-то волшебное ✨",
  "Поверните налево и пройдите 200 шагов, напевая мелодию 🎶",
  "Поверните направо и идите 180 шагов, держась за руки 🤝",
  "Остановитесь на 30 секунд, обнимитесь и выберите новое направление на 150 шагов 🤗",
  "Идите к самому интересному объекту в поле зрения – 220 шагов 🧲",
  "Сделайте мини-испытание (из следующего броска), затем идите вперёд 160 шагов 🧩"
];

const creativeTasks = [
  "Сделайте совместное фото с чем-то 'магическим' 📸",
  "Запишите короткий видеоролик, как вы поёте песню друг для друга 🎤",
  "Нарисуйте друг друга за 2 минуты – в блокноте или на телефоне ✏️",
  "Придумайте и расскажите мини-сказку про ваш день 📖",
  "Найдите 3 предмета одного цвета и придумайте им имена 🎨",
  "Сыграйте в мини-ролевую сцену: один — маг, другой — торговец 🧙‍♂️"
];

const lootEvents = [
  "NPC встреча: мудрый старец под деревом предлагает загадку 🌳",
  "Вы нашли волшебный артефакт! Придумайте, что он делает 🧺",
  "Вы получаете бонус: право на дополнительный бросок 🎁",
  "Случайное зелье — обменяйтесь маленькими подарками 🧪",
  "Секретный путь открылся: выберите новое направление 🌌",
  "Вы нашли рецепт волшебного зелья — приготовьте напиток дома 🍵"
];

rollBtn.addEventListener("click", () => {
  const rolledNumber = Math.floor(Math.random() * 6) + 1;
  rollCount++;

  let phase = rollCount % 3;
  let resultText = "";
  let categoryName = "";

  if (phase === 1) {
    // Шаги
    resultText = movementSteps[rolledNumber - 1];
    categoryName = "🌍 Шаги";
  } else if (phase === 2) {
    // Задание
    resultText = creativeTasks[rolledNumber - 1];
    categoryName = "🎨 Задание";
  } else {
    // Лут/NPC
    resultText = lootEvents[rolledNumber - 1];
    categoryName = "🎁 Лут / NPC";
  }

  output.innerHTML = `
    <p><strong>Выпала грань:</strong> ${rolledNumber}</p>
    <p><strong>Категория:</strong> ${categoryName}</p>
    <p>${resultText}</p>
  `;
});
