// City Clicker v3 — game.js (compact)

// ── DATA ──────────────────────────────────────────
const BUILDINGS = [
  { id: 'tent', emoji: '⛺', name: 'Палатка', desc: 'Скромное начало.', baseCost: 10, baseCps: 0.1, color: '#c8a96e', w: 30, h: 25 },
  { id: 'house', emoji: '🏠', name: 'Домик', desc: 'Маленький, уютный.', baseCost: 80, baseCps: 0.5, color: '#e07b54', w: 40, h: 38 },
  { id: 'shop', emoji: '🏪', name: 'Магазин', desc: 'Торговля приносит монеты.', baseCost: 400, baseCps: 2, color: '#4fc3f7', w: 50, h: 45 },
  { id: 'factory', emoji: '🏭', name: 'Завод', desc: 'Промышленность — сила.', baseCost: 2000, baseCps: 9, color: '#90a4ae', w: 65, h: 55 },
  { id: 'bank', emoji: '🏦', name: 'Банк', desc: 'Деньги делают деньги.', baseCost: 10000, baseCps: 40, color: '#fff176', w: 55, h: 65 },
  { id: 'stadium', emoji: '🏙️', name: 'Стадион', desc: 'Развлечения для граждан.', baseCost: 50000, baseCps: 180, color: '#ce93d8', w: 90, h: 50 },
  { id: 'skyscraper', emoji: '🏙️', name: 'Небоскрёб', desc: 'Величие видно издалека.', baseCost: 250000, baseCps: 800, color: '#80cbc4', w: 45, h: 110 },
  { id: 'spacecenter', emoji: '🚀', name: 'Космопорт', desc: 'Монеты из галактик.', baseCost: 1500000, baseCps: 4000, color: '#ef9a9a', w: 70, h: 90 },
  { id: 'lab', emoji: '🔭', name: 'Лаборатория', desc: 'Наука увеличивает доход.', baseCost: 8000000, baseCps: 18000, color: '#a3e4d7', w: 60, h: 75 },
  { id: 'station', emoji: '🛰️', name: 'Орбитальная ст.', desc: 'Монеты с орбиты.', baseCost: 40000000, baseCps: 80000, color: '#aab7b8', w: 80, h: 60 },
  { id: 'dyson', emoji: '🌞', name: 'Сфера Дайсона', desc: 'Энергия звезды.', baseCost: 200000000, baseCps: 400000, color: '#f9e79f', w: 95, h: 95 },
  { id: 'terraformer', emoji: '🌍', name: 'Терраформатор', desc: 'Создает новые планеты-колонии.', baseCost: 1000000000, baseCps: 2500000, color: '#76d7c4', w: 110, h: 110 },
  { id: 'starforge', emoji: '🌌', name: 'Звёздная Кузница', desc: 'Черпает материю из чёрных дыр.', baseCost: 7500000000, baseCps: 15000000, color: '#8e44ad', w: 130, h: 130 },
  { id: 'multigate', emoji: '🌀', name: 'Врата Мультивселенной', desc: 'Монеты из параллельных миров.', baseCost: 50000000000, baseCps: 120000000, color: '#2980b9', w: 150, h: 150 },
  { id: 'timemachine', emoji: '⏳', name: 'Машина Времени', desc: 'Заработок до того, как ты кликнул.', baseCost: 400000000000, baseCps: 1000000000, color: '#d35400', w: 120, h: 140 },
  { id: 'realityengine', emoji: '👁️', name: 'Двигатель Реальности', desc: 'Переписывает законы экономики.', baseCost: 5000000000000, baseCps: 15000000000, color: '#c0392b', w: 160, h: 160 },
  { id: 'galacticsenate', emoji: '🏛️', name: 'Галакт. Сенат', desc: 'Налоги со всей галактики.', baseCost: 1e14, baseCps: 3e11, color: '#f1c40f', w: 180, h: 200 },
  { id: 'blackholeminer', emoji: '🕳️', name: 'Экстрактор ЧД', desc: 'Гравитационный майнинг.', baseCost: 5e15, baseCps: 1.2e13, color: '#34495e', w: 160, h: 180 },
  { id: 'quasarharvester', emoji: '💥', name: 'Сборщик Квазаров', desc: 'Обуздание чистой энергии.', baseCost: 3e17, baseCps: 8e14, color: '#e67e22', w: 200, h: 250 },
  { id: 'cosmicloom', emoji: '🧵', name: 'Космический Ткач', desc: 'Плетение материи из струн.', baseCost: 2e19, baseCps: 6e16, color: '#9b59b6', w: 220, h: 300 },
  { id: 'simserver', emoji: '💻', name: 'Сервер Симуляции', desc: 'Взлом базовой реальности.', baseCost: 1e21, baseCps: 4e18, color: '#1abc9c', w: 250, h: 350 },
];
const BOSSES = [
  { id: 'b1', name: 'Корпоративный Спрут', emoji: '🐙', hp: 1000, reward: 50000, desc: 'Гигантская корпорация, поглощающая малый бизнес.' },
  { id: 'b2', name: 'Вирус-Вымогатель', emoji: '🦠', hp: 5000, reward: 250000, desc: 'Цифровая угроза, парализующая экономику.' },
  { id: 'b3', name: 'Мега-Робот', emoji: '🤖', hp: 25000, reward: 1000000, desc: 'Неуправляемый ИИ, вышедший из-под контроля.' },
  { id: 'b4', name: 'Тёмный Властелин', emoji: '🌑', hp: 100000, reward: 5000000, desc: 'Древнее зло, стремящееся погрузить мир во тьму.' },
];
const WEATHER_TYPES = [
  { name: 'Ясно', emoji: '☀️', cpsB: 1.0, clickB: 1.0, rain: false },
  { name: 'Облачно', emoji: '⛅', cpsB: 0.95, clickB: 1.0, rain: false },
  { name: 'Дождь', emoji: '🌧️', cpsB: 0.9, clickB: 1.1, rain: true, heavy: false },
  { name: 'Гроза', emoji: '⛈️', cpsB: 0.75, clickB: 0.9, rain: true, heavy: true },
];
const DILEMMAS = [
  {
    q: '💼 Инвестор предлагает сотрудничество. Что ответить?', opts: [
      { t: '✅ Принять (-10% монет, +60% дохода на 60с)', fx: () => { G.coins = Math.floor(G.coins * 0.9); startEv('Инвест. бум', '💼', 1.6, 1, 60); } },
      { t: '❌ Отказать', fx: () => showToast('🤝 Сохранили независимость!') },
    ]
  },
  {
    q: '✊ Рабочие требуют повышения зарплаты. Ваше решение?', opts: [
      { t: '✅ Повысить (-1К монет, +40% дохода 45с)', fx: () => { if (G.coins >= 1000) { G.coins -= 1000; startEv('Мотивация', '💪', 1.4, 1, 45); } else showToast('❌ Монет недостаточно!'); } },
      { t: '❌ Отказать (-20% дохода 30с)', fx: () => startEv('Забастовка', '✊', 0.8, 1, 30) },
    ]
  },
  {
    q: '🗞️ Журналист хочет сенсационное интервью.', opts: [
      { t: '✅ Дать (+20% клик 60с, -20% CPS)', fx: () => startEv('Скандал!', '🗞️', 0.8, 1.2, 60) },
      { t: '❌ Отказать', fx: () => showToast('🤫 Тишина — золото') },
    ]
  },
  {
    q: '🎰 Казино хочет открыться в городе.', opts: [
      { t: '✅ Разрешить (+200% клик 30с, -50% CPS)', fx: () => startEv('Казино!', '🎰', 0.5, 3, 30) },
      { t: '❌ Запретить (штраф за отказ)', fx: () => { G.coins = Math.max(0, G.coins - Math.floor(calcCps() * 15)); showToast('🚫 Казино закрыто (штраф).'); } },
    ]
  },
];

const UPGRADES = [
  { id: 'u1', name: 'Золотые пальцы', desc: '+1 к клику', cost: 50, effect: () => { G.clickPower += 1 }, cond: () => G.totalClicks >= 10 },
  { id: 'u2', name: 'Двойной удар', desc: 'x2 клик', cost: 500, effect: () => { G.clickPower *= 2 }, cond: () => G.totalCoins >= 300 },
  { id: 'u3', name: 'Магнит монет', desc: '+5 к клику', cost: 2000, effect: () => { G.clickPower += 5 }, cond: () => G.totalCoins >= 1000 },
  { id: 'u4', name: 'Автосборщик', desc: 'x1.5 доход', cost: 8000, effect: () => { G.cpsM *= 1.5 }, cond: () => G.totalCoins >= 5000 },
  { id: 'u5', name: 'Золотая лихорадка', desc: '+20 клик', cost: 30000, effect: () => { G.clickPower += 20 }, cond: () => G.totalCoins >= 20000 },
  { id: 'u6', name: 'Турбо-шахты', desc: 'x2 доход', cost: 100000, effect: () => { G.cpsM *= 2 }, cond: () => G.totalCoins >= 80000 },
  { id: 'u7', name: 'Мегаклик', desc: 'x3 клик', cost: 500000, effect: () => { G.clickPower *= 3 }, cond: () => G.totalCoins >= 300000 },
  { id: 'u8', name: 'Нейросеть', desc: 'x3 доход', cost: 2000000, effect: () => { G.cpsM *= 3 }, cond: () => G.totalCoins >= 1000000 },
  // Синергии
  { id: 'syn1', name: 'Синдикат', desc: 'Палатки+Заводы (+500с/сек)', cost: 2500000, effect: () => { const b = BUILDINGS.find(x => x.id === 'tent'); if (b) b.baseCps += 500; }, cond: () => getB('tent') >= 10 && getB('factory') >= 5 },
  { id: 'syn2', name: 'Технократия', desc: 'Лабы+Космопорт (+10K/сек)', cost: 50000000, effect: () => { const b = BUILDINGS.find(x => x.id === 'lab'); if (b) b.baseCps += 10000; }, cond: () => getB('lab') >= 5 && getB('spacecenter') >= 1 },
  // Tier 2 апгрейды
  { id: 'u9', name: 'Квантовый клик', desc: 'x5 клик', cost: 100000000, effect: () => { G.clickPower *= 5 }, cond: () => getB('station') >= 1 },
  { id: 'u10', name: 'Абсолютный ноль', desc: 'x5 доход', cost: 1000000000, effect: () => { G.cpsM *= 5 }, cond: () => getB('dyson') >= 1 },
  { id: 'u11', name: 'Властелин', desc: 'x10 клик и доход', cost: 50000000000, effect: () => { G.clickPower *= 10; G.cpsM *= 10; }, cond: () => getB('multigate') >= 1 },
  { id: 'u12', name: 'Квазар-Ускоритель', desc: 'x50 клик и доход', cost: 1e15, effect: () => { G.clickPower *= 50; G.cpsM *= 50; }, cond: () => getB('galacticsenate') >= 1 },
  { id: 'u13', name: 'Струнная теория', desc: 'x100 доход', cost: 3e18, effect: () => { G.cpsM *= 100; }, cond: () => getB('quasarharvester') >= 1 },
  { id: 'u14', name: 'Матричный код', desc: 'x500 клик', cost: 1e21, effect: () => { G.clickPower *= 500; }, cond: () => getB('simserver') >= 1 },
];
const ACHIEVEMENTS = [
  { id: 'a1', emoji: '🖱️', name: 'Первый клик', desc: 'Кликни впервые', cond: () => G.totalClicks >= 1 },
  { id: 'a2', emoji: '💯', name: '100 кликов', desc: '100 кликов', cond: () => G.totalClicks >= 100 },
  { id: 'a3', emoji: '🔥', name: 'Кликоман', desc: '1000 кликов', cond: () => G.totalClicks >= 1000 },
  { id: 'a4', emoji: '🏠', name: 'Первый дом', desc: 'Купи здание', cond: () => totB() >= 1 },
  { id: 'a5', emoji: '🌆', name: 'Маленький город', desc: '10 зданий', cond: () => totB() >= 10 },
  { id: 'a6', emoji: '🏙️', name: 'Мегаполис', desc: '50 зданий', cond: () => totB() >= 50 },
  { id: 'a7', emoji: '💰', name: 'Тысячник', desc: '1К монет', cond: () => G.totalCoins >= 1000 },
  { id: 'a8', emoji: '💎', name: 'Миллионер', desc: '1М монет', cond: () => G.totalCoins >= 1000000 },
  { id: 'a9', emoji: '⚡', name: 'Все апгрейды', desc: 'Купи все улучшения', cond: () => G.upgrades.length === UPGRADES.length },
  { id: 'a10', emoji: '🚀', name: 'К звёздам', desc: 'Космопорт', cond: () => getB('spacecenter') > 0 },
  { id: 'a11', emoji: '✨', name: 'Первый престиж', desc: 'Выполни Престиж', cond: () => G.prestige >= 1 },
  { id: 'a12', emoji: '🌊', name: 'Выжил', desc: 'Пережить бедствие', cond: () => G.disastersW >= 1 },
  { id: 'a13', emoji: '⭐', name: 'Золото', desc: 'Собери золотую монету', cond: () => G.goldCollected >= 1 },
  { id: 'a14', emoji: '📋', name: 'Планы', desc: 'Выполни 5 квестов', cond: () => G.doneQ.size >= 5 },
  { id: 'a15', emoji: '🔬', name: 'Учёный', desc: 'Изучи 3 технологии', cond: () => G.techs.length >= 3 },
  { id: 'a16', emoji: '🌸', name: 'Все сезоны', desc: 'Пройди 4 сезона', cond: () => G.seasonsS >= 4 },
  // Секретные
  { id: 'a17', emoji: '🌙', name: 'Ночной мэр', desc: 'Играй ночью (00:00–06:00)', secret: true, cond: () => (new Date().getHours() < 6) && G.totalClicks > 0 },
  { id: 'a18', emoji: '👹', name: 'Охотник на боссов', desc: 'Победи 10 боссов', secret: true, cond: () => (G.bossesDefeated || 0) >= 10 },
  { id: 'a19', emoji: '🌞', name: 'Галакт. владыка', desc: 'Построй Сферу Дайсона', secret: true, cond: () => getB('dyson') > 0 },
  { id: 'a20', emoji: '💥', name: 'Спидраннер', desc: 'Набери ×5 комбо', secret: true, cond: () => (G.bestCombo || 0) >= 5 },
  { id: 'a21', emoji: '📅', name: 'Постоянный житель', desc: '5 дней подряд', secret: true, cond: () => (G.dailyStreak || 0) >= 5 },
  // Глобальный патч
  { id: 'a22', emoji: '📉', name: 'Трейдер', desc: 'Купи первую акцию', cond: () => (G.stocks || []).some(s => s.owned > 0) },
  { id: 'a23', emoji: '🌌', name: 'Восхождение', desc: 'Выполни Вознесение', cond: () => G.ascensions && G.ascensions.length > 0 },
  { id: 'a24', emoji: '🧤', name: 'Артефактор', desc: 'Купи Артефакт за DM', cond: () => G.artifacts && G.artifacts.length > 0 },
  { id: 'a25', emoji: '🌍', name: 'Новый мир', desc: 'Построй Терраформатор', cond: () => getB('terraformer') > 0 },
  { id: 'a26', emoji: '🛸', name: 'Бог Мультивселенных', desc: 'Все здания Tier 2', cond: () => getB('realityengine') > 0 },
  { id: 'a27', emoji: '💻', name: 'Хакер Кода', desc: 'Построй Сервер Симуляции', cond: () => getB('simserver') > 0 },
];

const QUEST_POOL = [
  { id: 'q1', name: 'Новичок', desc: 'Кликни 50 раз', type: 'clicks', target: 50, reward: 300 },
  { id: 'q2', name: 'Кликоман', desc: 'Кликни 500 раз', type: 'clicks', target: 500, reward: 2000 },
  { id: 'q3', name: 'Тысяча', desc: 'Кликни 1000 раз', type: 'clicks', target: 1000, reward: 5000 },
  { id: 'q4', name: 'Первые монеты', desc: 'Заработай 1К', type: 'earn', target: 1000, reward: 200 },
  { id: 'q5', name: 'Богатей', desc: 'Заработай 50К', type: 'earn', target: 50000, reward: 5000 },
  { id: 'q6', name: 'Миллионер', desc: 'Заработай 1М', type: 'earn', target: 1000000, reward: 50000 },
  { id: 'q7', name: 'Застройщик', desc: '5 зданий', type: 'build', target: 5, reward: 1000 },
  { id: 'q8', name: 'Архитектор', desc: '25 зданий', type: 'build', target: 25, reward: 8000 },
  { id: 'q9', name: 'Магнат', desc: 'Построй магазин', type: 'specific', bId: 'shop', target: 1, reward: 1500 },
  { id: 'q10', name: 'Промышленник', desc: 'Построй завод', type: 'specific', bId: 'factory', target: 1, reward: 4000 },
];
const DISASTERS = [
  { type: 'fire', emoji: '🔥', name: 'Пожар', msg: 'Доход снижен на 50%!', duration: 30, mult: 0.5 },
  { type: 'flood', emoji: '🌊', name: 'Наводнение', msg: 'Доход снижен на 40%!', duration: 25, mult: 0.6 },
  { type: 'storm', emoji: '⚡', name: 'Буря', msg: 'Электричество выключено! -30%', duration: 20, mult: 0.7 },
];
const SEASONS = [
  { name: 'Весна', emoji: '🌸', cpsB: 1.1, clickB: 1.0, disR: 0.8, goldR: 1.2, snow: false },
  { name: 'Лето', emoji: '☀️', cpsB: 1.15, clickB: 1.1, disR: 0.9, goldR: 1.5, snow: false },
  { name: 'Осень', emoji: '🍂', cpsB: 0.9, clickB: 1.2, disR: 1.3, goldR: 1.0, snow: false },
  { name: 'Зима', emoji: '❄️', cpsB: 0.75, clickB: 0.9, disR: 0.5, goldR: 0.5, snow: true },
];
const EVENT_POOL = [
  { id: 'e1', emoji: '⛏️', name: 'Золотая жила', desc: '+50% к доходу', duration: 45, cM: 1.5, kM: 1.0 },
  { id: 'e2', emoji: '🎪', name: 'Фестиваль', desc: '×2 монеты за клик', duration: 30, cM: 1.0, kM: 2.0 },
  { id: 'e3', emoji: '✈️', name: 'Турбум', desc: '+30% к доходу', duration: 60, cM: 1.3, kM: 1.0 },
  { id: 'e4', emoji: '📈', name: 'Экономический рост', desc: '×1.5 к всему', duration: 45, cM: 1.5, kM: 1.5 },
  { id: 'e5', emoji: '✊', name: 'Забастовка', desc: '-40% к доходу', duration: 30, cM: 0.6, kM: 1.0 },
  { id: 'e6', emoji: '📵', name: 'Сбой сети', desc: '-20% к всему', duration: 20, cM: 0.8, kM: 0.8 },
];
const TECH_TREE = [
  { id: 't1', emoji: '⛏️', name: 'Базовая шахта', desc: '+10% к клику', cost: 50, req: [], fx: () => { G.clickPower *= 1.1 } },
  { id: 't2', emoji: '🛣️', name: 'Инфраструктура', desc: '+20% к доходу', cost: 80, req: ['t1'], fx: () => { G.cpsM *= 1.2 } },
  { id: 't3', emoji: '🌱', name: 'Зелёная энергия', desc: '+15% доход', cost: 100, req: ['t2'], fx: () => { G.cpsM *= 1.15 } },
  { id: 't4', emoji: '🤖', name: 'Автоматизация', desc: '+25% доход', cost: 150, req: ['t3'], fx: () => { G.cpsM *= 1.25 } },
  { id: 't5', emoji: '🔬', name: 'Нанотехнологии', desc: '×2 к клику', cost: 200, req: ['t4'], fx: () => { G.clickPower *= 2 } },
  { id: 't6', emoji: '🧠', name: 'ИИ-управление', desc: '+50% доход', cost: 400, req: ['t5'], fx: () => { G.cpsM *= 1.5 } },
  { id: 't7', emoji: '🚢', name: 'Торговые пути', desc: '+15% клик', cost: 80, req: [], fx: () => { G.clickPower *= 1.15 } },
  { id: 't8', emoji: '📰', name: 'Пресс-центр', desc: 'События длиннее', cost: 100, req: ['t7'], fx: () => { G.evtDurBonus = 1.5 } },
  { id: 't9', emoji: '🛡️', name: 'Кризисный штаб', desc: 'Катастрофы короче', cost: 150, req: ['t8'], fx: () => { G.disDurMod = 0.6 } },
];

const ARTIFACTS = [
  { id: 'ar1', emoji: '🧤', name: 'Перчатка Мидаса', desc: '+5% шанс крит. клика (x10)', cost: 5, req: [], fx: () => G.critChance = (G.critChance || 0) + 0.05 },
  { id: 'ar2', emoji: '⏱️', name: 'Хронометр', desc: 'Оффлайн доход 100%', cost: 15, req: ['ar1'], fx: () => G.offlineRate = 1.0 },
  { id: 'ar3', emoji: '🌌', name: 'Конденсатор', desc: 'Множитель пассива x2', cost: 50, req: ['ar2'], fx: () => G.cpsM *= 2 },
];
const ASCENSION_TREE = [
  { id: 'as1', emoji: '✨', name: 'Искра Творения', desc: 'Старт с 1М монет и 100 TP', cost: 1, req: [], fx: () => { G.startCoins = 1000000; G.startTp = 100; } },
  { id: 'as2', emoji: '🖱️', name: 'Автокликер', desc: 'Автоклик 5 раз/сек', cost: 3, req: ['as1'], fx: () => G.autoClicker = 5 },
  { id: 'as3', emoji: '🛡️', name: 'Эгида', desc: 'Иммунитет к бедствиям', cost: 5, req: ['as1'], fx: () => G.disasterImmune = true },
  { id: 'as4', emoji: '⏳', name: 'Повелитель Времени', desc: 'Год пролетает за секунду (x5 ко всему)', cost: 15, req: ['as2', 'as3'], fx: () => { G.cpsM *= 5; G.clickPower *= 5; } },
  { id: 'as5', emoji: '🌌', name: 'Сверхновая', desc: 'x10 к доходу', cost: 50, req: ['as4'], fx: () => G.cpsM *= 10 },
  { id: 'as6', emoji: '🕶️', name: 'Красная Таблетка', desc: 'x20 к клику', cost: 100, req: ['as5'], fx: () => G.clickPower *= 20 },
  { id: 'as7', emoji: '♾️', name: 'Архитектор Матрицы', desc: 'Безграничный рост (x10 ко всему)', cost: 300, req: ['as6'], fx: () => { G.cpsM *= 10; G.clickPower *= 10; } },
];

const EXPEDITIONS = [
  { id: 'ex1', emoji: '🌑', name: 'Пояс Астероидов', desc: 'Добыча 1 Квантового Слитка', duration: 10 * 60, costQI: 0, rewardQI: 1, reqB: 'spacecenter' },
  { id: 'ex2', emoji: '🪐', name: 'Дальний Рубеж', desc: 'Длительное исследование (7 Слитков)', duration: 60 * 60, costQI: 0, rewardQI: 7, reqB: 'station' },
  { id: 'ex3', emoji: '🌌', name: 'Искажение Пространства', desc: 'Прыжок за пределы (60 Слитков)', duration: 8 * 60 * 60, costQI: 0, rewardQI: 60, reqB: 'multigate' },
  { id: 'ex4', emoji: '🕳️', name: 'Галактический Центр', desc: 'Риск и награда (200 Слитков)', duration: 24 * 60 * 60, costQI: 0, rewardQI: 200, reqB: 'starforge' }
];

const RELICS = [
  { id: 'r1', emoji: '⛏️', name: 'Квантовый Бур', desc: '+50% к мощи клика', baseCost: 1, costM: 1.5, fx: (lvl) => { G.clickPower *= (1 + 0.5 * Math.max(0, lvl - 1)) } },
  { id: 'r2', emoji: '💠', name: 'Матрица Творения', desc: '+20% ко всему доходу', baseCost: 2, costM: 1.8, fx: (lvl) => { G.cpsM *= (1 + 0.2 * Math.max(0, lvl - 1)) } },
  { id: 'r3', emoji: '🏭', name: 'Темный Синтезатор', desc: 'Здания дешевле на 1%', baseCost: 5, costM: 2.0, fx: (lvl) => { } }
];

const FACTIONS = [
  { id: 'f1', emoji: '🔬', name: 'Технократы', desc: 'Ученые и инженеры. Скидка на все здания -15%.', fx: () => { } },
  { id: 'f2', emoji: '⚖️', name: 'Торговая Коалиция', desc: 'Деньги правят. +25% к пассивному доходу.', fx: () => { G.cpsM *= 1.25 } },
  { id: 'f3', emoji: '👁️', name: 'Пустотные Поглотители', desc: 'Сила Бездны. Клик сильнее в 3 раза.', fx: () => { G.clickPower *= 3 } }
];

const STOCKS = [
  { id: 's1', name: 'Уран', emoji: '☢️', base: 500, volatility: 0.05, trend: 0 },
  { id: 's2', name: 'Золото', emoji: '🏆', base: 2500, volatility: 0.1, trend: 0 },
  { id: 's3', name: 'Антиматерия', emoji: '⚛️', base: 10000, volatility: 0.2, trend: 0 },
  { id: 'mx', name: 'MatrixCoin', emoji: '🔗', base: 50000, volatility: 0.8, trend: 0 } // Hyper-volatile crypto
];

// ── ADVISORS (GACHA) ───────────────────────────────
const ADVISORS = [
  { id: 'adv1', name: 'Сильвия Торг', emoji: '📈', rarity: 'common', desc: 'Увеличивает доход банков и магазинов на 50%.', fx: () => { } },
  { id: 'adv2', name: 'Генерал Войд', emoji: '⚔️', rarity: 'rare', desc: 'Сила клика по Боссам х5.', fx: () => { } },
  { id: 'adv3', name: 'Мастер Времени', emoji: '⏳', rarity: 'epic', desc: 'Снижает кул-даун всех событий и бедствий на 30%.', fx: () => { } },
  { id: 'adv4', name: 'Док. Эйнхардт', emoji: '🔬', rarity: 'rare', desc: 'Лаборатории приносят +0.1 TP в секунду каждая.', fx: () => { } },
  { id: 'adv5', name: 'Нексус-Омега', emoji: '👁️', rarity: 'epic', desc: 'Повышает базовый доход всех зданий Tier 3 в 2 раза.', fx: () => { } },
  { id: 'adv6', name: 'Строитель-Бот', emoji: '🏗️', rarity: 'common', desc: 'Уменьшает цену всех зданий на 5%.', fx: () => { } },
];
const RARITY_COLORS = { 'common': '#94a3b8', 'rare': '#3b82f6', 'epic': '#a855f7' };

// ── GOD CHALLENGES ─────────────────────────────────
const GOD_CHALLENGES = [
  { id: 'gc1', emoji: '🖐️', name: 'Медленные руки', desc: 'Доход от клика по монете отключен.', rewardDesc: 'Базовая сила клика +1000%' },
  { id: 'gc2', emoji: '💸', name: 'Гиперинфляция', desc: 'Цены на здания растут в 2 раза быстрее.', rewardDesc: 'Глобальная скидка на все здания 15%' },
  { id: 'gc3', emoji: '⚡', name: 'Полное обесточивание', desc: 'Все множители дохода отключены (x1).', rewardDesc: 'Глобальный множитель дохода x3' }
];

// ── ASSETS (AI SPRITES) ────────────────────────────
const SPRITES = {};
BUILDINGS.forEach(b => {
  const img = new Image();
  img.src = `assets/${b.id}.png`;
  SPRITES[b.id] = img;
});

// ── STATE ──────────────────────────────────────────
let G = {
  coins: 0, totalCoins: 0, totalClicks: 0, clickPower: 1, cpsM: 1,
  buildings: BUILDINGS.map(b => ({ id: b.id, count: 0 })), upgrades: [], achievements: [],
  prestige: 0, presM: 1, worldTime: 8, dayCount: 0,
  season: 0, seasonsS: 0,
  quests: [], doneQ: new Set(),
  goldenCoin: null, goldCollected: 0, goldCD: 60,
  disaster: null, disastersW: 0, disCD: 120,
  activeEvent: null, evtCD: 120, evtDurBonus: 1, disDurMod: 1,
  combo: 0, lastClick: 0, bestCombo: 0,
  techPoints: 0, techs: [],
  boss: null, bossCD: 300, bossesDefeated: 0,
  weather: 0, weatherCD: 120,
  dilemmaCD: 240,
  dailyStreak: 0, lastDay: '',
  playTime: 0,
  dm: 0, ts: 0, artifacts: [], ascensions: [],
  qi: 0, bp: 0, expeditions: [], relics: [], faction: null, ascensionTier: 0,
  pet: { active: false, x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, level: 1, xp: 0, energy: 100, wait: 0 },
  stocks: STOCKS.map(s => ({ id: s.id, owned: 0, price: s.base })),
  advisors: [], awakened: [], // Phase 10 Package 2
  activeChallenge: null, completedChallenges: [], // Phase 10 Package 3
  cityGrid: Array(25).fill(null), // Phase 10 Package 3 - Grid Synergy
  cars: [], playerName: '', lastSave: Date.now(),
};

// ── HELPERS ────────────────────────────────────────
const getB = id => { const b = G.buildings.find(x => x.id === id); return b ? b.count : 0 };
const totB = () => G.buildings.reduce((s, b) => s + b.count, 0);
const getA = id => (G.artifacts || []).includes(id);
const getRelic = id => { const r = (G.relics || []).find(x => x.id === id); return r ? r.level : 0 };
const hasAdv = id => (G.advisors || []).includes(id);
const isAwakened = id => (G.awakened || []).includes(id);

const bCost = b => {
  const isTier3 = BUILDINGS.findIndex(x => x.id === b.id) >= 16;
  let mult = isTier3 ? 1.30 : 1.18;
  if (G.activeChallenge === 'gc2') mult = 1 + ((mult - 1) * 2); // Гиперинфляция
  let cost = b.baseCost * Math.pow(mult, getB(b.id));
  if (G.faction === 'f1') cost *= 0.85; // 15% discount for Techno
  let synthDisc = 0;
  const synth = getRelic('r3');
  if (synth > 0) synthDisc += (1 - Math.pow(0.99, synth));
  if ((G.completedChallenges || []).includes('gc2')) synthDisc += 0.15; // Reward
  cost *= (1 - synthDisc);
  if (hasAdv('adv6')) cost *= 0.95; // Строитель-Бот
  return Math.floor(cost);
};
const fmt = n => {
  n = Math.floor(n);
  if (n >= 1e36) return (n / 1e36).toFixed(2) + 'Ud';
  if (n >= 1e33) return (n / 1e33).toFixed(2) + 'Dc';
  if (n >= 1e30) return (n / 1e30).toFixed(2) + 'No';
  if (n >= 1e27) return (n / 1e27).toFixed(2) + 'Oc';
  if (n >= 1e24) return (n / 1e24).toFixed(2) + 'Sp';
  if (n >= 1e21) return (n / 1e21).toFixed(2) + 'Sx';
  if (n >= 1e18) return (n / 1e18).toFixed(2) + 'Qi';
  if (n >= 1e15) return (n / 1e15).toFixed(2) + 'Qa';
  if (n >= 1e12) return (n / 1e12).toFixed(2) + 'T';
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return n + '';
};
function calcCps() {
  let c = BUILDINGS.reduce((s, b) => {
    let bCps = b.baseCps * getB(b.id);

    // Advisors modifiers for specific buildings
    if (hasAdv('adv1') && (b.id === 'bank' || b.id === 'shop')) bCps *= 1.5;
    if (hasAdv('adv4') && b.id === 'lab') G.techPoints += getB('lab') * 0.1 / 10; // add TP roughly per calculation tick
    if (hasAdv('adv5') && BUILDINGS.findIndex(x => x.id === b.id) >= 16) bCps *= 2; // Tier 3

    // Awakened Building 2x modifier
    if (isAwakened(b.id)) bCps *= 2;

    return s + bCps;
  }, 0);

  if (G.activeChallenge === 'gc3') {
    // Условие Полного Обесточивания: Множители не работают
    return c;
  }

  c *= G.cpsM * G.presM * SEASONS[G.season].cpsB * (WEATHER_TYPES[G.weather || 0]?.cpsB || 1);
  if (G.ascensionTier) c *= Math.pow(100, G.ascensionTier);
  if (G.disaster) c *= G.disaster.mult;
  if (G.activeEvent) c *= G.activeEvent.cM;

  if ((G.completedChallenges || []).includes('gc3')) c *= 3; // Награда gc3
  c *= calcGridBonus(); // Бонус Синергии Городской Сетки

  return c;
}

// ── SAVE/LOAD ──────────────────────────────────────
function saveGame(silent = false) {
  G.lastSave = Date.now();
  localStorage.setItem('ccv3', JSON.stringify({ ...G, doneQ: [...G.doneQ] }));
  if (!silent) showToast('💾 Сохранено!');
}
function loadGame() {
  const s = localStorage.getItem('ccv3'); if (!s) {
    if (!G.terminal) G.terminal = { history: ['Система инициализирована...'], bootTime: Date.now() };
    checkDailyBonus();
    return;
  }
  try {
    const d = JSON.parse(s); Object.assign(G, d);
    G.doneQ = new Set(d.doneQ || []);
    BUILDINGS.forEach(b => { if (!G.buildings.find(x => x.id === b.id)) G.buildings.push({ id: b.id, count: 0 }) });
    if (!G.stocks || !G.stocks.length) G.stocks = STOCKS.map(st => ({ id: st.id, owned: 0, price: st.base }));
    G.goldenCoin = null; G.disaster = null; G.activeEvent = null; G.boss = null;
    if (!G.terminal) G.terminal = { history: ['Система восстановлена...'], bootTime: Date.now() };

    const off = Math.min((Date.now() - G.lastSave) / 1000, 8 * 3600);
    if (off > 60) {
      const rate = G.offlineRate || 0.5;
      const e = calcCps() * rate * off; G.coins += e; G.totalCoins += e;
      setTimeout(() => showToast(`💤 Пока тебя не было: +${fmt(e)} монет (${Math.floor(off / 60)} мин)`), 1000);
    }
    checkDailyBonus();
  } catch (e) {
    console.warn('Save error', e);
    if (!G.terminal) G.terminal = { history: ['Ошибка загрузки... Системный сброс.'], bootTime: Date.now() };
    checkDailyBonus();
  }
}

let confirmCallback = null;
function openConfirm(msg, onOk, title = 'Подтверждение') {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMsg').textContent = msg;
  document.getElementById('confirmOverlay').style.display = 'flex';
  confirmCallback = onOk;
}
document.getElementById('confirmOk')?.addEventListener('click', () => {
  document.getElementById('confirmOverlay').style.display = 'none';
  if (confirmCallback) confirmCallback();
  confirmCallback = null;
});
document.getElementById('confirmCancel')?.addEventListener('click', () => {
  document.getElementById('confirmOverlay').style.display = 'none';
  confirmCallback = null;
});

function resetGame(full = true) {
  if (full) {
    if (confirmCallback) return;
    openConfirm('Сбросить весь прогресс?', () => {
      actuallyReset(true);
    }, 'Полный сброс');
    return;
  }
  actuallyReset(full, arguments[1], arguments[2]);
}

function actuallyReset(full, isTierUp, prevPrestige) {
  const isChallenge = arguments[2]; // handle potential 3rd arg
  const oldDm = G.dm || 0, oldArts = G.artifacts || [], oldTs = G.ts || 0, oldAsc = G.ascensions || [];
  const oldPrestige = full ? 0 : (prevPrestige !== undefined ? prevPrestige : (G.prestige || 0));
  const oldPresM = full ? 1 : G.presM || 1;
  const oldDoneQ = full ? new Set() : G.doneQ;
  const startC = G.startCoins || 0, startT = G.startTp || 0;

  // Phase 9 carryovers
  const oldTier = isTierUp ? G.ascensionTier + 1 : (full ? 0 : G.ascensionTier || 0);
  const oldQi = full ? 0 : G.qi || 0;
  const oldExp = full ? [] : G.expeditions || [];
  const oldRelics = full ? [] : G.relics || [];
  const oldFaction = full ? null : G.faction;

  // Phase 10 carryovers
  const oldChal = full ? [] : (G.completedChallenges || []);
  let newActiveChal = null;
  if (isChallenge) newActiveChal = arguments[2];

  if (isTierUp && !full) {
    // Wipe ASCENSIONS when tier up
    G.ascensions = [];
    G.ts = 0;
  }

  localStorage.removeItem('ccv3');
  G = {
    coins: startC, totalCoins: startC, totalClicks: 0, clickPower: 1, cpsM: 1,
    buildings: BUILDINGS.map(b => ({ id: b.id, count: 0 })), upgrades: [], achievements: full ? [] : G.achievements,
    prestige: oldPrestige, presM: oldPresM, worldTime: 8, dayCount: 0, season: 0, seasonsS: full ? 0 : G.seasonsS,
    quests: [], doneQ: oldDoneQ, goldenCoin: null, goldCollected: full ? 0 : G.goldCollected, goldCD: 60,
    disaster: null, disastersW: full ? 0 : G.disastersW, disCD: 120, activeEvent: null, evtCD: 120,
    evtDurBonus: 1, disDurMod: 1, combo: 0, lastClick: 0, bestCombo: full ? 0 : G.bestCombo,
    techPoints: startT, techs: [], cars: [], playerName: G.playerName, lastSave: Date.now(),
    boss: null, bossCD: 300, bossesDefeated: full ? 0 : G.bossesDefeated, weather: 0, weatherCD: 120, dilemmaCD: 240,
    dailyStreak: G.dailyStreak, lastDay: G.lastDay, playTime: full ? 0 : G.playTime,
    dm: oldDm, artifacts: oldArts, ts: isTierUp ? 0 : oldTs, ascensions: isTierUp ? [] : oldAsc,
    qi: oldQi, bp: 0, expeditions: oldExp, relics: oldRelics, faction: oldFaction, ascensionTier: oldTier,
    stocks: STOCKS.map(s => ({ id: s.id, owned: 0, price: s.base })),
    advisors: full ? [] : (G.advisors || []),
    awakened: full ? [] : (G.awakened || []),
    activeChallenge: full ? null : newActiveChal,
    completedChallenges: full ? [] : oldChal,
    cityGrid: full ? Array(25).fill(null) : (G.cityGrid || Array(25).fill(null)),
    conquest: full ? PLANETS.map(p => ({ id: p.id, influence: 0, conquered: false, fleetTimer: 0 })) : (G.conquest || PLANETS.map(p => ({ id: p.id, influence: 0, conquered: false, fleetTimer: 0 }))),
    terminal: { history: [full ? 'Система инициализирована после сброса...' : 'Система перезагружена...'], bootTime: Date.now() }
  };
  ARTIFACTS.forEach(a => { if (G.artifacts.includes(a.id)) a.fx() });
  ASCENSION_TREE.forEach(a => { if (G.ascensions.includes(a.id)) a.fx() });
  if (G.faction) { const f = FACTIONS.find(x => x.id === G.faction); if (f) f.fx(); }
  RELICS.forEach(r => { const rl = getRelic(r.id); if (rl > 0) { r.fx(rl); } });

  if (isTierUp) {
    G.prestige = 0; G.presM = 1; G.dm = 0; G.artifacts = []; G.doneQ = new Set();
  }

  initQuests(); renderAll(); if (full) showToast('🔄 Сброшено');
}

// ── TOAST ──────────────────────────────────────────
let tQ = [], tBusy = false;
function showToast(m) { tQ.push(m); if (!tBusy) flushT(); }
function flushT() { if (!tQ.length) { tBusy = false; return; } tBusy = true; const t = document.getElementById('toast'); t.textContent = tQ.shift(); t.classList.add('show'); setTimeout(() => { t.classList.remove('show'); setTimeout(flushT, 350); }, 2000); }

// ── FLOAT NUMBERS ──────────────────────────────────
function spawnFloat(x, y, n, col = '') {
  const fc = document.getElementById('floatContainer');
  const el = document.createElement('div'); el.className = 'float-num';
  el.textContent = '+' + fmt(n); if (col) el.style.color = col;
  el.style.left = (x - 20 + Math.random() * 40) + 'px'; el.style.top = (y - 20) + 'px';
  fc.appendChild(el); setTimeout(() => el.remove(), 1300);
}

// ── DAILY BONUS ────────────────────────────────────
function checkDailyBonus() {
  const today = new Date().toDateString();
  if (G.lastDay === today) return;
  const lastDate = G.lastDay ? new Date(G.lastDay) : null;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  G.dailyStreak = (lastDate && lastDate.toDateString() === yesterday.toDateString()) ? (G.dailyStreak || 0) + 1 : 1;
  G.lastDay = today;
  const bonus = Math.floor(100 * Math.pow(2, Math.min(G.dailyStreak - 1, 7)) * (1 + G.prestige * 0.5));
  G.coins += bonus; G.totalCoins += bonus;
  const ol = document.getElementById('dailyOverlay');
  if (ol) {
    document.getElementById('dailyIcon').textContent = G.dailyStreak >= 7 ? '🏆' : G.dailyStreak >= 3 ? '🎁' : '🎉';
    document.getElementById('dailyDesc').textContent = `+${fmt(bonus)} монет за вход!`;
    document.getElementById('dailyStreakDisp').textContent = `🔥 Серия: ${G.dailyStreak} день${G.dailyStreak >= 5 ? ' — отличная серия!' : G.dailyStreak >= 2 ? ' подряд' : ''}`;
    ol.style.display = 'flex';
  }
  const sb = document.getElementById('streakBadge');
  if (sb) { sb.style.display = 'flex'; document.getElementById('streakCount').textContent = G.dailyStreak; }
  checkAchievements();
}

// ── CONFETTI ───────────────────────────────────────
const CONF_EMOJIS = ['🎊', '🎉', '⭐', '✨', '🌟', '💫', '🪙', '💰'];
function spawnConfetti(x, y) {
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('div'); el.className = 'confetti-p';
    el.textContent = CONF_EMOJIS[Math.floor(Math.random() * CONF_EMOJIS.length)];
    el.style.left = (x + (-60 + Math.random() * 120)) + 'px';
    el.style.top = (y + (-30 + Math.random() * 30)) + 'px';
    el.style.animationDelay = (Math.random() * 0.3) + 's';
    el.style.fontSize = (0.7 + Math.random() * 0.9) + 'rem';
    document.body.appendChild(el); setTimeout(() => el.remove(), 1800);
  }
}

// ── EVENT HELPER ───────────────────────────────────
function startEv(name, emoji, cM, kM, dur) {
  G.activeEvent = { name, emoji, cM, kM, timeLeft: dur * (G.evtDurBonus || 1) };
  document.getElementById('eventEmoji').textContent = emoji;
  document.getElementById('eventText').textContent = name;
  document.getElementById('eventBanner').style.display = 'flex';
}

// ── WEATHER ────────────────────────────────────────
function tickWeather(dt) {
  G.weatherCD -= dt;
  if (G.weatherCD <= 0) {
    G.weather = Math.floor(Math.random() * WEATHER_TYPES.length);
    G.weatherCD = 120 + Math.random() * 180;
    const w = WEATHER_TYPES[G.weather]; showToast(`${w.emoji} Погода: ${w.name}`);
  }
}

// ── DILEMMA ────────────────────────────────────────
function showDilemma(d) {
  const ol = document.getElementById('dilemmaOverlay'); if (!ol) return;
  document.getElementById('dilemmaQ').textContent = d.q;
  const opts = document.getElementById('dilemmaOpts'); opts.innerHTML = '';
  d.opts.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn-dilemma ' + (i === 0 ? 'btn-accept' : 'btn-reject');
    btn.textContent = o.t;
    btn.addEventListener('click', () => { o.fx(); ol.style.display = 'none'; Audio.sfxPurchase(); });
    opts.appendChild(btn);
  });
  ol.style.display = 'flex';
}
function tickDilemma(dt) {
  G.dilemmaCD = (G.dilemmaCD || 240) - dt;
  if (G.dilemmaCD <= 0) {
    if (totB() >= 5 && Math.random() < 0.5 && !G.boss) {
      showDilemma(DILEMMAS[Math.floor(Math.random() * DILEMMAS.length)]);
    }
    G.dilemmaCD = 180 + Math.random() * 180;
  }
}


// ── COMBO ──────────────────────────────────────────
let comboTimeout = null;
function updateCombo() {
  const el = document.getElementById('comboDisplay'); if (!el) return;
  if (G.combo <= 1) { el.classList.remove('show'); return; }
  el.classList.add('show'); el.textContent = `×${G.combo} COMBO!`;
  el.style.color = G.combo >= 4 ? '#ff6b6b' : G.combo >= 3 ? '#f6c30a' : '#10b981';
}

function handleClick(e) {
  Audio.init(); Audio.startMusic();

  if (G.activeChallenge === 'gc1') {
    // Медленные руки - клик отключен
    spawnFloat(e.clientX, e.clientY, 0, '#94a3b8');
    return;
  }

  const baseT = G.ascensionTier ? Math.pow(100, G.ascensionTier) : 1;
  let m = (G.clickPower + Math.max(0, calcCps() * 0.02)) * (G.presM * 1.1) * SEASONS[G.season].clickB * (WEATHER_TYPES[G.weather || 0]?.clickB || 1) * baseT;
  if ((G.completedChallenges || []).includes('gc1')) m *= 11; // Бонус за Испытание gc1 (+1000%)

  const isCrit = (G.critChance > 0) && (Math.random() < G.critChance);
  const finM = m * (isCrit ? 10 : 1);

  G.coins += finM; G.totalCoins += finM; G.totalClicks++;

  const now = Date.now();
  if (now - G.lastClick < 400) G.combo++; else G.combo = 0;
  G.lastClick = now;
  G.bestCombo = Math.max(G.bestCombo || 0, G.combo);

  if (G.combo > 10) { G.coins += finM * 0.1; const cd = document.getElementById('comboDisplay'); if (cd) { cd.textContent = `Комбо х${G.combo}!`; cd.style.color = `hsl(${G.combo * 5},100%,60%)`; cd.classList.add('show'); clearTimeout(G.ct); G.ct = setTimeout(() => cd.classList.remove('show'), 1500); } }

  const r = document.getElementById('coinBtn').getBoundingClientRect();
  const ox = Math.random() * 20 - 10, oy = Math.random() * 20 - 10;
  spawnFloat(r.left + r.width / 2 + ox, r.top + r.height / 2 + oy, finM, isCrit ? '#ff00ff' : '');

  Audio.sfxClick(); if (isCrit) Audio.sfxPrestige();
  updateHUD(); checkAchievements();
}

// ── BUY BUILDING ───────────────────────────────────
function buyBuilding(id) {
  const bDef = BUILDINGS.find(b => b.id === id); const cost = bCost(bDef);
  if (G.coins < cost) { showToast('❌ Недостаточно монет!'); return; }
  Audio.sfxPurchase(); G.coins -= cost; G.buildings.find(b => b.id === id).count++;
  syncCars(); renderBuildings(); renderCity(); updateHUD(); checkAchievements(); updateQuests();
  const el = document.querySelector(`[data-id="${id}"]`);
  if (el) {
    el.classList.add('purchased-glow'); setTimeout(() => el.classList.remove('purchased-glow'), 500);
    const r = el.getBoundingClientRect(); spawnConfetti(r.left + r.width / 2, r.top);
  }
  showToast(`✅ Построен: ${bDef.name}`);
}
function buyUpgrade(id) {
  const u = UPGRADES.find(x => x.id === id); if (!u || G.upgrades.includes(id)) return;
  if (G.coins < u.cost) { showToast('❌ Недостаточно монет!'); return; }
  G.coins -= u.cost; G.upgrades.push(id); u.effect();
  renderUpgrades(); updateHUD(); checkAchievements(); showToast(`⚡ ${u.name}`);
}

function checkAchievements() {
  ACHIEVEMENTS.forEach(a => {
    if (!G.achievements.includes(a.id) && a.cond()) {
      G.achievements.push(a.id); Audio.sfxAchievement();
      const hidden = a.secret ? '🔮 Секретное достижение: ' : '🏆 ';
      showToast(`${hidden}${a.name}!`);
      const ab = document.getElementById('coinBtn');
      if (ab) { const r = ab.getBoundingClientRect(); spawnConfetti(r.left + r.width / 2, r.top + r.height / 2); }
      renderAchievements();
    }
  });
}

// ── QUESTS ─────────────────────────────────────────
function initQuests() {
  G.quests = QUEST_POOL.filter(q => !G.doneQ.has(q.id)).slice(0, 3).map(q => q.id); renderQuests();
}
function qProgress(qId) {
  const q = QUEST_POOL.find(x => x.id === qId); if (!q) return { cur: 0, max: 1 };
  const cur = { clicks: G.totalClicks, earn: G.totalCoins, build: totB(), specific: getB(q.bId || '') }[q.type] || 0;
  return { cur: Math.min(cur, q.target), max: q.target };
}
function updateQuests() {
  let ch = false;
  G.quests.forEach(qId => {
    const q = QUEST_POOL.find(x => x.id === qId); if (!q) return;
    const { cur, max } = qProgress(qId);
    if (cur >= max && !G.doneQ.has(qId)) {
      G.doneQ.add(qId); G.coins += q.reward; G.totalCoins += q.reward;
      Audio.sfxQuestComplete(); showToast(`📋 ${q.name}! +${fmt(q.reward)}🪙`);
      checkAchievements(); ch = true;
    }
  });
  if (ch) {
    const avail = QUEST_POOL.filter(q => !G.doneQ.has(q.id) && !G.quests.includes(q.id));
    G.quests = G.quests.map(qId => G.doneQ.has(qId) ? (avail.shift()?.id || qId) : qId);
  }
  renderQuests();
}
function renderQuests() {
  const list = document.getElementById('questsList'); list.innerHTML = '';
  G.quests.forEach(qId => {
    const q = QUEST_POOL.find(x => x.id === qId); if (!q) return;
    const { cur, max } = qProgress(qId); const pct = Math.min(100, Math.round(cur / max * 100));
    const done = G.doneQ.has(qId);
    const el = document.createElement('div'); el.className = 'quest-item' + (done ? ' complete' : '');
    el.innerHTML = `<div class="quest-header"><div class="quest-name">${done ? '✅ ' : ''}${q.name}</div><div class="quest-reward">🪙+${fmt(q.reward)}</div></div><div class="quest-desc">${q.desc}</div><div class="quest-bar-wrap"><div class="quest-bar" style="width:${pct}%"></div></div><div class="quest-progress-text">${fmt(cur)}/${fmt(max)}</div>`;
    list.appendChild(el);
  });
}

// ── PRESTIGE ───────────────────────────────────────
function checkPrestige() {
  if (G.totalCoins >= 1e6 || (G.prestige > 0 && G.totalCoins >= Math.pow(5, G.prestige) * 50000)) {
    document.getElementById('prestigeCard').style.display = 'block';
    document.getElementById('prestigeMult').textContent = 'x' + (G.presM * 1.25).toFixed(2);
  }
}
function doPrestige() {
  if (!confirm(`Престиж ${G.prestige + 1}? Прогресс сбросится, получишь +25% к доходу навсегда!\nНовый бонус: x${(G.presM * 1.25).toFixed(2)}`)) return;
  Audio.sfxPrestige(); saveToLeaderboard();
  const nm = G.presM * 1.25, np = G.prestige + 1, n = G.playerName, gc = G.goldCollected, dw = G.disastersW, ss = G.seasonsS;
  G = {
    coins: 0, totalCoins: 0, totalClicks: 0, clickPower: 1, cpsM: 1,
    buildings: BUILDINGS.map(b => ({ id: b.id, count: 0 })), upgrades: [], achievements: [...G.achievements],
    prestige: np, presM: nm, worldTime: 8, dayCount: 0, season: 0, seasonsS: ss,
    quests: [], doneQ: new Set(), goldenCoin: null, goldCollected: gc, goldCD: 30,
    disaster: null, disastersW: dw, disCD: 120, activeEvent: null, evtCD: 120,
    evtDurBonus: 1, disDurMod: 1, combo: 0, lastClick: 0, bestCombo: G.bestCombo,
    techPoints: G.techPoints, techs: [...G.techs], cars: [], playerName: n, lastSave: Date.now(),
    boss: null, bossCD: 300, bossesDefeated: G.bossesDefeated, weather: 0, weatherCD: 120, dilemmaCD: 240,
    dailyStreak: G.dailyStreak, lastDay: G.lastDay, playTime: G.playTime,
    dm: G.dm || 0, artifacts: G.artifacts || [], ts: G.ts || 0, ascensions: G.ascensions || []
  };
  initQuests(); renderAll(); document.getElementById('prestigeCard').style.display = 'none';
  document.getElementById('prestigeBadge').style.display = 'flex';
  document.getElementById('prestigeCount').textContent = np;
  showToast(`✨ Престиж ${np}! Бонус: x${nm.toFixed(2)}`);
}

// ── ASCENSION ──────────────────────────────────────
function doAscension() {
  const tsEarned = Math.floor(G.prestige / 5);
  if (tsEarned <= 0) { showToast('Слишком рано для Вознесения (нужен Престиж 5+)'); return; }
  if (!confirm(`🌌 ВОЗНЕСЕНИЕ 🌌\n\nВы потеряете ВСЁ (включая Тёмную Материю и Артефакты), но получите ${tsEarned} Осколков Времени (⏳) для развития Божественного Древа.\n\nПродолжить?`)) return;
  const tsTotal = (G.ts || 0) + tsEarned;
  const oldAsc = G.ascensions || [];
  resetGame(true); // Full wipe
  G.ts = tsTotal; G.ascensions = oldAsc; // Restore ascension progress
  document.getElementById('ascensionCard').style.display = 'none';
  showToast(`🌌 Вознесение завершено! Получено ${tsEarned} ⏳.`);
  updateHUD(); saveGame();
}

// ── DISASTERS ──────────────────────────────────────
function triggerDisaster() {
  if (G.disaster || totB() < 3) return;
  const d = DISASTERS[Math.floor(Math.random() * DISASTERS.length)];
  G.disaster = { ...d, timeLeft: d.duration * (G.disDurMod || 1) };
  Audio.sfxDisaster(); showToast(`${d.emoji} ${d.name}: ${d.msg}`);
  const b = document.getElementById('disasterBanner');
  document.getElementById('disasterEmoji').textContent = d.emoji;
  document.getElementById('disasterText').textContent = d.name + ' — ' + d.msg;
  b.style.display = 'flex';
}
function tickDisaster(dt) {
  if (!G.disaster) { G.disCD -= dt; if (G.disCD <= 0) { if (Math.random() < 0.4 * SEASONS[G.season].disR) triggerDisaster(); G.disCD = 90 + Math.random() * 90; } return; }
  G.disaster.timeLeft -= dt;
  const t = document.getElementById('disasterTimer'); if (t) t.textContent = Math.ceil(G.disaster.timeLeft) + 'с';
  if (G.disaster.timeLeft <= 0) { G.disastersW++; G.disaster = null; document.getElementById('disasterBanner').style.display = 'none'; showToast('✅ Бедствие преодолено!'); G.disCD = 90 + Math.random() * 90; checkAchievements(); }
}

// ── EVENTS ─────────────────────────────────────────
function triggerEvent() {
  const ev = EVENT_POOL[Math.floor(Math.random() * EVENT_POOL.length)];
  G.activeEvent = { ...ev, timeLeft: ev.duration * (G.evtDurBonus || 1) };
  const b = document.getElementById('eventBanner');
  document.getElementById('eventEmoji').textContent = ev.emoji;
  document.getElementById('eventText').textContent = ev.name + ': ' + ev.desc;
  b.style.display = 'flex'; showToast(`${ev.emoji} ${ev.name}: ${ev.desc}`);
}
function tickEvent(dt) {
  if (!G.activeEvent) { G.evtCD -= dt; if (G.evtCD <= 0) { if (Math.random() < 0.55) triggerEvent(); G.evtCD = 120 + Math.random() * 120; } return; }
  G.activeEvent.timeLeft -= dt;
  const t = document.getElementById('eventTimer'); if (t) t.textContent = Math.ceil(G.activeEvent.timeLeft) + 'с';
  if (G.activeEvent.timeLeft <= 0) { G.activeEvent = null; document.getElementById('eventBanner').style.display = 'none'; showToast('📰 Событие завершилось.'); }
}

// ── GOLDEN COIN ────────────────────────────────────
function tickGold(dt) {
  if (!G.goldenCoin) { G.goldCD -= dt; if (G.goldCD <= 0) { if (totB() >= 1 && Math.random() < 1.2 * SEASONS[G.season].goldR) spawnGold(); G.goldCD = 60 + Math.random() * 60; } return; }
  G.goldenCoin.timeLeft -= dt; if (G.goldenCoin.timeLeft <= 0) { G.goldenCoin = null; showToast('💨 Золотая монета исчезла!'); }
}
function spawnGold() {
  G.goldenCoin = { x: 0.15 + Math.random() * 0.7, y: 0.12 + Math.random() * 0.45, timeLeft: 8, mult: 10 + G.prestige * 5 };
  Audio.sfxGoldenSpawn(); showToast('✨ Золотая монета! Кликни быстро!');
}
function collectGold(cx, cy) {
  if (!G.goldenCoin) return false;
  const gc = G.goldenCoin, W = canvas.width, H = canvas.height;
  if (Math.hypot(cx - gc.x * W, cy - gc.y * H) > 60) return false;
  const e = Math.floor(Math.max(1, calcCps()) * gc.mult * 5 + G.clickPower * 20);
  G.coins += e; G.totalCoins += e; G.goldCollected++; G.goldenCoin = null; G.goldCD = 60 + Math.random() * 60;
  Audio.sfxGoldenCollect(); spawnFloat(cx, cy, e, '#ffd700');
  let dmDrop = 0;
  if (G.prestige >= 2 && Math.random() < 0.2) {
    dmDrop = 1 + Math.floor(Math.random() * 2);
    G.dm = (G.dm || 0) + dmDrop;
  }
  showToast(`⭐ +${fmt(e)} монет!${dmDrop > 0 ? ` И +${dmDrop} 🌌 Тёмной Материи!` : ''}`);
  checkAchievements(); updateHUD(); return true;
}

// ── BOSS SYSTEM ────────────────────────────────────
function updateBossBar() {
  if (!G.boss) return;
  const b = document.getElementById('bossBar'); if (!b) return;
  b.querySelector('.boss-name').textContent = G.boss.name;
  b.querySelector('.boss-hp-fill').style.width = (G.boss.curHp / G.boss.hp * 100) + '%';
  b.querySelector('.boss-hp-text').textContent = G.boss.curHp + '/' + G.boss.hp;
}
function spawnBoss() {
  if (G.boss || totB() < 5) return;
  const bd = BOSSES[Math.floor(Math.random() * BOSSES.length)];
  const scaledHp = Math.max(bd.hp, Math.floor(bd.hp * (1 + G.prestige * 0.5)));
  const scaledReward = Math.max(bd.reward, Math.floor(bd.reward * G.presM * SEASONS[G.season].cpsB));
  G.boss = { ...bd, hp: scaledHp, curHp: scaledHp, reward: scaledReward, x: 0.35 + Math.random() * 0.3, y: 0.12 + Math.random() * 0.28, r: 38, timeLeft: 40 };
  Audio.sfxDisaster(); showToast(`⚔️ Boss: ${bd.name}! Кликай по нему на холсте!`);
  document.getElementById('bossBar').style.display = 'flex'; updateBossBar();
}
function hitBoss(cx, cy) {
  if (!G.boss) return false;
  const W = canvas.width, H = canvas.height;
  if (Math.hypot(cx - G.boss.x * W, cy - G.boss.y * H) > G.boss.r + 15) return false;
  const dmg = Math.max(1, Math.floor(G.clickPower / 10) || 1);
  G.boss.curHp = Math.max(0, G.boss.curHp - dmg); Audio.sfxClick();
  if (G.boss.curHp <= 0) {
    const rew = G.boss.reward; G.coins += rew; G.totalCoins += rew; G.bossesDefeated = (G.bossesDefeated || 0) + 1;
    let dmDrop = 0;
    if (G.prestige >= 1) {
      dmDrop = 2 + Math.floor(Math.random() * 4) * (G.prestige || 1);
      if (dmDrop > 0) G.dm = (G.dm || 0) + dmDrop;
    }
    spawnFloat(G.boss.x * W, G.boss.y * H, rew, '#ff6b6b');
    showToast(`💥 ${G.boss.name} побеждён! +${fmt(rew)} монет!${dmDrop > 0 ? ` И +${dmDrop} 🌌!` : ''}`);
    Audio.sfxPrestige(); G.boss = null; G.bossCD = 200 + Math.random() * 200;
    document.getElementById('bossBar').style.display = 'none';
    checkAchievements(); updateHUD();
  } else updateBossBar();
  return true;
}
function tickBoss(dt) {
  if (!G.boss) {
    G.bossCD = (G.bossCD || 300) - dt;
    if (G.bossCD <= 0) { if (totB() >= 5 && Math.random() < 0.5) spawnBoss(); G.bossCD = 200 + Math.random() * 200; }
    return;
  }
  G.boss.timeLeft -= dt;
  if (G.boss.timeLeft <= 0) { showToast(`💨 ${G.boss.name} сбежал!`); G.boss = null; G.bossCD = 120 + Math.random() * 120; document.getElementById('bossBar').style.display = 'none'; }
}

// ── STATS / EXPORT / IMPORT ────────────────────────
function showStats() {
  const s = document.getElementById('statsContent'); if (!s) return;
  const m = Math.floor((G.playTime || 0) / 60), sec = Math.floor((G.playTime || 0) % 60);
  s.innerHTML = [
    ['🪙 Всего заработано', fmt(G.totalCoins)],
    ['🖱️ Всего кликов', fmt(G.totalClicks)],
    ['⚡ Доход/сек', fmt(calcCps())],
    ['💥 Лучшее комбо', '×' + (G.bestCombo || 1)],
    ['🏗️ Зданий построено', fmt(totB())],
    ['📋 Квестов выполнено', G.doneQ.size],
    ['🔬 Технологий изучено', G.techs.length],
    ['✨ Престижи', G.prestige],
    ['🌊 Бедствий пережито', G.disastersW],
    ['👹 Боссов побеждено', G.bossesDefeated || 0],
    ['⭐ Золотых монет', G.goldCollected],
    ['⏱️ Время в игре', m + 'м ' + sec + 'с'],
  ].map(([l, v]) => `<div class="stat-row"><span>${l}</span><span>${v}</span></div>`).join('');
  document.getElementById('statsOverlay').style.display = 'flex';
}
function exportSave() {
  G.lastSave = Date.now();
  const s = JSON.stringify({ ...G, doneQ: [...G.doneQ] });
  const encoded = btoa(unescape(encodeURIComponent(s)));
  if (navigator.clipboard) { navigator.clipboard.writeText(encoded).then(() => showToast('📋 Сохранение скопировано в буфер!')); }
  else { prompt('Скопируй код сохранения:', encoded); }
}
function importSave() {
  const txt = prompt('Вставь код сохранения:'); if (!txt) return;
  try {
    const d = JSON.parse(decodeURIComponent(escape(atob(txt.trim()))));
    Object.assign(G, d); G.doneQ = new Set(d.doneQ || []); G.boss = null;
    BUILDINGS.forEach(b => { if (!G.buildings.find(x => x.id === b.id)) G.buildings.push({ id: b.id, count: 0 }) });
    renderAll(); showToast('✅ Сохранение загружено!');
  } catch (e) { showToast('❌ Ошибка импорта — неверный код!'); }
}

// ── TECH TREE ──────────────────────────────────────
function techStatus(t) {
  if (G.techs.includes(t.id)) return 'done';
  if (t.req.every(r => G.techs.includes(r)) && G.techPoints >= t.cost) return 'available';
  if (t.req.every(r => G.techs.includes(r))) return 'locked'; // has deps but no TP
  return 'locked';
}
function buyTech(id) {
  const t = TECH_TREE.find(x => x.id === id); if (!t || G.techs.includes(id)) return;
  if (!t.req.every(r => G.techs.includes(r))) { showToast('🔒 Сначала изучи требуемые технологии!'); return; }
  if (G.techPoints < t.cost) { showToast(`❌ Нужно ${t.cost} TP (у тебя ${fmt(G.techPoints)})`); return; }
  G.techPoints -= t.cost; G.techs.push(id); t.fx();
  renderTechGrid(); updateHUD(); checkAchievements(); showToast(`🔬 Изучено: ${t.name}`);
}
function renderGrid(tGrid, uList, modalPts, gridId, costLabel, buyFn) {
  const grid = document.getElementById(gridId); if (!grid) return; grid.innerHTML = '';
  document.getElementById(modalPts).textContent = fmt(uList === G.ascensions ? (G.ts || 0) : uList === G.artifacts ? (G.dm || 0) : G.techPoints);
  tGrid.forEach(t => {
    const done = uList.includes(t.id);
    let st = 'locked';
    if (done) st = 'done';
    else if (t.req.every(r => uList.includes(r))) {
      const pts = uList === G.ascensions ? (G.ts || 0) : uList === G.artifacts ? (G.dm || 0) : G.techPoints;
      st = pts >= t.cost ? 'available' : 'locked';
    }
    const el = document.createElement('div'); el.className = `tech-card ${st}`;
    const reqNames = t.req.map(r => tGrid.find(x => x.id === r)?.name || r).join(', ');
    el.innerHTML = `<div class="tech-status-badge ${st}">${done ? '✅' : '🔒 ' + t.cost + costLabel}</div><div class="tech-card-emoji">${t.emoji}</div><div class="tech-card-name">${t.name}</div><div class="tech-card-desc">${t.desc}</div><div class="tech-card-cost">${done ? 'Изучено' : '💎 ' + t.cost + costLabel}</div>${t.req.length ? `<div class="tech-card-req">Требует: ${reqNames}</div>` : ''}`;
    if (!done && st !== 'locked' || st === 'available') el.addEventListener('click', () => buyFn(t.id));
    grid.appendChild(el);
  });
}
function renderTechGrid() { renderGrid(TECH_TREE, G.techs, 'techPtsModal', 'techGrid', ' TP', buyTech); }
function buyArtifact(id) {
  const a = ARTIFACTS.find(x => x.id === id); if (!a || (G.artifacts || []).includes(id)) return;
  if (!a.req.every(r => (G.artifacts || []).includes(r))) { showToast('🔒 Сначала изучи требуемые!'); return; }
  if ((G.dm || 0) < a.cost) { showToast(`❌ Нужно ${a.cost} 🌌 Темной Материи`); return; }
  G.dm -= a.cost; G.artifacts = (G.artifacts || []); G.artifacts.push(id); a.fx();
  renderArtifactsGrid(); updateHUD(); showToast(`🌌 Артефакт получен: ${a.name}`);
}
function renderArtifactsGrid() { renderGrid(ARTIFACTS, G.artifacts || [], 'dmPtsModal', 'artifactsGrid', ' 🌌', buyArtifact); }
function buyAscension(id) {
  const a = ASCENSION_TREE.find(x => x.id === id); if (!a || (G.ascensions || []).includes(id)) return;
  if (!a.req.every(r => (G.ascensions || []).includes(r))) { showToast('🔒 Сначала изучи требуемые!'); return; }
  if ((G.ts || 0) < a.cost) { showToast(`❌ Нужно ${a.cost} ⏳ Осколков Времени`); return; }
  G.ts -= a.cost; G.ascensions = (G.ascensions || []); G.ascensions.push(id); a.fx();
  renderAscensionGrid(); updateHUD(); showToast(`⏳ Навык вознесения: ${a.name}`);
}
function renderAscensionGrid() { renderGrid(ASCENSION_TREE, G.ascensions || [], 'tsPtsModal', 'ascensionGrid', ' ⏳', buyAscension); }

// ── CARS ───────────────────────────────────────────
const CAR_COLORS = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#ecf0f1'];
function syncCars() {
  const need = Math.min(8, 1 + Math.floor(totB() / 5));
  while (G.cars.length < need) { const d = Math.random() > 0.5 ? 1 : -1; G.cars.push({ x: d > 0 ? -60 : canvas.width + 60, speed: 0.6 + Math.random() * 1.2, dir: d, color: CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)], w: 22 + Math.random() * 12, h: 11, lane: Math.random() > 0.5 ? 0 : 1 }); }
  if (G.cars.length > need) G.cars = G.cars.slice(0, need);
}
function updateCars() { G.cars.forEach(c => { c.x += c.speed * c.dir; const W = canvas.width; if (c.dir > 0 && c.x > W + 80) c.x = -70; if (c.dir < 0 && c.x < -80) c.x = W + 70; }); }

// ── HUD ────────────────────────────────────────────
function updateHUD() {
  document.getElementById('coinCount').textContent = fmt(G.coins);
  document.getElementById('cpsCount').textContent = fmt(calcCps());
  document.getElementById('coinsPerClick').textContent = fmt(G.clickPower);
  document.getElementById('techPts').textContent = fmt(G.techPoints);
  const total = totB();
  document.getElementById('population').textContent = fmt(total * 47 + total * total * 3);
  document.getElementById('cityLevel').textContent = Math.max(1, Math.floor(1 + total / 5));
  const h = Math.floor(G.worldTime);
  const icon = G.worldTime < 6 || G.worldTime >= 20 ? '🌙' : G.worldTime < 8 || G.worldTime >= 18 ? '🌅' : '☀️';
  document.getElementById('timeDisplay').textContent = `${icon} ${h}:00`;
  const s = SEASONS[G.season];
  document.getElementById('seasonDisplay').textContent = `${s.emoji} ${s.name}`;
  const w = WEATHER_TYPES[G.weather || 0];
  const wd = document.getElementById('weatherDisplay'); if (wd) wd.textContent = `${w.emoji} ${w.name}`;
  if (G.prestige > 0) { document.getElementById('prestigeBadge').style.display = 'flex'; document.getElementById('prestigeCount').textContent = G.prestige; document.getElementById('prestigeMult').textContent = 'x' + G.presM.toFixed(2); }
  if ((G.dailyStreak || 0) > 0) { const sb = document.getElementById('streakBadge'); if (sb) { sb.style.display = 'flex'; document.getElementById('streakCount').textContent = G.dailyStreak; } }

  // DM and TS
  if (G.dm > 0 || G.ts > 0 || G.prestige >= 2) {
    document.getElementById('dmBadge').style.display = 'flex';
    document.getElementById('dmCount').textContent = fmt(G.dm || 0);
    document.getElementById('artifactsBtn').style.display = 'block';
  }
  if (G.ts > 0 || G.prestige >= 5) {
    document.getElementById('tsBadge').style.display = 'flex';
    document.getElementById('tsCount').textContent = fmt(G.ts || 0);
    document.getElementById('ascensionCard').style.display = 'block';
  } else {
    document.getElementById('ascensionCard').style.display = 'none';
  }

  if (totB() > 0 && (getB('spacecenter') > 0 || G.ascensionTier > 0 || G.qi > 0)) {
    document.getElementById('expeditionsBtn').style.display = 'block';
    if (G.qi > 0) {
      document.getElementById('qiBadge').style.display = 'flex';
      document.getElementById('qiCount').textContent = fmt(G.qi);
    }
  }

  checkPrestige();
}

// ── RENDER SHOP ────────────────────────────────────
function renderBuildings() {
  const list = document.getElementById('buildingsList'); list.innerHTML = '';
  BUILDINGS.forEach(b => {
    const cnt = getB(b.id), cost = bCost(b), cpe = b.baseCps * G.cpsM * G.presM * (isAwakened(b.id) ? 2 : 1) * (hasAdv('adv5') && BUILDINGS.findIndex(x => x.id === b.id) >= 16 ? 2 : 1);
    const canAwaken = cnt >= 100 && !isAwakened(b.id);
    const isAwaken = isAwakened(b.id);
    const affordable = Math.floor(G.coins) >= Math.floor(cost);
    const el = document.createElement('div'); el.className = 'building-item' + (affordable ? '' : ' unaffordable') + (isAwaken ? ' awakened-bg' : ''); el.setAttribute('data-id', b.id);

    let wBtn = '';
    if (canAwaken) {
      wBtn = `<button class="btn-invest" style="margin-top:5px; background:#a855f7; border-color:#d946ef;" onclick="event.stopPropagation(); awakenBuilding('${b.id}')">Пробудить (100 ⏳)</button>`;
    } else if (isAwaken) {
      wBtn = `<div style="color:#d946ef; font-size:11px; margin-top:5px; font-weight:bold;">✨ ПРОБУЖДЕНО (+100% ДОХОДА)</div>`;
    }

    el.innerHTML = `<div class="building-emoji">${b.emoji}</div><div class="building-details"><div class="building-name">${b.name}</div><div class="building-desc">${b.desc}</div><div class="building-income">+${fmt(cpe)}/сек</div>${wBtn}</div><div class="building-right"><div class="building-cost">💰 ${fmt(cost)}</div><div class="building-count">Куплено: <span>${cnt}</span></div></div>`;
    el.addEventListener('click', () => buyBuilding(b.id)); list.appendChild(el);
  });
}
function awakenBuilding(id) {
  if ((G.ts || 0) < 100) { showToast('❌ Нужно 100 Осколков Времени (⏳)!'); return; }
  if (!confirm('Пробудить это здание? Оно получит двойной доход и неоновую ауру!')) return;
  G.ts -= 100;
  if (!G.awakened) G.awakened = [];
  G.awakened.push(id);
  Audio.sfxPrestige();
  showToast(`✨ Здание ${id} пробуждено!`);
  renderBuildings(); updateHUD();
}

// ── ADVISORS GACHA ─────────────────────────────────
function renderAdvisors() {
  const list = document.getElementById('advisorsList'); if (!list) return;
  list.innerHTML = '';
  ADVISORS.forEach(adv => {
    const owned = hasAdv(adv.id);
    const color = RARITY_COLORS[adv.rarity];
    const el = document.createElement('div');
    el.style.cssText = `width: 140px; padding: 10px; border: 2px solid ${owned ? color : '#334155'}; border-radius: 8px; background: ${owned ? 'rgba(255,255,255,0.05)' : 'transparent'}; opacity: ${owned ? 1 : 0.4}; text-align: center; display: flex; flex-direction: column;`;
    el.innerHTML = `
      <div style="font-size: 32px; filter: ${owned ? 'none' : 'grayscale(1)'};">${adv.emoji}</div>
      <div style="color: ${color}; font-weight: bold; margin-top: 5px;">${adv.name}</div>
      <div style="font-size: 10px; color: #94a3b8; margin-top: 4px; flex-grow: 1;">${adv.desc}</div>
      <div style="font-size: 10px; font-weight: bold; color: ${color}; margin-top: 5px; text-transform: uppercase;">${adv.rarity}</div>
    `;
    list.appendChild(el);
  });
}

function rollAdvisor() {
  if ((G.ts || 0) < 15) { showToast('❌ Недостаточно ⏳ (Нужно 15)'); return; }

  const unowned = ADVISORS.filter(a => !hasAdv(a.id));
  if (unowned.length === 0) { showToast('✅ Вы наняли всех героев!'); return; }

  if (!confirm('Открыть Капсулу Советника за 15 Осколков Времени?')) return;

  G.ts -= 15;
  updateHUD();

  // Basic Gacha Math (Common: 60%, Rare: 30%, Epic: 10%)
  const r = Math.random();
  let rarityPool = 'epic';
  if (r < 0.6) rarityPool = 'common';
  else if (r < 0.9) rarityPool = 'rare';

  let possible = unowned.filter(a => a.rarity === rarityPool);
  // Guarantee drop if pity or unlucky category
  if (possible.length === 0) possible = unowned;

  const winner = possible[Math.floor(Math.random() * possible.length)];

  if (!G.advisors) G.advisors = [];
  G.advisors.push(winner.id);

  Audio.sfxAchievement();
  renderAdvisors();
  showToast(`🦸 Вы наняли героя: ${winner.name} (${winner.rarity.toUpperCase()})!`);

  // Confetti effect over modal
  const btn = document.getElementById('rollAdvisorBtn');
  if (btn) { const rect = btn.getBoundingClientRect(); spawnConfetti(rect.left + rect.width / 2, rect.top - 20); }
}
function renderUpgrades() {
  const list = document.getElementById('upgradesList'); list.innerHTML = '';
  UPGRADES.forEach(u => {
    const p = G.upgrades.includes(u.id), av = u.cond(); if (!av && !p) return;
    const el = document.createElement('div'); el.className = 'upgrade-item' + (p ? ' purchased' : G.coins < u.cost ? ' locked' : '');
    el.innerHTML = `<div class="upgrade-info"><div class="upgrade-name">${u.name}</div><div class="upgrade-desc">${u.desc}</div></div><div class="upgrade-cost">${p ? '✅' : '💰 ' + fmt(u.cost)}</div>`;
    if (!p) el.addEventListener('click', () => buyUpgrade(u.id)); list.appendChild(el);
  });
}
function renderAchievements() {
  const grid = document.getElementById('achievementsGrid'); grid.innerHTML = '';
  ACHIEVEMENTS.forEach(a => {
    const unlocked = G.achievements.includes(a.id);
    const el = document.createElement('div');
    el.className = 'achievement ' + (unlocked ? 'unlocked' : a.secret && !unlocked ? 'secret' : 'locked');
    const label = a.secret && !unlocked ? '🔒 Секрет' : a.emoji;
    el.innerHTML = `${label}<div class="achievement-tooltip">${unlocked ? a.name + ': ' + a.desc : '???'}</div>`;
    grid.appendChild(el);
  });
}

// ── STOCK MARKET ───────────────────────────────────
function renderStocks() {
  const list = document.getElementById('stockMarket'); if (!list) return; list.innerHTML = '';
  STOCKS.forEach(baseS => {
    const s = G.stocks.find(x => x.id === baseS.id); if (!s) return;
    const isCrypto = baseS.id === 'mx';
    const tr = baseS.trend > 0 ? 'trend-up' : baseS.trend < 0 ? 'trend-down' : '';
    const trA = baseS.trend > 0 ? '▲' : baseS.trend < 0 ? '▼' : '►';

    let mineRateStr = '';
    if (isCrypto) {
      const servers = getB('simserver');
      const mineRate = servers * 0.01;
      mineRateStr = `<div style="color:#00ffff; font-size:11px; margin-top:2px;">(Майнинг: ${mineRate.toFixed(2)}/с)</div>`;
    }

    const el = document.createElement('div'); el.className = 'stock-item';
    el.innerHTML = `
      <div class="stock-header">
        <div class="stock-name">${baseS.emoji} ${baseS.name}</div>
        <div class="stock-price">💰${fmt(s.price)} <span class="stock-trend ${tr}">${trA}</span>${mineRateStr}</div>
      </div>
      <div class="stock-controls">
        <div class="stock-owned">В портфеле: <span>${fmt(Math.floor(s.owned))}</span> шт.</div>
        <div class="stock-btns">
          <button class="btn-stock buy" onclick="buyStock('${s.id}')">Купить 1</button>
          <button class="btn-stock sell" onclick="sellStock('${s.id}')">Продать 1</button>
          <button class="btn-stock sell" onclick="sellStock('${s.id}', true)">Всё</button>
        </div>
      </div>
    `;
    list.appendChild(el);
  });
}
function buyStock(id) {
  const s = G.stocks.find(x => x.id === id); if (!s) return;
  if (G.coins < s.price) { showToast('❌ Недостаточно монет!'); return; }
  G.coins -= s.price; s.owned++; updateHUD(); renderStocks(); Audio.sfxClick();
}
function sellStock(id, all = false) {
  const s = G.stocks.find(x => x.id === id); if (!s || Math.floor(s.owned) <= 0) { showToast('❌ У вас нет этих акций!'); return; }
  const amt = all ? Math.floor(s.owned) : 1;
  const earn = Math.floor(s.price * amt);
  s.owned -= amt; G.coins += earn; G.totalCoins += earn;
  updateHUD(); renderStocks(); Audio.sfxClick();
  showToast(`💵 Продано ${amt} акций ${id} за ${fmt(earn)}!`);
}
let stockTick = 15;
let cryptoTick = 5;
function tickStocks(dt) {
  stockTick -= dt;
  cryptoTick -= dt;
  let needRender = false;

  STOCKS.forEach(baseS => {
    const s = G.stocks.find(x => x.id === baseS.id); if (!s) return;
    const cEvent = G.activeEvent && G.activeEvent.name === 'Обвал рынка' ? 0.3 : (G.activeEvent && G.activeEvent.name === 'Взлёт акций' ? 3 : 1);

    if (baseS.id === 'mx') {
      // Mining
      const servers = getB('simserver');
      if (servers > 0) { s.owned += (servers * 0.01) * dt; needRender = true; } // Need render per tick to show mining

      if (cryptoTick <= 0) {
        if (Math.random() < 0.1) {
          baseS.trend = Math.random() > 0.5 ? 2.0 : -2.0; showToast(baseS.trend > 0 ? "📈 Памп MatrixCoin!" : "📉 Дамп MatrixCoin!");
        } else {
          if (Math.random() < 0.3) baseS.trend = Math.random() > 0.5 ? 1 : -1;
        }
        let chg = (Math.random() * baseS.volatility * 2 - baseS.volatility) + baseS.trend * 0.05;
        s.price = Math.max(10, Math.floor(s.price * (1 + chg)));
        if (s.price < baseS.base * 0.1) baseS.trend = 1;
        if (s.price > baseS.base * 10) baseS.trend = -1;
        needRender = true;
      }
    } else {
      if (stockTick <= 0) {
        if (Math.random() < 0.3) baseS.trend = Math.random() > 0.5 ? 1 : -1;
        let chg = ((Math.random() * baseS.volatility * 2 - baseS.volatility) + baseS.trend * 0.02) * cEvent;
        if (Math.random() < 0.05) { chg = -0.5; baseS.trend = -1; showToast(`📉 Обвал рынка: ${baseS.name}!`); }
        else if (Math.random() < 0.05) { chg = 0.5; baseS.trend = 1; showToast(`📈 Взлет акций: ${baseS.name}!`); }
        s.price = Math.max(10, Math.floor(s.price * (1 + chg)));
        if (s.price < baseS.base * 0.4) baseS.trend = 1;
        if (s.price > baseS.base * 5) baseS.trend = -1;
        needRender = true;
      }
    }
  });

  if (cryptoTick <= 0) cryptoTick = 5;
  if (stockTick <= 0) stockTick = 15;
  if (needRender) renderStocks();
}

// ── EXPEDITIONS & FACTIONS (PHASE 9) ───────────────
function renderExpeditions() {
  const grid = document.getElementById('expGrid'); if (!grid) return; grid.innerHTML = '';
  document.getElementById('qiPtsModal').textContent = fmt(G.qi);
  EXPEDITIONS.forEach(def => {
    const act = (G.expeditions || []).find(x => x.id === def.id);
    const reqName = BUILDINGS.find(b => b.id === def.reqB).name;
    const can = getB(def.reqB) >= 1;
    let stClass = act ? (act.remaining <= 0 ? 'available' : 'active') : (can ? 'available' : 'locked');
    let actionHtml = '';
    if (!act) {
      actionHtml = `<button class="btn-tech" style="width:100%" onclick="sendExpedition('${def.id}')"${can ? '' : ' disabled'}>Отправить флот</button>`;
    } else if (act.remaining > 0) {
      const pct = ((act.total - act.remaining) / act.total) * 100;
      actionHtml = `<div style="width:100%; height:10px; background:#222; border-radius:5px; overflow:hidden;"><div style="width:${pct}%; height:100%; background:#10b981;"></div></div><div style="font-size:12px; margin-top:5px; text-align:center;">Осталось: ${Math.ceil(act.remaining)}с</div>`;
    } else {
      actionHtml = `<button class="btn-tech" style="background:#10b981; color:#fff; width:100%" onclick="claimExpedition('${def.id}')">Забрать 💠${def.rewardQI}</button>`;
    }
    const el = document.createElement('div'); el.className = `tech-card ${stClass}`;
    el.innerHTML = `<div class="tech-card-emoji">${def.emoji}</div><div class="tech-card-name">${def.name}</div><div class="tech-card-desc">${def.desc}</div><div style="font-size:12px; color:#aaa; margin:5px 0;">Флагман: ${reqName}</div><div style="margin-top:10px;">${actionHtml}</div>`;
    grid.appendChild(el);
  });
}
function sendExpedition(id) {
  const ex = EXPEDITIONS.find(x => x.id === id); if (!ex) return;
  if (getB(ex.reqB) < 1) { showToast(`❌ Нужен флагман: ${BUILDINGS.find(b => b.id === ex.reqB).name}`); return; }
  if ((G.expeditions || []).find(x => x.id === id)) return;
  G.expeditions.push({ id: id, remaining: ex.duration, total: ex.duration });
  showToast(`🚀 Флот отправлен: ${ex.name}`); Audio.sfxPurchase(); renderExpeditions();
}
function claimExpedition(id) {
  const i = G.expeditions.findIndex(x => x.id === id); if (i === -1) return;
  const ex = G.expeditions[i]; if (ex.remaining > 0) return;
  const def = EXPEDITIONS.find(x => x.id === id);
  G.qi += def.rewardQI; G.expeditions.splice(i, 1);
  showToast(`💠 Добыто: ${def.rewardQI} Квантовых Слитков!`);
  Audio.sfxAchievement(); renderExpeditions(); updateHUD();
}

function renderRelics() {
  const grid = document.getElementById('relicGrid'); if (!grid) return; grid.innerHTML = '';
  document.getElementById('qiPtsModal').textContent = fmt(G.qi);
  RELICS.forEach(r => {
    const lvl = getRelic(r.id);
    const cost = Math.floor(r.baseCost * Math.pow(r.costM, lvl));
    const can = (G.qi || 0) >= cost;
    const el = document.createElement('div'); el.className = `tech-card ${can ? 'available' : 'locked'}`;
    el.innerHTML = `<div class="tech-card-emoji">${r.emoji}</div><div class="tech-card-name">${r.name}</div><div class="tech-card-desc">${r.desc}</div><div style="margin:5px 0; font-weight:bold; color:#10b981">Уровень: ${lvl}</div><button class="btn-tech" style="width:100%" onclick="buyRelic('${r.id}')"${can ? '' : ' disabled'}>Улучшить (💠${cost})</button>`;
    grid.appendChild(el);
  });
}
function buyRelic(id) {
  const r = RELICS.find(x => x.id === id); if (!r) return;
  let lvl = getRelic(r.id); const cost = Math.floor(r.baseCost * Math.pow(r.costM, lvl));
  if ((G.qi || 0) < cost) { showToast(`❌ Нужно ${cost} 💠`); return; }
  G.qi -= cost;
  let ex = G.relics.find(x => x.id === id); if (ex) ex.level++; else G.relics.push({ id: id, level: 1 });
  r.fx(lvl + 1); showToast(`💠 Улучшено: ${r.name}`); Audio.sfxPurchase(); renderRelics(); updateHUD();
}

function renderFactions() {
  const grid = document.getElementById('factionGrid'); if (!grid) return; grid.innerHTML = '';
  FACTIONS.forEach(f => {
    const isThis = G.faction === f.id;
    const hasFac = !!G.faction;
    const el = document.createElement('div'); el.className = `tech-card ${isThis ? 'available' : hasFac ? 'locked' : 'available'}`;
    let btnHtml = isThis ? `<button class="btn-tech" style="width:100%; background:#10b981; color:#fff" disabled>Выбрано</button>` : `<button class="btn-tech" style="width:100%" onclick="chooseFaction('${f.id}')"${hasFac ? ' disabled' : ''}>Присоединиться</button>`;
    el.innerHTML = `<div class="tech-card-emoji">${f.emoji}</div><div class="tech-card-name">${f.name}</div><div class="tech-card-desc">${f.desc}</div><div style="margin-top:10px;">${btnHtml}</div>`;
    grid.appendChild(el);
  });
}
function chooseFaction(id) {
  if (G.faction) return;
  openConfirm('Сменить фракцию нельзя до следующего Эпохального Вознесения! Вы уверены?', () => {
    G.faction = id; const f = FACTIONS.find(x => x.id === id); f.fx();
    showToast(`🤝 Вы присоединились: ${f.name}`); Audio.sfxAchievement(); renderFactions(); updateHUD();
  }, 'Выбор фракции');
}

function renderAll() { renderBuildings(); renderUpgrades(); renderAchievements(); renderQuests(); renderStocks(); renderExpeditions(); renderRelics(); renderFactions(); updateHUD(); }

// ── LEADERBOARD ────────────────────────────────────
function saveToLeaderboard() {
  const b = JSON.parse(localStorage.getItem('ccLB') || '[]');
  b.push({ name: G.playerName || 'Аноним', coins: G.totalCoins, prestige: G.prestige, date: new Date().toLocaleDateString('ru') });
  b.sort((a, c) => c.coins - a.coins); localStorage.setItem('ccLB', JSON.stringify(b.slice(0, 10)));
}
function showLeaderboard() {
  const b = JSON.parse(localStorage.getItem('ccLB') || '[]');
  const t = document.getElementById('lbTable');
  const ranks = ['🥇', '🥈', '🥉', '4', '5', '6', '7', '8', '9', '10'];
  t.innerHTML = b.length ? b.map((e, i) => `<div class="lb-row"><div class="lb-rank">${ranks[i] || i + 1}</div><div class="lb-name">${e.name}</div><div class="lb-score">💰${fmt(e.coins)}</div><div class="lb-prestige">${e.prestige > 0 ? '✨×' + e.prestige : ''}</div></div>`).join('') : '<div class="lb-empty">Пока нет рекордов!</div>';
  document.getElementById('playerName').value = G.playerName || '';
  document.getElementById('lbOverlay').style.display = 'flex';
}

// ── COLOR HELPERS ──────────────────────────────────
const hR = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const lighten = (h, a) => { const [r, g, b] = hR(h); return `rgb(${Math.min(255, r + a)},${Math.min(255, g + a)},${Math.min(255, b + a)})` };
const darken = (h, a) => { const [r, g, b] = hR(h); return `rgb(${Math.max(0, r - a)},${Math.max(0, g - a)},${Math.max(0, b - a)})` };

// ── CANVAS ─────────────────────────────────────────
const canvas = document.getElementById('cityCanvas');
const ctx = canvas.getContext('2d');
let frame = 0;
const seededRng = s => { let x = s; return () => { x = (x * 9301 + 49297) % 233280; return x / 233280 } };
function resizeCanvas() {
  if (canvas.width !== canvas.parentElement.clientWidth || canvas.height !== canvas.parentElement.clientHeight) {
    canvas.width = canvas.parentElement.clientWidth; canvas.height = canvas.parentElement.clientHeight;
  }
}

function getSky(t) {
  if (t < 5 || t >= 22) return { top: '#020814', bot: '#071428', stars: 1, moon: 1, sun: 0 };
  if (t < 7) return { top: '#1a0a2e', bot: '#a05020', stars: 0.5, moon: 0.4, sun: 0 };
  if (t < 9) return { top: '#f4511e', bot: '#ffcc70', stars: 0, moon: 0, sun: 0.4 };
  if (t < 18) return { top: '#1565c0', bot: '#42a5f5', stars: 0, moon: 0, sun: 1 };
  if (t < 20) return { top: '#b71c1c', bot: '#f4511e', stars: 0, moon: 0, sun: 0.3 };
  return { top: '#0d1b2a', bot: '#1a237e', stars: 0.7, moon: 0.8, sun: 0 };
}

// ── CITY CACHE ─────────────────────────────────────
let visualCityCache = [];
let visualCityLen = -1;
let visualCityW = -1;

function buildVisualCity(W) {
  let toDraw = []; BUILDINGS.forEach((bDef, bi) => { for (let i = 0; i < getB(bDef.id); i++)toDraw.push({ bDef, seed: bi * 1000 + i * 17 }); });
  if (toDraw.length > 65) {
    toDraw.sort((a, b) => b.bDef.baseCost - a.bDef.baseCost);
    const top = toDraw.slice(0, 15);
    let rest = toDraw.slice(15);
    const rPick = seededRng(12345);
    const picked = [];
    for (let i = 0; i < 50 && rest.length > 0; i++) {
      const idx = Math.floor(rPick() * rest.length);
      picked.push(rest.splice(idx, 1)[0]);
    }
    toDraw = top.concat(picked);
  }
  const rPos = seededRng(42);
  toDraw.forEach(item => {
    item.layer = Math.floor(rPos() * 3);
    item.xPct = 0.05 + rPos() * 0.9;
    const rng = seededRng(item.seed);
    item.bwRaw = item.bDef.w + rng() * 20;
    item.bhRaw = item.bDef.h + rng() * 30;
  });
  toDraw.sort((a, b) => {
    if (a.layer !== b.layer) return a.layer - b.layer;
    return b.bhRaw - a.bhRaw;
  });
  const scales = [0.75, 0.85, 1.0];
  const yPcts = [0.76, 0.79, 0.82];
  toDraw.forEach(item => { item.scale = scales[item.layer]; item.yPct = yPcts[item.layer]; });
  visualCityCache = toDraw; visualCityLen = totB(); visualCityW = W;
}

function drawBuilding(ctx, b, bx, by, bw, bh, isDay, frame, rng, scale) {
  // Try loading photorealistic AI texture
  const sprt = SPRITES[b.id];
  if (sprt && sprt.complete && sprt.naturalWidth > 0) {
    const isAwaken = isAwakened(b.id);
    if (isAwaken) ctx.filter = 'drop-shadow(0 0 10px #d946ef) drop-shadow(0 0 5px #a855f7) hue-rotate(45deg)';

    ctx.globalCompositeOperation = 'screen';
    ctx.drawImage(sprt, bx, by, bw, bh);
    ctx.globalCompositeOperation = 'source-over';

    if (isAwaken) ctx.filter = 'none';

    // Add fire disaster overlay specifically for image sprites
    if (b.id !== 'tent' && G.disaster?.type === 'fire' && rng() > 0.5) {
      const fp = (frame * 3) % 14;
      ctx.beginPath(); ctx.moveTo(bx + bw / 2 - 6 * scale, by + bh); ctx.lineTo(bx + bw / 2 + 6 * scale, by + bh); ctx.lineTo(bx + bw / 2, by + bh - 25 * scale - fp);
      ctx.fillStyle = 'rgba(255,100,0,0.6)'; ctx.fill();
    }
    return;
  }

  // Fallback to procedural Canvas render if asset missing
  const lCol = lighten(b.color, isDay ? 30 : 10), dCol = darken(b.color, isDay ? 20 : 40);
  const gr = ctx.createLinearGradient(bx, by, bx + bw, by + bh);
  gr.addColorStop(0, lCol); gr.addColorStop(1, dCol);
  ctx.fillStyle = gr;

  if (b.id === 'tent') {
    ctx.beginPath(); ctx.moveTo(bx + bw / 2, by + bh * 0.3); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx, by + bh); ctx.fill();
    ctx.fillStyle = '#111'; ctx.beginPath(); ctx.moveTo(bx + bw / 2, by + bh * 0.6); ctx.lineTo(bx + bw / 2 + bw * 0.15, by + bh); ctx.lineTo(bx + bw / 2 - bw * 0.15, by + bh); ctx.fill();
    if (G.disaster?.type === 'fire' && rng() > 0.5) { const fp = (frame * 3) % 14; ctx.beginPath(); ctx.moveTo(bx + bw / 2 - 6 * scale, by + bh); ctx.lineTo(bx + bw / 2 + 6 * scale, by + bh); ctx.lineTo(bx + bw / 2, by + bh - 10 * scale - fp); ctx.fillStyle = 'rgba(255,100,0,0.6)'; ctx.fill(); }
    return;
  }

  const isSciFi = ['dyson', 'multigate', 'realityengine', 'starforge', 'terraformer', 'timemachine'].includes(b.id);
  const isSciFiT3 = ['galacticsenate', 'blackholeminer', 'quasarharvester', 'cosmicloom', 'simserver'].includes(b.id);

  if (isSciFiT3) {
    if (b.id === 'galacticsenate') {
      ctx.fillStyle = gr; ctx.fillRect(bx + bw * 0.1, by + bh * 0.2, bw * 0.8, bh * 0.8);
      ctx.beginPath(); ctx.moveTo(bx, by + bh * 0.2); ctx.lineTo(bx + bw / 2, by); ctx.lineTo(bx + bw, by + bh * 0.2); ctx.fill();
      ctx.strokeStyle = `rgba(241, 196, 15, ${0.5 + 0.5 * Math.sin(frame * 0.05)})`;
      ctx.lineWidth = 3 * scale; ctx.strokeRect(bx + bw * 0.3, by + bh * 0.4, bw * 0.4, bh * 0.4);
    } else if (b.id === 'blackholeminer') {
      ctx.fillStyle = gr; ctx.fillRect(bx + bw * 0.2, by, bw * 0.6, bh);
      ctx.beginPath(); ctx.arc(bx + bw / 2, by + bh * 0.2, bw * 0.3, 0, Math.PI * 2); ctx.fillStyle = '#000'; ctx.fill();
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.4 + 0.6 * Math.sin(frame * 0.1)})`;
      ctx.lineWidth = 2 * scale; ctx.stroke();
    } else if (b.id === 'quasarharvester') {
      ctx.fillStyle = gr; ctx.beginPath(); ctx.moveTo(bx + bw / 2, by + bh); ctx.lineTo(bx + bw, by + bh * 0.4); ctx.lineTo(bx + bw / 2, by); ctx.lineTo(bx, by + bh * 0.4); ctx.fill();
      const qY = by + bh * 0.4;
      const rg = ctx.createRadialGradient(bx + bw / 2, qY, 0, bx + bw / 2, qY, bw * 0.4);
      rg.addColorStop(0, 'rgba(230, 126, 34, 1)'); rg.addColorStop(1, 'rgba(230, 126, 34, 0)');
      ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(bx + bw / 2, qY, bw * 0.4, 0, Math.PI * 2); ctx.fill();
    } else if (b.id === 'cosmicloom') {
      ctx.fillStyle = gr; ctx.fillRect(bx, by + bh * 0.7, bw, bh * 0.3);
      ctx.strokeStyle = `rgba(155, 89, 182, ${0.3 + 0.3 * Math.sin(frame * 0.05)})`;
      ctx.lineWidth = 1.5 * scale;
      for (let i = 1; i < 10; i++) { ctx.beginPath(); ctx.moveTo(bx + bw * 0.1 * i, by + bh * 0.7); ctx.lineTo(bx + bw / 2, by); ctx.stroke(); }
    } else if (b.id === 'simserver') {
      ctx.fillStyle = gr; ctx.fillRect(bx, by, bw, bh);
      ctx.fillStyle = `rgba(26, 188, 156, ${0.2 + 0.1 * Math.sin(frame * 0.02)})`; ctx.fillRect(bx, by, bw, bh);
      ctx.fillStyle = '#1abc9c';
      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 3; c++) { if (rng() > 0.3) ctx.fillRect(bx + bw * 0.2 + c * bw * 0.25, by + bh * 0.1 + r * bh * 0.15, bw * 0.1, bh * 0.05); }
      }
    }
    return;
  }

  if (isSciFi) {
    if (b.id === 'dyson') {
      const ty = by + bh * 0.35, th = bh * 0.65;
      ctx.fillRect(bx + bw * 0.2, ty, bw * 0.6, th);
      const sunY = by + bh * 0.15;
      const g = ctx.createRadialGradient(bx + bw / 2, sunY, 0, bx + bw / 2, sunY, bw * 0.35);
      g.addColorStop(0, 'rgba(255,200,50,0.9)'); g.addColorStop(1, 'rgba(255,100,50,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(bx + bw / 2, sunY, bw * 0.35, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(bx + bw / 2, sunY, bw * 0.1, 0, Math.PI * 2); ctx.fill();
    } else if (b.id === 'starforge') {
      ctx.beginPath(); ctx.moveTo(bx + bw / 2, by); ctx.lineTo(bx + bw * 0.8, by + bh); ctx.lineTo(bx + bw * 0.2, by + bh); ctx.fill();
      ctx.fillStyle = `rgba(255,50,50,${0.6 + 0.4 * Math.sin(frame * 0.1)})`;
      ctx.fillRect(bx + bw / 2 - 2 * scale, by + bh * 0.2, 4 * scale, bh * 0.7);
    } else if (b.id === 'multigate') {
      ctx.fillRect(bx, by, bw * 0.25, bh); ctx.fillRect(bx + bw * 0.75, by, bw * 0.25, bh);
      ctx.fillRect(bx, by, bw, bh * 0.15);
      ctx.fillStyle = `rgba(50,200,255,${0.5 + 0.2 * Math.sin(frame * 0.05)})`;
      ctx.beginPath(); ctx.ellipse(bx + bw / 2, by + bh * 0.6, bw * 0.35, bh * 0.4, 0, 0, Math.PI * 2); ctx.fill();
    } else if (b.id === 'terraformer') {
      ctx.fillRect(bx, by + bh * 0.5, bw, bh * 0.5);
      ctx.fillStyle = `rgba(50,255,100,${0.3 + 0.2 * Math.sin(frame * 0.08)})`;
      ctx.beginPath(); ctx.arc(bx + bw / 2, by + bh * 0.5, bw * 0.4, Math.PI, 0); ctx.fill();
      ctx.strokeStyle = '#2ecc71'; ctx.lineWidth = 2 * scale; ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.fillRect(bx + bw * 0.45, by + bh * 0.6, bw * 0.1, bh * 0.4);
    } else if (b.id === 'timemachine') {
      ctx.beginPath(); ctx.moveTo(bx, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw / 2, by + bh * 0.5); ctx.fill();
      ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + bw, by); ctx.lineTo(bx + bw / 2, by + bh * 0.5); ctx.fill();
      ctx.strokeStyle = `rgba(0,255,255,${0.5 + 0.5 * Math.sin(frame * 0.1)})`;
      ctx.lineWidth = 3 * scale; ctx.beginPath(); ctx.ellipse(bx + bw / 2, by + bh / 2, bw * 0.6, bh * 0.1, 0, 0, Math.PI * 2); ctx.stroke();
    } else if (b.id === 'realityengine') {
      const floatY = by + Math.sin(frame * 0.05) * 8 * scale;
      ctx.fillRect(bx + bw * 0.15, floatY, bw * 0.7, bh * 0.8);
      ctx.strokeStyle = '#9b59b6'; ctx.lineWidth = 2 * scale;
      for (let i = 1; i <= 3; i++) { ctx.strokeRect(bx + bw * 0.15 + i * 4 * scale, floatY + i * 4 * scale, bw * 0.7 - i * 8 * scale, bh * 0.8 - i * 8 * scale); }
    }
  } else {
    // Normal buildings (Cyberpunk Glass)
    ctx.fillStyle = `rgba(${isDay ? '220,225,230' : '15,20,35'}, 0.95)`; ctx.fillRect(bx, by, bw, bh);
    ctx.fillStyle = gr; ctx.globalAlpha = 0.5; ctx.fillRect(bx, by, bw, bh); ctx.globalAlpha = 1.0;
    ctx.strokeStyle = `rgba(${isDay ? '255,255,255' : '0,255,255'}, 0.3)`; ctx.lineWidth = scale; ctx.strokeRect(bx, by, bw, bh);

    // Roofs
    if (b.id === 'house') {
      ctx.fillStyle = lCol; ctx.beginPath(); ctx.moveTo(bx - bw * 0.05, by); ctx.lineTo(bx + bw / 2, by - bh * 0.25); ctx.lineTo(bx + bw * 1.05, by); ctx.fill();
    } else if (b.id === 'bank' || b.id === 'shop') {
      ctx.fillStyle = dCol; ctx.fillRect(bx - 2 * scale, by - 4 * scale, bw + 4 * scale, 4 * scale);
    } else if (b.id === 'lab') {
      ctx.fillStyle = '#ddd'; ctx.beginPath(); ctx.arc(bx + bw / 2, by, bw * 0.4, Math.PI, 0); ctx.fill();
    } else if (b.id === 'skyscraper') {
      ctx.strokeStyle = '#ccc'; ctx.lineWidth = 1.5 * scale; ctx.beginPath(); ctx.moveTo(bx + bw / 2, by); ctx.lineTo(bx + bw / 2, by - 25 * scale); ctx.stroke();
      ctx.beginPath(); ctx.arc(bx + bw / 2, by - 25 * scale, 3 * scale, 0, Math.PI * 2); ctx.fillStyle = Math.sin(frame * 0.08) > 0 ? '#ff4444' : '#880000'; ctx.fill();
    }

    ctx.fillStyle = darken(b.color, 50); ctx.fillRect(bx, by + bh - 3 * scale, bw, 3 * scale);

    // Windows
    const wc = Math.max(1, Math.floor(bw / (12 * scale))), wr = Math.max(1, Math.floor(bh / (16 * scale)));
    const pw = (bw - wc * 6 * scale) / (wc + 1);
    for (let row = 0; row < wr; row++) {
      for (let col = 0; col < wc; col++) {
        const wx = bx + pw * (col + 1) + 6 * scale * col, wy = by + 8 * scale + row * 14 * scale;
        if (wy + 7 * scale > by + bh - 4 * scale) continue;
        const lit = rng() > 0.35;
        const fl = lit ? (isDay ? 0.3 : 0.8 + 0.2 * Math.sin(frame * 0.05 + row * 7 + col)) : 0;
        ctx.fillStyle = lit ? (b.id === 'lab' ? `rgba(100,255,100,${fl})` : `rgba(255,240,160,${fl})`) : 'rgba(0,0,0,0.4)';
        ctx.fillRect(wx, wy, Math.max(2 * scale, pw * 0.8), 6 * scale);
      }
    }

    if (b.id === 'factory') {
      for (let s = 0; s < 2; s++) {
        const sp2 = bx + bw * (0.25 + s * 0.5), ph = (frame * 0.6 + s * 40) % 80;
        ctx.beginPath(); ctx.arc(sp2, by - ph * 0.5, (4 + ph * 0.15) * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120,120,120,${Math.max(0, 0.4 - ph / 80 * 0.4)})`; ctx.fill();
      }
    }
    if (b.id === 'spacecenter') {
      const fp = (frame * 2) % 10;
      ctx.beginPath(); ctx.moveTo(bx + bw / 2 - 8 * scale, by + bh); ctx.lineTo(bx + bw / 2 + 8 * scale, by + bh); ctx.lineTo(bx + bw / 2, by + bh + (14 + fp) * scale);
      ctx.fillStyle = `rgba(255,${120 + fp * 10},0,0.75)`; ctx.fill();
    }
  }

  // Universal disaster fire (skip for tent to avoid weird offset)
  if (b.id !== 'tent' && G.disaster?.type === 'fire' && rng() > 0.5) {
    const fp2 = (frame * 3) % 14;
    ctx.beginPath(); ctx.moveTo(bx + bw / 2 - 6 * scale, by); ctx.lineTo(bx + bw / 2 + 6 * scale, by); ctx.lineTo(bx + bw / 2, by - (10 + fp2) * scale);
    ctx.fillStyle = 'rgba(255,100,0,0.6)'; ctx.fill();
  }
}

// ── GOD CHALLENGES UI ──────────────────────────────
function renderGodChallenges() {
  const list = document.getElementById('challengesList'); if (!list) return;
  list.innerHTML = '';
  const actDisp = document.getElementById('activeChallengeDisplay');
  const actName = document.getElementById('activeChallengeName');
  const actDesc = document.getElementById('activeChallengeDesc');

  if (G.activeChallenge) {
    actDisp.style.display = 'block';
    const c = GOD_CHALLENGES.find(x => x.id === G.activeChallenge);
    actName.textContent = c.emoji + ' ' + c.name;
    actDesc.textContent = c.desc + ' (Награда: ' + c.rewardDesc + ')';
  } else {
    actDisp.style.display = 'none';
  }

  GOD_CHALLENGES.forEach(c => {
    const completed = (G.completedChallenges || []).includes(c.id);
    const isActive = G.activeChallenge === c.id;
    const el = document.createElement('div');
    el.style.cssText = `width: 200px; padding: 10px; border: 2px solid ${completed ? '#22c55e' : (isActive ? '#ef4444' : '#334155')}; border-radius: 8px; background: rgba(0,0,0,0.4); text-align: center; display: flex; flex-direction: column;`;
    el.innerHTML = `
        <div style="font-size: 28px;">${c.emoji}</div>
        <div style="color: ${completed ? '#22c55e' : '#fff'}; font-weight: bold; margin-top: 5px;">${c.name}</div>
        <div style="font-size: 11px; color: #94a3b8; margin-top: 5px; min-height:40px;">${c.desc}</div>
        <div style="font-size: 11px; color: #facc15; margin-top: 5px; border-top: 1px solid #333; padding-top:5px;">🎁 ${c.rewardDesc}</div>
      `;
    if (!completed && !G.activeChallenge) {
      const btn = document.createElement('button');
      btn.className = 'btn-invest';
      btn.style.marginTop = '10px'; btn.style.background = '#ef4444'; btn.style.borderColor = '#b91c1c';
      btn.textContent = 'Начать (СБРОС!)';
      btn.onclick = () => startGodChallenge(c.id);
      el.appendChild(btn);
    } else if (completed) {
      const b = document.createElement('div'); b.style.color = '#22c55e'; b.style.fontWeight = 'bold'; b.style.marginTop = '10px'; b.textContent = '✅ ВЫПОЛНЕНО'; el.appendChild(b);
    } else if (isActive) {
      const b = document.createElement('div'); b.style.color = '#ef4444'; b.style.fontWeight = 'bold'; b.style.marginTop = '10px'; b.textContent = '⚡ АКТИВНО'; el.appendChild(b);
    }
    list.appendChild(el);
  });
}

function startGodChallenge(id) {
  openConfirm('Это действие ПОЛНОСТЬЮ СБРОСИТ ваш прогресс (без выдачи Эпохи Вознесения), но запустит жесткое Испытание! Вы уверены?', () => {
    resetGame(false, false, id);
  }, 'Испытание Богов');
}

function cancelGodChallenge() {
  openConfirm('Отменить испытание? Текущий прогресс будет потерян, вы вернетесь в обычный мир с полным сбросом.', () => {
    resetGame(false, false, null);
  }, 'Отмена Испытания');
}

function completeGodChallenge() {
  if (!G.activeChallenge) return;
  const c = GOD_CHALLENGES.find(x => x.id === G.activeChallenge);
  if (!G.completedChallenges) G.completedChallenges = [];
  G.completedChallenges.push(G.activeChallenge);
  const reward = c.rewardDesc;
  G.activeChallenge = null;

  // Auto reset to clear debuffs but keep the reward
  spawnConfetti(canvas.width / 2, canvas.height / 2);
  Audio.sfxAchievement();
  alert(`🎉 ВЫ ПРЕОДОЛЕЛИ ИСПЫТАНИЕ БОГОВ: ${c.name}!\n\nВы получаете вечную награду: ${reward}.\nМир будет перезапущен без дебаффов.`);
  resetGame(false, false, null);
  document.getElementById('ascensionOverlay').style.display = 'none';
}

// ── GALACTIC CONQUEST ──────────────────────────────
const PLANETS = [
  { id: 'pl1', emoji: '🔴', name: 'Марс-Прайм', desc: 'Промышленная колония', influence: 0, conquered: false, cost: 10, duration: 60, rewardDesc: '+15% к пассивному доходу', apply: () => { G.cpsM = (G.cpsM || 1) * 1.15; } },
  { id: 'pl2', emoji: '🟣', name: 'Нексус-IV', desc: 'Торговый форпост', influence: 0, conquered: false, cost: 25, duration: 180, rewardDesc: '+25% к доходу от кликов', apply: () => { G.clickPower = (G.clickPower || 1) * 1.25; } },
  { id: 'pl3', emoji: '🔵', name: 'Аква-7', desc: 'Океанический мир', influence: 0, conquered: false, cost: 50, duration: 600, rewardDesc: 'Цены на здания -10%', apply: () => { /* checked in bCost via G.conquest.some */ } },
  { id: 'pl4', emoji: '⚫', name: 'Теневой Узел', desc: 'Тёмная зона', influence: 0, conquered: false, cost: 100, duration: 1800, rewardDesc: '+50% к пассивному доходу', apply: () => { G.cpsM = (G.cpsM || 1) * 1.5; } },
];

// Patch bCost to check for Аква-7 conquest discount
const _origBCost = bCost;

if (!G.conquest) G.conquest = PLANETS.map(p => ({ id: p.id, influence: 0, conquered: false, fleetTimer: 0 }));

function getConquestState(id) {
  if (!G.conquest) G.conquest = PLANETS.map(p => ({ id: p.id, influence: 0, conquered: false, fleetTimer: 0 }));
  return G.conquest.find(x => x.id === id);
}

function renderConquest() {
  const grid = document.getElementById('conquestGrid'); if (!grid) return;
  grid.innerHTML = '';
  if (!G.conquest) G.conquest = PLANETS.map(p => ({ id: p.id, influence: 0, conquered: false, fleetTimer: 0 }));

  PLANETS.forEach(p => {
    const cs = getConquestState(p.id);
    const pct = Math.min(100, Math.round((cs.influence || 0)));
    const el = document.createElement('div');
    el.style.cssText = `
      width: 200px; padding: 12px; border: 2px solid ${cs.conquered ? '#22c55e' : (cs.fleetTimer > 0 ? '#facc15' : '#334155')};
      border-radius: 10px; background: rgba(0,0,0,0.5); text-align: center;
      display: flex; flex-direction: column; gap: 6px;
    `;
    el.innerHTML = `
      <div style="font-size: 36px;">${p.emoji}</div>
      <div style="font-weight: bold; color: ${cs.conquered ? '#22c55e' : '#fff'};">${p.name}</div>
      <div style="font-size: 11px; color: #94a3b8;">${p.desc}</div>
      <div style="background:#1e293b; border-radius:4px; overflow:hidden; height:8px;">
        <div style="width:${pct}%; height:100%; background:${cs.conquered ? '#22c55e' : '#facc15'}; transition: width 0.3s;"></div>
      </div>
      <div style="font-size: 11px; color: #94a3b8;">${cs.conquered ? '✅ Захвачено' : (cs.fleetTimer > 0 ? `⏳ Флот в пути: ${Math.ceil(cs.fleetTimer)}с` : `Влияние: ${pct}%`)}</div>
      <div style="font-size: 11px; color: #facc15; border-top: 1px solid #334155; padding-top: 5px;">🎁 ${p.rewardDesc}</div>
    `;
    if (!cs.conquered && cs.fleetTimer <= 0) {
      const btn = document.createElement('button');
      btn.className = 'btn-invest';
      btn.style.marginTop = '4px';
      btn.style.fontSize = '11px';
      btn.textContent = `Отправить флот (${p.cost} 💠, ${p.duration / 60} мин)`;
      btn.onclick = () => sendConquestFleet(p.id);
      el.appendChild(btn);
    }
    grid.appendChild(el);
  });
}

function sendConquestFleet(id) {
  const p = PLANETS.find(x => x.id === id);
  const cs = getConquestState(id);
  if ((G.qi || 0) < p.cost) { showToast(`❌ Нужно ${p.cost} 💠 Квантовых Слитков!`); return; }
  if (cs.fleetTimer > 0) { showToast('⚠️ Флот уже в пути!'); return; }
  G.qi -= p.cost;
  cs.fleetTimer = p.duration;
  showToast(`🚀 Флот летит к ${p.name}!`);
  renderConquest();
}

function tickConquest(dt) {
  if (!G.conquest) return;
  let changed = false;
  G.conquest.forEach(cs => {
    if (cs.fleetTimer > 0) {
      cs.fleetTimer -= dt;
      if (cs.fleetTimer <= 0) {
        cs.fleetTimer = 0;
        cs.influence = Math.min(100, (cs.influence || 0) + 33); // +33% influence per expedition
        changed = true;
        const p = PLANETS.find(x => x.id === cs.id);
        if (cs.influence >= 100 && !cs.conquered) {
          cs.conquered = true;
          p.apply();
          showToast(`🌌 Планета ${p.name} захвачена! ${p.rewardDesc}`);
          Audio.sfxAchievement();
        } else {
          showToast(`📡 Флот вернулся от ${p.name}! Влияние: ${Math.round(cs.influence)}%`);
        }
      }
    }
  });
  if (changed) renderConquest();
}

// ── CITY GRID (GRID SYNERGY) ────────────────────────
// Grid is a 5x5 array of building IDs (or null)
if (!G.cityGrid) G.cityGrid = Array(25).fill(null);

// Synergy pairs: [buildingIdA, buildingIdB, bonusFraction per each pair found]
const GRID_SYNERGIES = [
  { a: 'factory', b: 'lab', bonus: 0.12, desc: 'Завод + Лаборатория = +12% CPS' },
  { a: 'bank', b: 'shop', bonus: 0.10, desc: 'Банк + Магазин = +10% CPS' },
  { a: 'house', b: 'park', bonus: 0.08, desc: 'Дом + Парк = +8% CPS' },
  { a: 'spacecenter', b: 'station', bonus: 0.15, desc: 'Космодром + Орбитальная ст. = +15% CPS' },
  { a: 'lab', b: 'lab', bonus: 0.05, desc: 'Лаборатория + Лаборатория = +5% CPS' },
];

function calcGridBonus() {
  if (!G.cityGrid) return 1;
  let bonus = 0;
  const dirs = [-1, 1, -5, 5]; // left, right, up, down neighbours
  for (let i = 0; i < 25; i++) {
    const a = G.cityGrid[i]; if (!a) continue;
    for (const d of dirs) {
      const j = i + d;
      if (j < 0 || j >= 25) continue;
      // Prevent wrap-around on left/right edges
      if (d === -1 && i % 5 === 0) continue;
      if (d === 1 && i % 5 === 4) continue;
      const b = G.cityGrid[j]; if (!b) continue;
      for (const syn of GRID_SYNERGIES) {
        if ((a === syn.a && b === syn.b) || (a === syn.b && b === syn.a)) {
          bonus += syn.bonus / 2; // each pair counted from both sides, so halve
        }
      }
    }
  }
  return 1 + bonus;
}

let gridSelected = null; // building ID selected from inventory

function renderCityGrid() {
  if (!G.cityGrid) G.cityGrid = Array(25).fill(null);

  // Board
  const board = document.getElementById('gridBoard'); if (!board) return;
  board.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement('div');
    const bId = G.cityGrid[i];
    const bDef = bId ? BUILDINGS.find(x => x.id === bId) : null;
    cell.style.cssText = `
      width: 100%; aspect-ratio: 1; border: 2px solid ${bId ? '#38bdf8' : '#1e293b'};
      border-radius: 6px; display: flex; align-items: center; justify-content: center;
      font-size: 26px; cursor: pointer; background: ${bId ? 'rgba(56,189,248,0.1)' : 'rgba(0,0,0,0.3)'};
      transition: border-color 0.2s, background 0.2s;
      ${gridSelected ? 'box-shadow: 0 0 8px rgba(56,189,248,0.5);' : ''}
    `;
    cell.title = bDef ? bDef.name : (gridSelected ? 'Поставить сюда' : 'Пусто');
    cell.textContent = bDef ? bDef.emoji : (gridSelected ? '➕' : '');
    cell.addEventListener('click', () => {
      if (gridSelected) {
        G.cityGrid[i] = gridSelected;
        gridSelected = null;
        renderCityGrid();
      } else if (bId) {
        // Remove from cell — return to "pool" (unlimited)
        G.cityGrid[i] = null;
        renderCityGrid();
      }
    });
    board.appendChild(cell);
  }

  // Inventory — show all buildings the player owns (>0)
  const inv = document.getElementById('gridInventory'); if (!inv) return;
  inv.innerHTML = '';
  BUILDINGS.forEach(b => {
    if (getB(b.id) < 1) return;
    const el = document.createElement('div');
    const isSelected = gridSelected === b.id;
    el.style.cssText = `
      display: flex; align-items: center; gap: 8px; padding: 6px 10px;
      border: 2px solid ${isSelected ? '#38bdf8' : '#334155'}; border-radius: 6px;
      background: ${isSelected ? 'rgba(56,189,248,0.15)' : 'rgba(0,0,0,0.3)'};
      cursor: pointer; transition: all 0.15s;
    `;
    el.innerHTML = `<span style="font-size:20px;">${b.emoji}</span><span style="font-size:12px; color:#e2e8f0;">${b.name}</span>`;
    el.addEventListener('click', () => {
      gridSelected = isSelected ? null : b.id;
      renderCityGrid();
    });
    inv.appendChild(el);
  });

  // Total bonus display
  const bonusEl = document.getElementById('gridTotalBonus');
  if (bonusEl) {
    const bonus = calcGridBonus();
    bonusEl.textContent = `Глобальный Множитель от Сетки: x${bonus.toFixed(2)}`;
    bonusEl.style.color = bonus > 1 ? '#10b981' : '#94a3b8';
  }
}


// ── TERMINAL SYSTEM ────────────────────────────────
if (!G.terminal) G.terminal = { history: ['Система инициализирована...'], bootTime: Date.now() };

const TERMINAL_COMMANDS = {
  'help': () => 'Доступные команды: help, status, cls, hack-coins, scan, reboot',
  'status': () => `СИСТЕМА: Онлайн\nВерсия: 1.1.0\nМножитель: x${calcCps().toFixed(2)}\nКликов: ${G.totalClicks}`,
  'cls': () => { G.terminal.history = []; return ''; },
  'hack-coins': () => {
    const amt = 1000 * (G.cityLevel || 1);
    G.coins += amt;
    G.totalCoins += amt;
    return `УСПЕХ: Взломано ${amt.toFixed(0)} монет!`;
  },
  'scan': () => `Сканирование... Найдено объектов: ${G.buildings.reduce((s, b) => s + b.count, 0)} зданий.`,
  'reboot': () => { setTimeout(() => location.reload(), 1000); return 'Перезагрузка системы...'; }
};

function openTerminal() {
  document.getElementById('terminalOverlay').style.display = 'flex';
  renderTerminal();
}

function renderTerminal() {
  const area = document.getElementById('terminalHackArea');
  if (!area) return;
  area.innerHTML = `
    <div style="font-family:'Courier New', monospace; color:#0f0; padding:10px; height:300px; overflow-y:auto; background:#000; border:1px solid #0f0; margin-bottom:10px;" id="termLogs">
      ${G.terminal.history.map(line => `<div>> ${line}</div>`).join('')}
    </div>
    <div style="display:flex; gap:10px;">
      <span style="color:#0f0;">$</span>
      <input type="text" id="termInput" style="flex:1; background:transparent; border:none; border-bottom:1px solid #0f0; color:#0f0; outline:none; font-family:monospace;" placeholder="Введите команду..." />
    </div>
  `;
  const inp = document.getElementById('termInput');
  inp.focus();
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = inp.value.trim().toLowerCase();
      if (!val) return;
      G.terminal.history.push(val);
      if (TERMINAL_COMMANDS[val]) {
        const res = TERMINAL_COMMANDS[val]();
        if (res) G.terminal.history.push(res);
      } else {
        G.terminal.history.push(`Ошибка: Неизвестная команда '${val}'`);
      }
      if (G.terminal.history.length > 50) G.terminal.history.shift();
      renderTerminal();
    }
  });
  const logs = document.getElementById('termLogs');
  logs.scrollTop = logs.scrollHeight;
}

function updateTerminalTick(dt) {
  // Can add passive hacking or random messages here
}

function renderCity() {
  resizeCanvas(); frame++;
  const W = canvas.width, H = canvas.height, sky = getSky(G.worldTime);
  ctx.clearRect(0, 0, W, H);
  // Sky
  const sg = ctx.createLinearGradient(0, 0, 0, H * 0.72);
  sg.addColorStop(0, sky.top); sg.addColorStop(1, sky.bot); ctx.fillStyle = sg; ctx.fillRect(0, 0, W, H * 0.75);
  const isDay = sky.sun > 0.5;
  // Stars
  if (sky.stars > 0) { const rng = seededRng(7777); for (let i = 0; i < 80; i++) { ctx.beginPath(); ctx.arc(rng() * W, rng() * H * 0.6, 0.5 + rng() * 1.2, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255,${sky.stars * (0.4 + rng() * 0.6) * (0.7 + 0.3 * Math.sin(frame * 0.04 + i * 1.3))})`; ctx.fill(); } }
  // Moon
  if (sky.moon > 0) { const mx = W * 0.82, my = H * 0.12; ctx.beginPath(); ctx.arc(mx, my, 22 * sky.moon, 0, Math.PI * 2); ctx.fillStyle = '#fff9e0'; ctx.shadowColor = '#ffe066'; ctx.shadowBlur = 20 * sky.moon; ctx.fill(); ctx.shadowBlur = 0; }
  // Sun
  if (sky.sun > 0) { const sd = G.worldTime < 9, sx = W * (sd ? 0.15 : 0.82), sy = H * (sd ? 0.25 : 0.1); const gl = ctx.createRadialGradient(sx, sy, 0, sx, sy, 55 * sky.sun); gl.addColorStop(0, 'rgba(255,220,50,0.4)'); gl.addColorStop(1, 'rgba(255,160,50,0)'); ctx.fillStyle = gl; ctx.fillRect(sx - 70, sy - 70, 140, 140); ctx.beginPath(); ctx.arc(sx, sy, 20 * sky.sun, 0, Math.PI * 2); ctx.fillStyle = '#ffe566'; ctx.shadowColor = '#ffd700'; ctx.shadowBlur = 30; ctx.fill(); ctx.shadowBlur = 0; }
  // Clouds (day)
  if (sky.sun > 0.5) { const rC = seededRng(2024); for (let i = 0; i < 4; i++) { const cx = ((rC() * W + frame * 0.15) % (W + 160)) - 80, cy = H * 0.1 + rC() * H * 0.18, cw = 60 + rC() * 80; ctx.fillStyle = 'rgba(255,255,255,0.18)'; for (let j = 0; j < 3; j++) { ctx.beginPath(); ctx.arc(cx + j * cw * 0.35, cy + rC() * 10, cw * (0.35 - j * 0.05), 0, Math.PI * 2); ctx.fill(); } } }
  // Snow (winter)
  if (SEASONS[G.season].snow) { const rS = seededRng(frame); for (let i = 0; i < 30; i++) { const sx2 = rS() * W, sy2 = (rS() * H * 0.85 + frame * 0.4) % (H * 0.85); ctx.beginPath(); ctx.arc(sx2, sy2, 1 + rS() * 2, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255,${0.4 + rS() * 0.5})`; ctx.fill(); } }
  // Ground
  const gg = ctx.createLinearGradient(0, H * 0.72, 0, H); gg.addColorStop(0, isDay ? '#2d5a1b' : '#1a2a10'); gg.addColorStop(1, isDay ? '#1a3a0a' : '#0f1a08'); ctx.fillStyle = gg; ctx.fillRect(0, H * 0.72, W, H * 0.28);
  // Road
  ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, H * 0.82, W, H * 0.06);
  ctx.strokeStyle = 'rgba(246,195,10,0.25)'; ctx.lineWidth = 2; ctx.setLineDash([20, 20]); ctx.beginPath(); ctx.moveTo(0, H * 0.85); ctx.lineTo(W, H * 0.85); ctx.stroke(); ctx.setLineDash([]);
  const total = totB(); document.getElementById('cityOverlay').style.opacity = total === 0 ? '1' : '0';

  // Buildings
  if (total > 0) {
    if (totB() !== visualCityLen || visualCityW !== W) buildVisualCity(W);
    let currentLayer = -1;
    visualCityCache.forEach((item) => {
      const b = item.bDef, scale = item.scale;
      const bw = item.bwRaw * scale;
      const bh = item.bhRaw * scale;
      const cx = W * item.xPct;
      const cy = H * item.yPct;
      const bx = cx - bw / 2, by = cy - bh;

      if (item.layer !== currentLayer) {
        if (currentLayer !== -1) {
          ctx.fillStyle = isDay ? 'rgba(230,240,255,0.25)' : 'rgba(0,180,255,0.08)';
          ctx.fillRect(0, H * 0.4, W, H * 0.6);
        }
        currentLayer = item.layer;
      }

      const rng = seededRng(item.seed);

      ctx.fillStyle = 'rgba(0,0,0,0.22)'; ctx.beginPath(); ctx.ellipse(cx, cy, bw * 0.5, 5 * scale, 0, 0, Math.PI * 2); ctx.fill();
      drawBuilding(ctx, b, bx, by, bw, bh, isDay, frame, rng, scale);
    });
  }
  // Flood overlay
  if (G.disaster?.type === 'flood') { ctx.fillStyle = 'rgba(30,100,200,0.14)'; ctx.fillRect(0, H * 0.78, W, H * 0.22); }
  // Cars
  if (total > 0) { G.cars.forEach(c => { const ry = H * 0.847 + (c.lane ? -6 : 6); ctx.fillStyle = c.color; ctx.fillRect(c.x - c.w / 2, ry - c.h, c.w, c.h * 0.7); const cW = c.w * 0.55, cX = c.x - cW / 2 + (c.dir > 0 ? c.w * 0.1 : -c.w * 0.1); ctx.fillStyle = darken(c.color, 20); ctx.fillRect(cX, ry - c.h - c.h * 0.35, cW, c.h * 0.4); ctx.fillStyle = '#222';[-c.w * 0.28, c.w * 0.28].forEach(ox => { ctx.beginPath(); ctx.arc(c.x + ox, ry - c.h * 0.18, c.h * 0.28, 0, Math.PI * 2); ctx.fill(); }); const hlX = c.dir > 0 ? c.x + c.w / 2 : c.x - c.w / 2; ctx.beginPath(); ctx.arc(hlX, ry - c.h * 0.45, 3, 0, Math.PI * 2); ctx.fillStyle = !isDay ? 'rgba(255,230,100,0.9)' : 'rgba(255,255,200,0.4)'; ctx.fill(); }); updateCars(); }
  // Golden coin
  if (G.goldenCoin) { const gc = G.goldenCoin, gx = gc.x * W, gy = gc.y * H, r = 22 + 5 * Math.sin(frame * 0.12); const gw = ctx.createRadialGradient(gx, gy, 0, gx, gy, r * 2.8); gw.addColorStop(0, 'rgba(255,215,0,0.55)'); gw.addColorStop(1, 'rgba(255,215,0,0)'); ctx.fillStyle = gw; ctx.beginPath(); ctx.arc(gx, gy, r * 2.8, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(gx, gy, r, 0, Math.PI * 2); ctx.fillStyle = '#ffd700'; ctx.shadowColor = '#ffaa00'; ctx.shadowBlur = 20; ctx.fill(); ctx.shadowBlur = 0; ctx.strokeStyle = '#b8860b'; ctx.lineWidth = 2; ctx.stroke(); ctx.fillStyle = '#b8860b'; ctx.font = `bold ${Math.floor(r * 0.8)}px Arial`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('★', gx, gy); ctx.fillStyle = '#fff'; ctx.font = 'bold 12px Arial'; ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 4; ctx.fillText(Math.ceil(gc.timeLeft) + 'с', gx, gy + r + 14); ctx.shadowBlur = 0; }
  // Boss render
  if (G.boss) {
    const b = G.boss, bx = b.x * W, by = b.y * H, r = b.r;
    const wob = 1 + 0.07 * Math.sin(frame * 0.15);
    // Glow
    const bgl = ctx.createRadialGradient(bx, by, 0, bx, by, r * 2.2);
    bgl.addColorStop(0, 'rgba(239,68,68,0.4)'); bgl.addColorStop(1, 'rgba(239,68,68,0)');
    ctx.fillStyle = bgl; ctx.beginPath(); ctx.arc(bx, by, r * 2.2, 0, Math.PI * 2); ctx.fill();
    // Body
    ctx.beginPath(); ctx.arc(bx, by, r * wob, 0, Math.PI * 2);
    ctx.fillStyle = '#1a1a2e'; ctx.shadowColor = '#ef4444'; ctx.shadowBlur = 18; ctx.fill(); ctx.shadowBlur = 0;
    ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3; ctx.stroke();
    // Boss emoji
    ctx.font = `${Math.floor(r * 0.9)}px Arial`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(b.emoji || '💀', bx, by);
    // HP bar above
    const hw = r * 2.8;
    ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(bx - hw / 2, by - r - 22, hw, 10);
    const hpPct = b.curHp / b.hp;
    ctx.fillStyle = hpPct > 0.5 ? '#22c55e' : hpPct > 0.25 ? '#f59e0b' : '#ef4444';
    ctx.fillRect(bx - hw / 2, by - r - 22, hw * hpPct, 10);
    ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1; ctx.strokeRect(bx - hw / 2, by - r - 22, hw, 10);
    // Timer + name
    ctx.fillStyle = '#fff'; ctx.font = 'bold 11px Outfit,Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    ctx.fillText(Math.ceil(b.timeLeft) + 'с • ' + b.name, bx, by - r - 26);
  }

  // Pet render
  if (G.pet && G.pet.active) {
    const px = G.pet.x * W, py = G.pet.y * H;
    ctx.font = '24px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('🐾', px, py);
    ctx.fillStyle = '#fff'; ctx.font = 'bold 10px Arial';
    ctx.fillText('Lv.' + G.pet.level, px, py + 18);
  }
}


// ── PET SYSTEM ────────────────────────────────────
function tickPet(dt) {
  if (!G.pet) G.pet = { active: true, x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, level: 1, xp: 0, energy: 100, wait: 0 };
  if (!G.pet.active) return;
  G.pet.wait -= dt;
  if (G.pet.wait <= 0) {
    G.pet.tx = 0.1 + Math.random() * 0.8;
    G.pet.ty = 0.75 + Math.random() * 0.15;
    G.pet.wait = 3 + Math.random() * 5;
  }
  G.pet.x += (G.pet.tx - G.pet.x) * dt * 0.5;
  G.pet.y += (G.pet.ty - G.pet.y) * dt * 0.5;
}
function hitPet(cx, cy, W, H) {
  if (!G.pet || !G.pet.active) return false;
  if (Math.hypot(cx - G.pet.x * W, cy - G.pet.y * H) < 30) {
    const r = Math.floor(calcCps() * 2 + 50);
    G.coins += r; G.totalCoins += r;
    G.pet.xp += 1;
    if (G.pet.xp >= G.pet.level * 10) { G.pet.xp = 0; G.pet.level++; showToast('🐾 Питомец повысил уровень!'); }
    spawnFloat(cx, cy, r, '#fb923c');
    Audio.sfxClick();
    G.pet.wait = 0.1; // Jump to new pos
    return true;
  }
  return false;
}

// ── GAME TICK ──────────────────────────────────────
let lastTick = Date.now();
function gameTick() {
  const now = Date.now(), dt = (now - lastTick) / 1000; lastTick = now;
  // Passive income + tech points
  const cps = calcCps(); if (cps > 0) { const e = cps * dt; G.coins += e; G.totalCoins += e; }

  // God Challenge Completion Check (1.00Sp = 1e24)
  if (G.activeChallenge && G.coins >= 1e24) {
    completeGodChallenge();
  }

  G.techPoints += Math.max(0.01, cps / 1000) * dt;
  G.playTime = (G.playTime || 0) + dt;
  G.bestCombo = Math.max(G.bestCombo || 0, G.combo || 0);
  // World time + season
  const oldT = G.worldTime; G.worldTime = (G.worldTime + dt * 0.08) % 24;
  if (oldT > G.worldTime) { G.dayCount++; const ns = Math.floor(G.dayCount / 5) % 4; if (ns !== G.season) { G.season = ns; G.seasonsS++; const s = SEASONS[G.season]; Audio.sfxAchievement(); showToast(`${s.emoji} Новый сезон: ${s.name}!`); checkAchievements(); } }
  // Systems
  tickDisaster(dt); tickEvent(dt); tickGold(dt); tickBoss(dt); tickWeather(dt); tickDilemma(dt); tickStocks(dt); tickPet(dt); updateTerminalTick(dt); tickConquest(dt);

  // Expeditions
  let expChanged = false;
  (G.expeditions || []).forEach(ex => {
    if (ex.remaining > 0) {
      ex.remaining -= dt;
      if (ex.remaining <= 0) { ex.remaining = 0; showToast(`🛬 Флот вернулся! Заберите награду 💠`); }
      expChanged = true;
    }
  });
  if (expChanged && document.getElementById('expeditionsOverlay').style.display === 'flex' && document.getElementById('viewExp').style.display !== 'none') {
    renderExpeditions();
  }

  // HUD is fast, but full lists are slow. Re-render lists only every 2 seconds or on change.
  let slowRender = G.playTime % 2 < 0.11;
  updateHUD();
  if (slowRender) {
    updateQuests(); renderBuildings(); renderUpgrades(); checkAchievements();
  }
}

// ── CITY LOOP ──────────────────────────────────────
function cityLoop() { renderCity(); requestAnimationFrame(cityLoop); }

// ── INIT ───────────────────────────────────────────
function init() {
  loadGame();
  document.getElementById('coinBtn').addEventListener('click', handleClick);
  canvas.addEventListener('click', e => {
    const r = canvas.getBoundingClientRect();
    const sx = canvas.width / r.width, sy = canvas.height / r.height;
    const cx = (e.clientX - r.left) * sx, cy = (e.clientY - r.top) * sy;
    if (hitPet(cx, cy, canvas.width, canvas.height)) return;
    if (!hitBoss(cx, cy)) collectGold(cx, cy);
  });
  // Audio
  document.getElementById('musicBtn').addEventListener('click', () => { Audio.init(); const on = Audio.toggleMusic(); document.getElementById('musicBtn').classList.toggle('muted', !on); document.getElementById('musicBtn').textContent = on ? '🎵' : '🔇'; });
  document.getElementById('sfxBtn').addEventListener('click', () => { Audio.init(); const btn = document.getElementById('sfxBtn'); btn.classList.toggle('muted'); Audio.setSfxVol(btn.classList.contains('muted') ? 0 : 0.55); btn.textContent = btn.classList.contains('muted') ? '🔈' : '🔊'; });
  document.getElementById('musicVol').addEventListener('input', e => { Audio.init(); Audio.setMusicVol(parseFloat(e.target.value)); });
  // Buttons
  document.getElementById('saveBtn').addEventListener('click', () => saveGame(false));
  document.getElementById('resetBtn').addEventListener('click', () => resetGame(true));
  document.getElementById('prestigeBtn')?.addEventListener('click', doPrestige);
  // Terminal
  document.getElementById('terminalBtn')?.addEventListener('click', openTerminal);
  document.getElementById('terminalClose')?.addEventListener('click', () => document.getElementById('terminalOverlay').style.display = 'none');
  // Leaderboard
  document.getElementById('lbBtn').addEventListener('click', showLeaderboard);
  document.getElementById('lbClose').addEventListener('click', () => document.getElementById('lbOverlay').style.display = 'none');
  document.getElementById('saveName').addEventListener('click', () => { G.playerName = document.getElementById('playerName').value.trim() || 'Аноним'; saveToLeaderboard(); showLeaderboard(); showToast('✅ Имя сохранено!'); });
  // Close dilemma on backdrop click
  document.getElementById('dilemmaOverlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('dilemmaOverlay')) {
      document.getElementById('dilemmaOverlay').style.display = 'none';
    }
  });
  // Tech tree
  document.getElementById('techBtn').addEventListener('click', () => { renderTechGrid(); document.getElementById('techOverlay').style.display = 'flex'; });
  document.getElementById('techClose').addEventListener('click', () => document.getElementById('techOverlay').style.display = 'none');
  // Artifacts & Ascension Modals
  document.getElementById('artifactsBtn')?.addEventListener('click', () => { renderArtifactsGrid(); document.getElementById('artifactsOverlay').style.display = 'flex'; });
  document.getElementById('artifactsClose')?.addEventListener('click', () => document.getElementById('artifactsOverlay').style.display = 'none');
  // Ascension & Expeditions Modals
  document.getElementById('ascensionBtn')?.addEventListener('click', () => {
    renderAscensionGrid();
    document.getElementById('ascensionOverlay').style.display = 'flex';
    const tBtn = document.getElementById('ascensionTierBtn');
    if (tBtn) tBtn.textContent = `Переход в Эпоху ${['I', 'II', 'III', 'IV', 'V', 'VI'][G.ascensionTier || 0] || 'X'} (Требуется 5000 ⏳)`;

    // Show God Challenges only if Ascension Tier >= 1
    const chlArea = document.getElementById('ascensionChallengesArea');
    if (chlArea) {
      if (G.ascensionTier >= 1 || G.activeChallenge) {
        chlArea.style.display = 'block';
        renderGodChallenges();
      } else {
        chlArea.style.display = 'none';
      }
    }
  });
  document.getElementById('ascensionClose')?.addEventListener('click', () => document.getElementById('ascensionOverlay').style.display = 'none');
  document.getElementById('cancelChallengeBtn')?.addEventListener('click', cancelGodChallenge);

  // City Grid Modal
  document.getElementById('gridBtn')?.addEventListener('click', () => {
    renderCityGrid();
    document.getElementById('gridOverlay').style.display = 'flex';
  });
  document.getElementById('gridClose')?.addEventListener('click', () => document.getElementById('gridOverlay').style.display = 'none');
  document.getElementById('gridClearBtn')?.addEventListener('click', () => {
    G.cityGrid = Array(25).fill(null);
    gridSelected = null;
    renderCityGrid();
    showToast('🗑️ Сетка очищена');
  });

  document.getElementById('ascensionTierBtn')?.addEventListener('click', () => {
    if ((G.ts || 0) < 5000) { showToast('❌ Нужно 5000 Осколков Времени!'); return; }
    openConfirm('ВНИМАНИЕ! Это Эпохальное Вознесение! Вы навсегда потеряете все здания, монеты, престиж и ВСЕ НАВЫКИ ДРЕВА БОГОВ! Но ваш базовый множитель дохода вырастет в 100 раз. Совершить переход в новую Эпоху?', () => {
      resetGame(false, true); // Hidden flag for Ascension Tier
    }, 'Эпохальное Вознесение');
  });

  // Advisors / Gacha
  document.getElementById('advisorsBtn')?.addEventListener('click', () => { renderAdvisors(); document.getElementById('advisorsOverlay').style.display = 'flex'; });
  document.getElementById('advisorsClose')?.addEventListener('click', () => document.getElementById('advisorsOverlay').style.display = 'none');
  document.getElementById('rollAdvisorBtn')?.addEventListener('click', rollAdvisor);

  document.getElementById('expeditionsBtn')?.addEventListener('click', () => { renderExpeditions(); renderRelics(); renderFactions(); document.getElementById('expeditionsOverlay').style.display = 'flex'; });
  document.getElementById('expeditionsClose')?.addEventListener('click', () => document.getElementById('expeditionsOverlay').style.display = 'none');

  // Exp Tabs
  const setTab = (idView, idBtn) => {
    ['viewExp', 'viewRelic', 'viewFaction', 'viewConquest'].forEach(v => { const el = document.getElementById(v); if (el) el.style.display = 'none'; });
    ['tabExpBtn', 'tabRelicBtn', 'tabFactionBtn', 'tabConquestBtn'].forEach(v => { const e = document.getElementById(v); if (e) { e.className = 'btn-tab'; e.style.background = 'transparent'; e.style.color = '#aaa'; } });
    document.getElementById(idView).style.display = 'block';
    const btn = document.getElementById(idBtn);
    if (btn) { btn.className = 'btn-tab active'; btn.style.background = 'rgba(255,255,255,0.1)'; btn.style.color = '#fff'; }
  };
  document.getElementById('tabExpBtn')?.addEventListener('click', () => { setTab('viewExp', 'tabExpBtn'); renderExpeditions(); });
  document.getElementById('tabRelicBtn')?.addEventListener('click', () => { setTab('viewRelic', 'tabRelicBtn'); renderRelics(); });
  document.getElementById('tabFactionBtn')?.addEventListener('click', () => { setTab('viewFaction', 'tabFactionBtn'); renderFactions(); });
  document.getElementById('tabConquestBtn')?.addEventListener('click', () => { setTab('viewConquest', 'tabConquestBtn'); renderConquest(); });

  // Stats
  document.getElementById('statsBtn').addEventListener('click', showStats);
  document.getElementById('statsClose').addEventListener('click', () => document.getElementById('statsOverlay').style.display = 'none');
  document.getElementById('exportBtn').addEventListener('click', exportSave);
  document.getElementById('importBtn').addEventListener('click', importSave);
  window.addEventListener('resize', resizeCanvas);
  initQuests(); syncCars(); renderAll();
  setInterval(gameTick, 100);
  setInterval(() => saveGame(true), 30000);
  // Daily modal close
  document.getElementById('dailyClose')?.addEventListener('click', () => {
    document.getElementById('dailyOverlay').style.display = 'none';
    saveGame(true);
  });
  cityLoop();
}
document.addEventListener('DOMContentLoaded', init);

