// ========================================================
// ЕвроСвет Құлсары - Негізгі Бағдарламалық Логика (app.js)
// Қазақша & Орысша (KZ / RU), Себет, Төлем (Kaspi QR),
// Жеткізу, Пікірлер, 2ГИС, Инстаграм, Ватсап, ЖИ Оператор
// ========================================================

// 1. СӨЗДІК ЖӘНЕ АУДАРМАЛАР (Тілдік жүйе: KZ / RU)
const TRANSLATIONS = {
  kz: {
    topNotice: "Құлсары қаласы бойынша 30 000 ₸-ден бастап тегін жеткізу! Kaspi Red / 0-0-12 бар",
    searchPlaceholder: "Люстра, бра немесе шам іздеу...",
    gisBtn: "2ГИС Карта",
    cartTitle: "Себет",
    heroPill: "Құлсары қаласындағы №1 жарықтандыру дүкені",
    heroTitle: 'Үйіңізге жайлылық пен <span class="highlight-gold">сымбатты жарық</span> сыйлаңыз',
    heroSubtitle: "Ең сәнді хрусталь және LED люстралар, трек жүйелері, қабырға шамдары. Құлсары қаласы бойынша жылдам жеткізу, кәсіби орнату және Kaspi Red / 0-0-12 бөліп төлеу.",
    browseCatalog: "Каталогты көру",
    askAiBtn: "ЖИ Кеңесшіден сұрау",
    writeWaBtn: "Ватсапқа жазу",
    feat1Title: "Kaspi QR / Red",
    feat1Desc: "0-0-12 бөліп төлеу",
    feat2Title: "Құлсарыға жеткізу",
    feat2Desc: "Тапсырыс берген күні",
    feat3Title: "12 ай кепілдік",
    feat3Desc: "100% зауыттық сапа",
    feat4Title: "Орнату шебері",
    feat4Desc: "Кәсіби монтаж қызметі",
    catalogTag: "ТАУАРЛАР КАТАЛОГЫ",
    catalogTitle: "Танымал модельдер мен жаңа топтамалар",
    sortLabel: "Сұрыптау:",
    sortDefault: "Ұсынылғандар",
    sortPriceAsc: "Бағасы: арзаннан қымбатқа",
    sortPriceDesc: "Бағасы: қымбаттан арзанға",
    sortRating: "Рейтингі бойынша",
    catAll: "Барлық тауарлар",
    catChandeliers: "Люстралар",
    catSconces: "Бра шамдары",
    catTrack: "Трек жүйелері",
    catFloor: "Торшерлер",
    catOutdoor: "Сыртқы жарық",
    noProductsTitle: "Тауар табылмады",
    noProductsDesc: "Іздеу сөзін өзгертіп көріңіз немесе барлық санатты таңдаңыз.",
    resetFiltersBtn: "Барлық тауарларды көрсету",
    storeTag: "БІЗДІҢ МЕКЕНЖАЙ ЖӘНЕ БАЙЛАНЫС",
    storeTitle: "«ЕвроСвет» дүкеніне қош келдіңіздер!",
    storeDesc: "Құлсары қаласындағы ең үлкен люстралар мен заманауи жарықтандыру шоу-румы. Тікелей зауыттардан сапалы өнімдер, 1000-нан астам түрлі жарық үлгілері. Келіп, өз көзіңізбен көріп, үйіңіздің интерьеріне ең лайықтысын таңдаңыз!",
    addrLabel: "Мекенжайымыз:",
    addrValue: "Құлсары қаласы, Өтеулі Алдахов көшесі, 17",
    addrHint: "(ТД «Багдат» / Мереке ықшамауданы маңы)",
    hoursLabel: "Жұмыс кестесі:",
    hoursValue: "Күн сайын 09:00 - 20:00",
    hoursHint: "Демалыссыз, үзіліссіз",
    phoneLabel: "Телефон & WhatsApp:",
    phoneHint: "Менеджер дереу жауап береді",
    gisOpenTitle: "2ГИС арқылы ашу",
    gisOpenDesc: "Маршрут құру және навигация",
    instaFollow: "Инстаграмдағы жаңа видеолар",
    waDirectTitle: "WhatsApp-қа жазу",
    waDirectDesc: "Кеңес алу және локация сұрау",
    tgDirectTitle: "Telegram: +7 778 649 03 82",
    tgDirectDesc: "Жылдам кеңес және тапсырыс",
    mapStatus: "Қазір дүкен ашық",
    mapNavHint: "Құлсары қаласы, Өтеулі Алдахов к-сі, 17 үй",
    mapNavSub: "ТД Багдат маңында",
    buildRoute: "Маршрут сызу",
    socialHubTitle: "Біз әлеуметтік желілердеміз",
    socialHubDesc: "Жаңа түсімдер, жеңілдіктер және кеңес",
    reviewsTag: "ТҰТЫНУШЫЛАРДЫҢ ЛЕБІЗІ",
    reviewsTitle: "Пікірлер мен бағалаулар",
    writeReviewBtn: "Пікір қалдыру",
    reviewsCountText: "Барлығы 140+ пікір",
    trust1: "Тек шынайы сатып алушылар",
    trust2: "Жеткізу сапасы 100%",
    trust3: "Кепілдікпен қызмет көрсету",
    reviewFormTitle: "Өз пікіріңізді қалдырыңыз",
    reviewFormDesc: "Сіздің пікіріңіз біз үшін және басқа құлсарылық жерлестеріміз үшін өте маңызды!",
    reviewAuthorLabel: "Аты-жөніңіз:",
    reviewAuthorPh: "Мысалы: Айгүл Махамбетова",
    reviewCityLabel: "Қала немесе ауыл:",
    reviewCityPh: "Мысалы: Құлсары, Боранқұл, т.б.",
    reviewProductLabel: "Сатып алған тауарыңыз:",
    reviewProductPh: "Мысалы: Gold Halo люстрасы",
    reviewRatingLabel: "Бағаңыз (Жұлдызша):",
    reviewTextLabel: "Пікіріңіз немесе ұсынысыңыз:",
    reviewTextPh: "Люстраның сапасы, жеткізу, қызмет көрсету туралы жазыңыз...",
    reviewSubmitBtn: "Пікірді жариялау",
    footerBio: "Құлсары қаласындағы люстралар мен заманауи жарықтандыру дүкені. Үйіңізге жайлылық пен сұлулық сыйлаймыз.",
    footerNavTitle: "Каталог санаттары",
    footerCustTitle: "Тұтынушыларға",
    footerDelivery: "Жеткізу және орнату",
    footerReviews: "Пікірлер",
    footerAi: "ЖИ Оператор көмегі",
    footerContactsTitle: "Байланыс деректері",
    aiTriggerTitle: "ЖИ Кеңесші",
    aiTriggerSub: "Люстра таңдауға көмектеседі",
    aiOnline: "Онлайн | ЕвроСвет Құлсары",
    aiGreeting: "Сәлеметсіз бе! Мен — «ЕвроСвет Құлсары» дүкенінің ЖИ көмекшісімін. 🌟 Бөлмеңізге люстра таңдауға, жарық қуатын есептеуге немесе жеткізу бойынша көмектесуге дайынмын. Сұрағыңызды қойыңыз!",
    aiInputPlaceholder: "Сұрағыңызды жазыңыз...",
    cartHeading: "Себет",
    cartEmptyTitle: "Себетіңіз әзірге бос",
    cartEmptyDesc: "Каталогтан өзіңізге ұнаған люстра немесе шамды таңдап, себетке қосыңыз.",
    continueShopping: "Тауарларды таңдау",
    checkoutDetailsTitle: "Тапсырыс беруші деректері",
    custNameLabel: "Аты-жөніңіз:",
    custNamePh: "Мысалы: Мұрат Қайратұлы",
    custPhoneLabel: "Телефон нөміріңіз:",
    custPhonePh: "+7 (701) 000-00-00",
    deliveryTypeLabel: "Жеткізу тәсілі:",
    delivKulsary: "Құлсары қаласы бойынша (Курьермен есікке дейін)",
    delivVillage: "Жылыой ауданы ауылдары (Жаңа Қаратон, Теңіз т.б.)",
    delivPickup: "Дүкеннен алып кету (Өтеулі Алдахов к-сі, 17)",
    delivKz: "Қазақстанның басқа қалаларына (Казпочта / Индрайвер)",
    addressLabel: "Жеткізу мекенжайы:",
    addressPh: "Көше, үй/пәтер нөмірі",
    installOptionTitle: "Орнату шеберін шақыру (+5 000 ₸)",
    installOptionDesc: "Кәсіби шебер келіп люстраны құрастырып, төбеге орнатып береді",
    paymentTypeLabel: "Төлем түрі:",
    payKaspiHint: "Дереу QR код арқылы онлайн төлеу",
    payRedHint: "Пайызсыз бөліп төлеу",
    payCash: "Қолма-қол төлем",
    payCashHint: "Курьер жеткізген кезде қолма-қол беру",
    subtotalLabel: "Тауарлар құны:",
    delivCostLabel: "Жеткізу:",
    installCostLabel: "Орнату қызметі:",
    totalLabel: "Барлығы төлеуге:",
    btnPayKaspi: "Kaspi QR сұрау",
    btnOrderWa: "Ватсапқа тапсырыс жіберу",
    kaspiInstruction: "Kaspi QR-кодты менеджер WhatsApp арқылы жібереді. Төлемді тек Kaspi.kz қосымшасында растаңыз.",
    kaspiQrTitle: "QR-кодты WhatsApp-тан алыңыз",
    kaspiQrNote: "Біз соманы растап, жеке Kaspi QR сілтемесін жібереміз.",
    kaspiAmountLabel: "Төленетін сома:",
    kaspiSafeNote: "Төлем тек Kaspi қосымшасында жүреді",
    kaspiManagerNote: "Менеджер тапсырысты растап, QR жібереді",
    kaspiQrBtn: "WhatsApp-тан Kaspi QR алу",
    cancelBtn: "Болдырмау",
    addToCartBtn: "Себетке қосу",
    askWaBtn: "Ватсаптан кеңес алу",
    specsPower: "Қуаты:",
    specsArea: "Жарықтандыру ауданы:",
    specsMaterial: "Материалы:",
    specsTemp: "Жарық түсі:",
    specsControl: "Басқару:",
    specsSize: "Өлшемі:",
    deliveryFree: "Тегін",
    addedToCartAlert: "Себетке қосылды!",
    fillPhoneAlert: "Тапсырыс беру үшін телефон нөміріңізді жазыңыз!",
    fillAddressAlert: "Жеткізу мекенжайын жазыңыз!",
    reviewSuccess: "Пікіріңіз үшін үлкен рахмет! Ол сайтта жарияланды."
  },
  ru: {
    topNotice: "Бесплатная доставка по г. Кульсары от 30 000 ₸! Доступен Kaspi Red / 0-0-12",
    searchPlaceholder: "Поиск люстры, бра или светильника...",
    gisBtn: "2ГИС Карта",
    cartTitle: "Корзина",
    heroPill: "Магазин освещения №1 в городе Кульсары",
    heroTitle: 'Подарите вашему дому уют и <span class="highlight-gold">роскошный свет</span>',
    heroSubtitle: "Самые стильные хрустальные и LED люстры, трековые системы, настенные бра. Быстрая доставка по Кульсары, профессиональный монтаж и рассрочка Kaspi Red / 0-0-12.",
    browseCatalog: "Смотреть каталог",
    askAiBtn: "Спросить у AI Консультанта",
    writeWaBtn: "Написать в WhatsApp",
    feat1Title: "Kaspi QR / Red",
    feat1Desc: "Рассрочка 0-0-12",
    feat2Title: "Доставка по Кульсары",
    feat2Desc: "В день заказа",
    feat3Title: "12 месяцев гарантии",
    feat3Desc: "100% фабричное качество",
    feat4Title: "Мастер установки",
    feat4Desc: "Профессиональный монтаж",
    catalogTag: "КАТАЛОГ ТОВАРОВ",
    catalogTitle: "Популярные модели и новые коллекции",
    sortLabel: "Сортировка:",
    sortDefault: "Рекомендуемые",
    sortPriceAsc: "Цена: от дешевых к дорогим",
    sortPriceDesc: "Цена: от дорогих к дешевым",
    sortRating: "По рейтингу",
    catAll: "Все товары",
    catChandeliers: "Люстры",
    catSconces: "Бра и подсветка",
    catTrack: "Трековые системы",
    catFloor: "Торшеры",
    catOutdoor: "Уличное освещение",
    noProductsTitle: "Товары не найдены",
    noProductsDesc: "Попробуйте изменить поисковый запрос или выбрать все категории.",
    resetFiltersBtn: "Показать все товары",
    storeTag: "НАШ АДРЕС И КОНТАКТЫ",
    storeTitle: "Добро пожаловать в «ЕвроСвет»!",
    storeDesc: "Крупнейший шоу-рум люстр и современного освещения в Кульсары. Прямые поставки с фабрик, более 1000 моделей в наличии. Приходите, чтобы увидеть вживую и подобрать идеальный свет для вашего дома!",
    addrLabel: "Наш адрес:",
    addrValue: "г. Кульсары, улица Отеули Алдахова, 17",
    addrHint: "(район ТД «Багдат» / мкр. Мереке)",
    hoursLabel: "График работы:",
    hoursValue: "Ежедневно 09:00 - 20:00",
    hoursHint: "Без перерывов и выходных",
    phoneLabel: "Телефон & WhatsApp:",
    phoneHint: "Менеджер отвечает сразу",
    gisOpenTitle: "Открыть в 2ГИС",
    gisOpenDesc: "Маршрут и навигация",
    instaFollow: "Свежие видео в Инстаграм",
    waDirectTitle: "Написать в WhatsApp",
    waDirectDesc: "Консультация и локация",
    tgDirectTitle: "Telegram: +7 778 649 03 82",
    tgDirectDesc: "Быстрая консультация и заказ",
    mapStatus: "Сейчас открыто",
    mapNavHint: "г. Кульсары, ул. Отеули Алдахова, дом 17",
    mapNavSub: "Возле ТД Багдат",
    buildRoute: "Построить маршрут",
    socialHubTitle: "Мы в социальных сетях",
    socialHubDesc: "Новинки, скидки и консультации",
    reviewsTag: "ОТЗЫВЫ ПОКУПАТЕЛЕЙ",
    reviewsTitle: "Отзывы и оценки клиентов",
    writeReviewBtn: "Оставить отзыв",
    reviewsCountText: "Более 140+ отзывов",
    trust1: "Только реальные покупатели",
    trust2: "100% сохранность при доставке",
    trust3: "Официальная гарантия",
    reviewFormTitle: "Оставьте свой отзыв",
    reviewFormDesc: "Ваше мнение очень важно для нас и для других жителей Кульсары!",
    reviewAuthorLabel: "Ваше имя и фамилия:",
    reviewAuthorPh: "Например: Айгуль Махамбетова",
    reviewCityLabel: "Город или поселок:",
    reviewCityPh: "Например: г. Кульсары, Боранкул и т.д.",
    reviewProductLabel: "Приобретенный товар:",
    reviewProductPh: "Например: Люстра Gold Halo",
    reviewRatingLabel: "Ваша оценка (Звезды):",
    reviewTextLabel: "Ваш отзыв или пожелание:",
    reviewTextPh: "Напишите о качестве люстры, доставке или обслуживании...",
    reviewSubmitBtn: "Опубликовать отзыв",
    footerBio: "Магазин люстр и современного дизайнерского освещения в городе Кульсары. Дарим уют и красоту вашему дому.",
    footerNavTitle: "Категории каталога",
    footerCustTitle: "Покупателям",
    footerDelivery: "Доставка и установка",
    footerReviews: "Отзывы",
    footerAi: "Помощь AI Оператора",
    footerContactsTitle: "Контактная информация",
    aiTriggerTitle: "AI Консультант",
    aiTriggerSub: "Поможет выбрать люстру",
    aiOnline: "Онлайн | ЕвроСвет Кульсары",
    aiGreeting: "Здравствуйте! Я — AI помощник магазина «ЕвроСвет Кульсары». 🌟 Готов помочь вам рассчитать освещение по площади, подобрать модель или рассказать про доставку и рассрочку!",
    aiInputPlaceholder: "Напишите ваш вопрос...",
    cartHeading: "Корзина",
    cartEmptyTitle: "Ваша корзина пуста",
    cartEmptyDesc: "Выберите понравившуюся люстру или светильник из каталога и добавьте в корзину.",
    continueShopping: "Выбрать товары",
    checkoutDetailsTitle: "Данные получателя",
    custNameLabel: "Ваше имя:",
    custNamePh: "Например: Мурат Кайратулы",
    custPhoneLabel: "Номер телефона:",
    custPhonePh: "+7 (701) 000-00-00",
    deliveryTypeLabel: "Способ доставки:",
    delivKulsary: "По городу Кульсары (Курьером до двери)",
    delivVillage: "Поселки Жылыойского района (Жана Каратон, Тенгиз и др.)",
    delivPickup: "Самовывоз из магазина (ул. Отеули Алдахова, 17)",
    delivKz: "В другие города Казахстана (Индрайвер / Казпочта)",
    addressLabel: "Адрес доставки:",
    addressPh: "Улица, номер дома/квартиры",
    installOptionTitle: "Вызов мастера по установке (+5 000 ₸)",
    installOptionDesc: "Профессиональный мастер приедет, соберет и надежно смонтирует люстру",
    paymentTypeLabel: "Способ оплаты:",
    payKaspiHint: "Оплата онлайн через QR код",
    payRedHint: "Беспроцентная рассрочка",
    payCash: "Наличными курьеру",
    payCashHint: "Оплата при получении заказа",
    subtotalLabel: "Сумма товаров:",
    delivCostLabel: "Доставка:",
    installCostLabel: "Услуга монтажа:",
    totalLabel: "Итого к оплате:",
    btnPayKaspi: "Запросить Kaspi QR",
    btnOrderWa: "Отправить заказ в WhatsApp",
    kaspiInstruction: "Kaspi QR-код отправит менеджер в WhatsApp. Оплату подтверждайте только в приложении Kaspi.kz.",
    kaspiQrTitle: "Получите QR-код в WhatsApp",
    kaspiQrNote: "Мы подтвердим сумму и отправим персональную ссылку Kaspi QR.",
    kaspiAmountLabel: "Сумма к оплате:",
    kaspiSafeNote: "Оплата проходит только в приложении Kaspi",
    kaspiManagerNote: "Менеджер подтвердит заказ и отправит QR",
    kaspiQrBtn: "Получить Kaspi QR в WhatsApp",
    cancelBtn: "Отмена",
    addToCartBtn: "В корзину",
    askWaBtn: "Консультация в WhatsApp",
    specsPower: "Мощность:",
    specsArea: "Площадь освещения:",
    specsMaterial: "Материал:",
    specsTemp: "Цвет света:",
    specsControl: "Управление:",
    specsSize: "Размер:",
    deliveryFree: "Бесплатно",
    addedToCartAlert: "Товар добавлен в корзину!",
    fillPhoneAlert: "Пожалуйста, укажите ваш номер телефона!",
    fillAddressAlert: "Пожалуйста, укажите адрес доставки!",
    reviewSuccess: "Большое спасибо за отзыв! Он опубликован на сайте."
  }
};

// 2. ДҮКЕННІҢ КҮЙІ (State management)
let currentLang = localStorage.getItem("evrosvet_lang") || "kz";
let currentCategory = "all";
let currentSort = "default";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("evrosvet_cart") || "[]");
let reviews = JSON.parse(localStorage.getItem("evrosvet_reviews") || "null") || INITIAL_REVIEWS;

// Телефон нөмірі мен байланыс константалары
const STORE_PHONE = "+7 (701) 445-99-88";
const STORE_WA_NUMBER = "77014459988";
const STORE_PHONE_2 = "+7 (778) 649-03-82";
const STORE_TG_URL = "https://t.me/+77786490382";
const STORE_INSTA_URL = "https://www.instagram.com/evrosvet_kulsary/";
const STORE_2GIS_URL = "https://2gis.kz/kulsary/search/Евросвет";

// 3. БАҒДАРЛАМАНЫ БАСТАУ (Initialization)
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
  renderProducts();
  renderReviews();
  updateCartBadge();
  setupQuickPrompts();
  updateFloatingBarVisibility();
  window.addEventListener("scroll", updateFloatingBarVisibility, { passive: true });
});

// ========================================================
// ТІЛДІ АУЫСТЫРУ ЖҮЙЕСІ (Language switcher)
// ========================================================
function setLanguage(lang) {
  if (lang !== "kz" && lang !== "ru") return;
  currentLang = lang;
  localStorage.setItem("evrosvet_lang", lang);
  applyLanguage(lang);
  renderProducts();
  renderReviews();
  renderCartDrawer();
  updateAiGreeting();
}

function applyLanguage(lang) {
  // Тіл түймелерінің күйін жаңарту
  document.getElementById("langKz").classList.toggle("active", lang === "kz");
  document.getElementById("langRu").classList.toggle("active", lang === "ru");

  const t = TRANSLATIONS[lang];

  // data-i18n мәтіндерін жаңарту
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // data-i18n-ph placeholder-дерін жаңарту
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // HTML lang атрибуты
  document.documentElement.lang = lang === "kz" ? "kk" : "ru";
}

// ========================================================
// ТАУАРЛАРДЫ БЕЙНЕЛЕУ ЖӘНЕ СҮЗГІЛЕУ (Products rendering)
// ========================================================
function renderProducts() {
  const container = document.getElementById("productsGrid");
  const noProducts = document.getElementById("noProductsFound");
  if (!container) return;

  // Сүзгіден өткізу
  let filtered = PRODUCTS_DATA.filter(item => {
    // Санат бойынша
    const matchesCat = currentCategory === "all" || item.category === currentCategory;
    // Іздеу сөзі бойынша
    const q = searchQuery.toLowerCase().trim();
    const titleKz = item.title.kz.toLowerCase();
    const titleRu = item.title.ru.toLowerCase();
    const descKz = item.description.kz.toLowerCase();
    const descRu = item.description.ru.toLowerCase();
    const matchesSearch = !q || titleKz.includes(q) || titleRu.includes(q) || descKz.includes(q) || descRu.includes(q);

    return matchesCat && matchesSearch;
  });

  // Сұрыптау
  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Бос күй тексеру
  if (filtered.length === 0) {
    container.innerHTML = "";
    noProducts.style.display = "block";
    return;
  }
  noProducts.style.display = "none";

  // Карточкаларды шығару
  container.innerHTML = filtered.map(item => {
    const title = item.title[currentLang];
    const catName = item.categoryName[currentLang];
    const badgeText = item.badge[currentLang];
    const badgeClass = `badge-${item.badge.type}`;
    const priceFormatted = formatKZT(item.price);
    const oldPriceFormatted = item.oldPrice ? formatKZT(item.oldPrice) : "";
    const power = item.specs.power;
    const area = item.specs.area;

    return `
      <div class="product-card" data-id="${item.id}">
        <div class="product-thumb-wrapper" onclick="openProductModal(${item.id})">
          <img src="${item.image}" alt="${escapeHtml(title)}" class="product-thumb" loading="lazy">
          <span class="product-badge-tag ${badgeClass}">${badgeText}</span>
          <button class="product-quick-btn" title="Толығырақ қарау" onclick="event.stopPropagation(); openProductModal(${item.id})">
            <i class="fa-solid fa-expand"></i>
          </button>
        </div>

        <div class="product-info">
          <span class="product-category-text">${catName}</span>
          <h3 class="product-title" onclick="openProductModal(${item.id})">${title}</h3>

          <div class="product-rating-row">
            <div class="stars-gold">
              ${renderStars(item.rating)}
            </div>
            <span class="reviews-count">(${item.reviewsCount})</span>
          </div>

          <div class="product-specs-chips">
            <span class="spec-chip"><i class="fa-solid fa-bolt"></i> ${power}</span>
            <span class="spec-chip"><i class="fa-solid fa-maximize"></i> ${area}</span>
          </div>

          <div class="product-card-bottom">
            <div class="product-price-box">
              <span class="product-price">${priceFormatted}</span>
              ${oldPriceFormatted ? `<span class="product-old-price">${oldPriceFormatted}</span>` : ""}
            </div>
            <button class="add-cart-btn" onclick="addToCart(${item.id})" title="${TRANSLATIONS[currentLang].addToCartBtn}">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll(".cat-tab").forEach(tab => {
    tab.classList.toggle("active", tab.getAttribute("data-category") === cat);
  });
  renderProducts();
}

function handleSortChange(sortVal) {
  currentSort = sortVal;
  renderProducts();
}

function handleSearch(val) {
  searchQuery = val;
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    clearBtn.style.display = val ? "block" : "none";
  }
  renderProducts();
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  handleSearch("");
}

function resetFilters() {
  currentCategory = "all";
  currentSort = "default";
  clearSearch();
  filterCategory("all");
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "default";
}

// ========================================================
// ТАУАРДЫҢ ТОЛЫҚ МӘЛІМЕТІ МОДАЛДЫ ТЕРЕЗЕСІ (Quick view)
// ========================================================
let activeModalProductId = null;

function openProductModal(id) {
  const product = PRODUCTS_DATA.find(p => p.id === id);
  if (!product) return;
  activeModalProductId = id;

  const t = TRANSLATIONS[currentLang];
  const overlay = document.getElementById("productModalOverlay");
  const img = document.getElementById("modalProductImage");
  const badge = document.getElementById("modalProductBadge");
  const cat = document.getElementById("modalProductCategory");
  const title = document.getElementById("modalProductTitle");
  const stars = document.getElementById("modalProductStars");
  const revCount = document.getElementById("modalProductReviewsCount");
  const price = document.getElementById("modalProductPrice");
  const oldPrice = document.getElementById("modalProductOldPrice");
  const desc = document.getElementById("modalProductDesc");
  const specs = document.getElementById("modalProductSpecs");
  const addBtn = document.getElementById("modalAddToCartBtn");
  const waBtn = document.getElementById("modalWaAskBtn");

  img.src = product.image;
  img.alt = product.title[currentLang];
  badge.innerHTML = `<span class="product-badge-tag badge-${product.badge.type}">${product.badge[currentLang]}</span>`;
  cat.innerText = product.categoryName[currentLang];
  title.innerText = product.title[currentLang];
  stars.innerHTML = renderStars(product.rating);
  revCount.innerText = `(${product.reviewsCount} ${t.reviewsTag.toLowerCase()})`;
  price.innerText = formatKZT(product.price);
  oldPrice.innerText = product.oldPrice ? formatKZT(product.oldPrice) : "";
  desc.innerText = product.description[currentLang];

  // Сипаттамалары
  const mat = typeof product.specs.material === "object" ? product.specs.material[currentLang] : product.specs.material;
  const temp = typeof product.specs.colorTemp === "object" ? product.specs.colorTemp[currentLang] : product.specs.colorTemp;
  const ctrl = typeof product.specs.control === "object" ? product.specs.control[currentLang] : product.specs.control;

  specs.innerHTML = `
    <div class="spec-line"><span class="spec-key">${t.specsPower}</span><span class="spec-val">${product.specs.power}</span></div>
    <div class="spec-line"><span class="spec-key">${t.specsArea}</span><span class="spec-val">${product.specs.area}</span></div>
    <div class="spec-line"><span class="spec-key">${t.specsMaterial}</span><span class="spec-val">${mat}</span></div>
    <div class="spec-line"><span class="spec-key">${t.specsTemp}</span><span class="spec-val">${temp}</span></div>
    <div class="spec-line"><span class="spec-key">${t.specsControl}</span><span class="spec-val">${ctrl}</span></div>
    <div class="spec-line"><span class="spec-key">${t.specsSize}</span><span class="spec-val">${product.specs.size}</span></div>
  `;

  addBtn.onclick = () => {
    addToCart(product.id);
    closeProductModal();
  };

  waBtn.onclick = () => {
    const text = encodeURIComponent(`Сәлеметсіз бе! ЕвроСвет Құлсары дүкенінен мына тауар бойынша сұрағым бар еді:\n\n- ${product.title[currentLang]} (${formatKZT(product.price)})`);
    window.open(`https://wa.me/${STORE_WA_NUMBER}?text=${text}`, "_blank");
  };

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const overlay = document.getElementById("productModalOverlay");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function handleProductOverlayClick(e) {
  if (e.target.id === "productModalOverlay") {
    closeProductModal();
  }
}

// ========================================================
// СЕБЕТ ЖӘНЕ КОРЗИНА БАСҚАРУЫ (Cart logic)
// ========================================================
function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  showToast(TRANSLATIONS[currentLang].addedToCartAlert);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCartDrawer();
  updateCartBadge();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    renderCartDrawer();
    updateCartBadge();
  }
}

function saveCart() {
  localStorage.setItem("evrosvet_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById("cartBadge");
  const countPill = document.getElementById("cartCountPill");
  const preview = document.getElementById("cartTotalPreview");

  if (badge) badge.innerText = totalCount;
  if (countPill) countPill.innerText = totalCount;

  // preview сомасын есептеу
  let sum = 0;
  cart.forEach(c => {
    const p = PRODUCTS_DATA.find(x => x.id === c.id);
    if (p) sum += p.price * c.qty;
  });
  if (preview) preview.innerText = formatKZT(sum);
}

function toggleCartModal(show) {
  const overlay = document.getElementById("cartOverlay");
  if (!overlay) return;
  if (show) {
    renderCartDrawer();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function handleOverlayClick(e) {
  if (e.target.id === "cartOverlay") {
    toggleCartModal(false);
  }
}

function renderCartDrawer() {
  const emptyView = document.getElementById("cartEmptyView");
  const contentView = document.getElementById("cartContentView");
  const list = document.getElementById("cartItemsList");
  if (!list || !emptyView || !contentView) return;

  if (cart.length === 0) {
    emptyView.style.display = "flex";
    contentView.style.display = "none";
    return;
  }

  emptyView.style.display = "none";
  contentView.style.display = "flex";

  list.innerHTML = cart.map(item => {
    const product = PRODUCTS_DATA.find(p => p.id === item.id);
    if (!product) return "";
    const title = product.title[currentLang];
    const totalLinePrice = formatKZT(product.price * item.qty);

    return `
      <div class="cart-item-card">
        <img src="${product.image}" alt="${escapeHtml(title)}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${title}</div>
          <div class="cart-item-row">
            <span class="cart-item-price">${totalLinePrice}</span>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
            </div>
            <button class="cart-del-btn" onclick="removeFromCart(${item.id})" title="Өшіру">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  recalculateTotals();
}

function handleDeliveryChange(val) {
  const addrGroup = document.getElementById("addressInputGroup");
  if (addrGroup) {
    addrGroup.style.display = val === "pickup" ? "none" : "flex";
  }
  recalculateTotals();
}

function recalculateTotals() {
  let subtotal = 0;
  cart.forEach(item => {
    const p = PRODUCTS_DATA.find(x => x.id === item.id);
    if (p) subtotal += p.price * item.qty;
  });

  const delivType = document.getElementById("orderDeliveryType")?.value || "kulsary";
  const needInstall = document.getElementById("orderInstallNeed")?.checked || false;

  let delivCost = 0;
  if (delivType === "kulsary") {
    // 30,000 ₸ жоғары болса Құлсарыда тегін, әйтпесе 1500 ₸
    delivCost = subtotal >= 30000 ? 0 : 1500;
  } else if (delivType === "village") {
    delivCost = 3000;
  } else if (delivType === "kz") {
    delivCost = 3500;
  } else if (delivType === "pickup") {
    delivCost = 0;
  }

  const installCost = needInstall ? 5000 : 0;
  const grandTotal = subtotal + delivCost + installCost;

  const t = TRANSLATIONS[currentLang];
  document.getElementById("subtotalVal").innerText = formatKZT(subtotal);
  document.getElementById("deliveryCostVal").innerText = delivCost === 0 ? t.deliveryFree : formatKZT(delivCost);

  const installRow = document.getElementById("installCostRow");
  if (installRow) installRow.style.display = needInstall ? "flex" : "none";

  document.getElementById("grandTotalVal").innerText = formatKZT(grandTotal);
}

function updatePayMethodUI() {
  const radios = document.querySelectorAll('input[name="payMethod"]');
  radios.forEach(r => {
    const card = r.closest(".pay-radio-card");
    if (card) {
      card.classList.toggle("active", r.checked);
    }
  });
}

// ========================================================
// ТАПСЫРЫС РЕСІМДЕУ ЖӘНЕ ТӨЛЕМ (Checkout & Payment)
// ========================================================
function processOrderCheckout(type) {
  const t = TRANSLATIONS[currentLang];
  if (cart.length === 0) return;

  const name = document.getElementById("orderCustName")?.value.trim() || "";
  const phone = document.getElementById("orderCustPhone")?.value.trim() || "";
  const delivType = document.getElementById("orderDeliveryType")?.value || "kulsary";
  const address = document.getElementById("orderAddress")?.value.trim() || "";
  const needInstall = document.getElementById("orderInstallNeed")?.checked || false;
  const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value || "kaspi_qr";

  if (!phone) {
    alert(t.fillPhoneAlert);
    document.getElementById("orderCustPhone")?.focus();
    return;
  }

  if (delivType !== "pickup" && !address) {
    alert(t.fillAddressAlert);
    document.getElementById("orderAddress")?.focus();
    return;
  }

  // Сомалар
  let subtotal = 0;
  cart.forEach(item => {
    const p = PRODUCTS_DATA.find(x => x.id === item.id);
    if (p) subtotal += p.price * item.qty;
  });

  let delivCost = 0;
  if (delivType === "kulsary") delivCost = subtotal >= 30000 ? 0 : 1500;
  else if (delivType === "village") delivCost = 3000;
  else if (delivType === "kz") delivCost = 3500;
  else if (delivType === "pickup") delivCost = 0;

  const installCost = needInstall ? 5000 : 0;
  const grandTotal = subtotal + delivCost + installCost;

  const orderData = {
    name, phone, delivType, address, needInstall, payMethod, subtotal, delivCost, installCost, grandTotal
  };

  if (type === "kaspi") {
    // Kaspi QR-ды менеджер WhatsApp арқылы жібереді
    orderData.payMethod = "kaspi_qr";
    openKaspiModal(grandTotal, orderData);
  } else if (type === "whatsapp") {
    // Ватсапқа толық чекті жіберу
    sendOrderToWhatsApp(orderData);
  }
}

let pendingKaspiOrder = null;

function requestKaspiQr() {
  if (!pendingKaspiOrder) return;
  const order = pendingKaspiOrder;
  pendingKaspiOrder = null;
  toggleKaspiModal(false);
  sendOrderToWhatsApp(order, true);
}

function sendOrderToWhatsApp(data, requestKaspiQrFlag = false) {
  const isKz = currentLang === "kz";
  
  let delivText = "";
  if (data.delivType === "kulsary") delivText = isKz ? "Құлсары қаласы ішінде" : "По г. Кульсары";
  else if (data.delivType === "village") delivText = isKz ? "Жылыой ауданы ауылдары" : "Поселки Жылыойского р-на";
  else if (data.delivType === "pickup") delivText = isKz ? "Дүкеннен алып кету (Алдахов к-сі, 17)" : "Самовывоз (ул. Алдахова, 17)";
  else delivText = isKz ? "Қазақстанның басқа қалалары" : "Другие города РК";

  let payText = "";
  if (data.payMethod === "kaspi_qr") payText = "Kaspi QR / Pay";
  else if (data.payMethod === "kaspi_red") payText = "Kaspi Red / 0-0-12";
  else payText = isKz ? "Курьерге қолма-қол" : "Наличными курьеру";

  let itemsText = "";
  cart.forEach((c, idx) => {
    const p = PRODUCTS_DATA.find(x => x.id === c.id);
    if (p) {
      itemsText += `${idx + 1}. ${p.title[currentLang]} x ${c.qty} дана = ${formatKZT(p.price * c.qty)}\n`;
    }
  });

  const kaspiNote = requestKaspiQrFlag
    ? (isKz
      ? `\n\n📲 *Kaspi QR сұрауы:* клиент Kaspi QR арқылы төлеуді сұрап отыр. QR-кодты жіберіңіз.`
      : `\n\n📲 *Запрос Kaspi QR:* клиент просит Kaspi QR для оплаты. Отправьте QR-код.`)
    : "";

  const message = (isKz 
    ? `🌟 *ТАПСЫРЫС | ЕВРОСВЕТ ҚҰЛСАРЫ*\n\n` +
      `👤 *Тапсырыс беруші:* ${data.name || "Көрсетілмеген"}\n` +
      `📞 *Телефон:* ${data.phone}\n` +
      `📍 *Жеткізу түрі:* ${delivText}\n` +
      `🏠 *Мекенжай:* ${data.address || "Дүкеннен алып кету"}\n` +
      `🔧 *Орнату шебері:* ${data.needInstall ? "Иә (+5 000 ₸)" : "Жоқ"}\n` +
      `💳 *Төлем тәсілі:* ${payText}\n\n` +
      `📦 *Тауарлар тізімі:*\n${itemsText}\n` +
      `💰 *Тауарлар сомасы:* ${formatKZT(data.subtotal)}\n` +
      `🚚 *Жеткізу:* ${data.delivCost === 0 ? "Тегін" : formatKZT(data.delivCost)}\n` +
      `⚡ *БАРЛЫҒЫ ТӨЛЕУГЕ:* ${formatKZT(data.grandTotal)}\n\n` +
      `Өтінемін, тапсырысымды қабылдап, растауыңызды сұраймын!`
    : `🌟 *НОВЫЙ ЗАКАЗ | ЕВРОСВЕТ КУЛЬСАРЫ*\n\n` +
      `👤 *Клиент:* ${data.name || "Не указано"}\n` +
      `📞 *Телефон:* ${data.phone}\n` +
      `📍 *Доставка:* ${delivText}\n` +
      `🏠 *Адрес:* ${data.address || "Самовывоз"}\n` +
      `🔧 *Монтаж люстры:* ${data.needInstall ? "Да (+5 000 ₸)" : "Нет"}\n` +
      `💳 *Способ оплаты:* ${payText}\n\n` +
      `📦 *Состав заказа:*\n${itemsText}\n` +
      `💰 *Сумма товаров:* ${formatKZT(data.subtotal)}\n` +
      `🚚 *Доставка:* ${data.delivCost === 0 ? "Бесплатно" : formatKZT(data.delivCost)}\n` +
      `⚡ *ИТОГО К ОПЛАТЕ:* ${formatKZT(data.grandTotal)}\n\n` +
      `Пожалуйста, подтвердите мой заказ!`) + kaspiNote;

  window.open(`https://wa.me/${STORE_WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

// Kaspi Modal Handlers
function openKaspiModal(amount, orderData = null) {
  pendingKaspiOrder = orderData;
  document.getElementById("kaspiModalAmount").innerText = formatKZT(amount);
  const overlay = document.getElementById("kaspiModalOverlay");
  if (overlay) overlay.classList.add("open");
}

function toggleKaspiModal(show) {
  const overlay = document.getElementById("kaspiModalOverlay");
  if (overlay) overlay.classList.toggle("open", show);
  if (!show) pendingKaspiOrder = null;
}

function handleKaspiOverlayClick(e) {
  if (e.target.id === "kaspiModalOverlay") {
    toggleKaspiModal(false);
  }
}

// ========================================================
// ПІКІРЛЕР ЖҮЙЕСІ (Customer reviews logic)
// ========================================================
function renderReviews() {
  const container = document.getElementById("reviewsListGrid");
  if (!container) return;

  container.innerHTML = reviews.map(r => {
    const initial = r.author.charAt(0).toUpperCase();
    return `
      <div class="review-card">
        <div class="review-card-header">
          <div class="reviewer-meta">
            <div class="reviewer-avatar">${initial}</div>
            <div class="reviewer-info">
              <strong>${escapeHtml(r.author)}</strong>
              <span>${escapeHtml(r.city)} • ${r.date}</span>
            </div>
          </div>
          <div class="stars-gold">${renderStars(r.rating)}</div>
        </div>
        ${r.productName ? `<span class="review-card-product"><i class="fa-solid fa-bag-shopping"></i> ${escapeHtml(r.productName)}</span>` : ""}
        <p class="review-card-text">${escapeHtml(r.text)}</p>
      </div>
    `;
  }).join("");
}

function toggleReviewForm() {
  const formBox = document.getElementById("addReviewFormContainer");
  if (formBox) {
    formBox.style.display = formBox.style.display === "none" ? "block" : "none";
  }
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const author = document.getElementById("reviewAuthor")?.value.trim();
  const city = document.getElementById("reviewCity")?.value.trim() || (currentLang === "kz" ? "Құлсары қ." : "г. Кульсары");
  const productName = document.getElementById("reviewProduct")?.value.trim() || "";
  const text = document.getElementById("reviewText")?.value.trim();
  const ratingInput = document.querySelector('input[name="starRating"]:checked');
  const rating = ratingInput ? parseInt(ratingInput.value) : 5;

  if (!author || !text) return;

  const newReview = {
    id: Date.now(),
    author,
    city,
    date: new Date().toISOString().split("T")[0],
    rating,
    text,
    productName
  };

  reviews.unshift(newReview);
  localStorage.setItem("evrosvet_reviews", JSON.stringify(reviews));
  renderReviews();
  toggleReviewForm();
  e.target.reset();
  showToast(TRANSLATIONS[currentLang].reviewSuccess);
}

// ========================================================
// ЖИ ОПЕРАТОР / AI CHATBOT (Айсұлу - ЕвроСвет Көмекшісі)
// ========================================================
function toggleAiChat() {
  const box = document.getElementById("aiChatBox");
  if (box) box.classList.toggle("open");
}

function openAiChat() {
  const box = document.getElementById("aiChatBox");
  if (box && !box.classList.contains("open")) {
    box.classList.add("open");
  }
}

function updateAiGreeting() {
  const greetingEl = document.querySelector(".ai-msg.bot .ai-bubble");
  if (greetingEl) {
    greetingEl.innerHTML = TRANSLATIONS[currentLang].aiGreeting;
  }
  setupQuickPrompts();
}

function setupQuickPrompts() {
  const container = document.getElementById("aiQuickPrompts");
  if (!container) return;
  const isKz = currentLang === "kz";

  const prompts = isKz ? [
    "Қонақ бөлмеге люстра ұсын",
    "Құлсары бойынша жеткізу қалай?",
    "Kaspi Red / Рассрочка бар ма?",
    "Жарық түсін (Кельвин) қалай таңдаймын?"
  ] : [
    "Подбери люстру для зала",
    "Как работает доставка по Кульсары?",
    "Есть ли Kaspi Red / Рассрочка?",
    "Как выбрать цветовую температуру (Кельвин)?"
  ];

  container.innerHTML = prompts.map(p => `
    <button type="button" class="prompt-chip" onclick="sendAiPrompt(this.innerText)">${p}</button>
  `).join("");
}

function sendAiPrompt(text) {
  const input = document.getElementById("aiUserInput");
  if (input) {
    input.value = text;
    handleAiSubmit(new Event("submit"));
  }
}

function handleAiSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("aiUserInput");
  if (!input) return;
  const query = input.value.trim();
  if (!query) return;

  appendAiMessage("user", query);
  input.value = "";

  // ЖИ-дың жауабын генерациялау
  setTimeout(() => {
    const botReply = generateAiResponse(query);
    appendAiMessage("bot", botReply);
  }, 500);
}

function appendAiMessage(sender, text) {
  const container = document.getElementById("aiChatMessages");
  if (!container) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = `ai-msg ${sender}`;
  msgDiv.innerHTML = `<div class="ai-bubble">${text}</div>`;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

// Табиғи тілді өңдеу (NLP rule-based smart engine for lighting)
function generateAiResponse(input) {
  const q = input.toLowerCase();
  const isKz = currentLang === "kz";

  // 1. Қонақ бөлме / Зал / Гостиная
  if (q.includes("қонақ") || q.includes("зал") || q.includes("гостин")) {
    return isKz
      ? `🛋️ <strong>Қонақ бөлмеге арналған тамаша ұсыныстар:</strong><br><br>` +
        `• <strong>Gold Halo 120W</strong> (68 000 ₸) — 20-28 м² бөлмеге өте жарық, пульті бар, 3 түрлі реңкке ауысады.<br>` +
        `• <strong>Royal Crystal</strong> (95 000 ₸) — салтанатты хрусталь люстра, залдың көркін ашады.<br><br>` +
        `💡 Каталогтан қарап немесе дүкенімізге келіп өз көзіңізбен көре аласыз (Өтеулі Алдахов к-сі, 17)!`
      : `🛋️ <strong>Рекомендации для зала и гостиной:</strong><br><br>` +
        `• <strong>Gold Halo 120W</strong> (68 000 ₸) — на площадь 20-28 м², стильные кольца, управление с пульта и смартфона.<br>` +
        `• <strong>Royal Crystal</strong> (95 000 ₸) — роскошный хрусталь K9 для праздничной атмосферы.<br><br>` +
        `💡 Загляните к нам в шоу-рум: ул. Отеули Алдахова, 17!`;
  }

  // 2. Жеткізу / Доставка
  if (q.includes("жеткізу") || q.includes("доставк") || q.includes("қашан") || q.includes("куда")) {
    return isKz
      ? `🚚 <strong>Құлсары бойынша жеткізу шарттары:</strong><br><br>` +
        `• Құлсары қаласында 30 000 ₸-ден бастап <strong>ТЕГІН</strong> жеткіземіз!<br>` +
        `• Тапсырыс берген күні есігіңізге дейін курьер жеткізеді.<br>` +
        `• Жаңа Қаратон, Теңіз және Жылыой ауылдарына да жеткізу бар.<br>` +
        `• Сондай-ақ кәсіби орнату шеберінің қызметін (+5 000 ₸) қоса аласыз!`
      : `🚚 <strong>Условия доставки:</strong><br><br>` +
        `• По городу Кульсары доставка <strong>БЕСПЛАТНАЯ</strong> при заказе от 30 000 ₸!<br>` +
        `• Доставляем в день оформления прямо до вашей двери.<br>` +
        `• Также доставляем в посёлки Жана Каратон, Тенгиз и по всему Жылыойскому району.<br>` +
        `• Доступна услуга профессионального монтажа (+5 000 ₸).`;
  }

  // 3. Kaspi Red / Рассрочка / Бөліп төлеу
  if (q.includes("kaspi") || q.includes("каспи") || q.includes("red") || q.includes("ред") || q.includes("рассрочк") || q.includes("бөліп")) {
    return isKz
      ? `💳 <strong>Kaspi арқылы төлеу мүмкіндіктері:</strong><br><br>` +
        `• <strong>Kaspi Red</strong> — 3 айға пайызсыз бөліп төлеу.<br>` +
        `• <strong>Kaspi Рассрочка 0-0-12</strong> (және 0-0-24 акция күндері).<br>` +
        `• <strong>Kaspi QR</strong> арқылы 1% бонус қайтарылады.<br><br>` +
        `Себетке салып, бірден сайтта Kaspi QR арқылы төлей аласыз немесе WhatsApp арқылы шот жібереміз!`
      : `💳 <strong>Оплата через Kaspi:</strong><br><br>` +
        `• <strong>Kaspi Red</strong> — беспроцентная рассрочка на 3 месяца.<br>` +
        `• <strong>Kaspi Рассрочка 0-0-12</strong> без переплат.<br>` +
        `• <strong>Kaspi QR</strong> — начисляется 1% бонусов.<br><br>` +
        `Вы можете оплатить прямо в корзине через QR или запросить счёт через WhatsApp!`;
  }

  // 4. Жарық түсі / Кельвин / Температура света
  if (q.includes("кельвин") || q.includes("түс") || q.includes("жылы") || q.includes("суық") || q.includes("цвет") || q.includes("теплый") || q.includes("холодный")) {
    return isKz
      ? `💡 <strong>Жарық температурасын таңдау бойынша кеңес:</strong><br><br>` +
        `• <strong>Жылы жарық (3000K)</strong> — жатын бөлме мен демалыс аймағына жайлылық береді.<br>` +
        `• <strong>Бейтарап күндізгі (4000K)</strong> — қонақ бөлме, ас үй және кеңсе үшін ең дұрыс таңдау, көзге салмақ салмайды.<br>` +
        `• <strong>Суық ақ (6000K)</strong> — жұмыс аймағы мен ваннаға арналған.<br><br>` +
        `Біздің көптеген LED люстраларымызда 3 режим де бар, пультпен бір секундта өзгерте аласыз!`
      : `💡 <strong>Как выбрать цветовую температуру:</strong><br><br>` +
        `• <strong>Теплый свет (3000K)</strong> — для спальни и зон отдыха, создает уют.<br>` +
        `• <strong>Нейтральный дневной (4000K)</strong> — универсален для зала, кухни и детской, приятен для глаз.<br>` +
        `• <strong>Холодный свет (6000K)</strong> — яркий рабочий свет для кабинетов.<br><br>` +
        `Большинство наших LED люстр включают все 3 режима с переключением с пульта!`;
  }

  // 5. Бағасы / Скидка / Скидки
  if (q.includes("баға") || q.includes("цена") || q.includes("скидк") || q.includes("жеңілдік")) {
    return isKz
      ? `🏷️ Біздің бағалар тікелей зауыттық бағамен ұсынылады (14 500 ₸-ден 95 000 ₸-ге дейін). Сондай-ақ бүгін таңдаулы модельдерге -20% дейін жеңілдіктер жүріп жатыр! Каталогта қызыл және сары белгісі бар тауарларды қараңыз.`
      : `🏷️ У нас прямые фабричные цены (от 14 500 ₸ до 95 000 ₸). Сейчас действуют скидки до -20% на хиты продаж! Обратите внимание на стикеры СКИДКА и ХИТ в каталоге.`;
  }

  // 6. Мекенжай / Адрес / Телефон
  if (q.includes("қайда") || q.includes("мекен") || q.includes("адрес") || q.includes("номер") || q.includes("тел")) {
    return isKz
      ? `📍 <strong>ЕвроСвет Құлсары дүкені:</strong><br>` +
        `• Мекенжай: Құлсары қ., Өтеулі Алдахов к-сі, 17 (ТД Багдат маңы)<br>` +
        `• Телефон & WhatsApp: <strong>${STORE_PHONE}</strong><br>` +
        `• Telegram / WhatsApp: <strong>${STORE_PHONE_2}</strong><br>` +
        `• Жұмыс уақыты: Күн сайын 09:00 - 20:00.<br>` +
        `<a href="${STORE_2GIS_URL}" target="_blank" style="color: #e5b95f; text-decoration: underline;">👉 2ГИС-те маршрут ашу</a>`
      : `📍 <strong>Магазин «ЕвроСвет» в Кульсары:</strong><br>` +
        `• Адрес: г. Кульсары, ул. Отеули Алдахова, 17 (возле ТД Багдат)<br>` +
        `• Телефон & WhatsApp: <strong>${STORE_PHONE}</strong><br>` +
        `• Telegram / WhatsApp: <strong>${STORE_PHONE_2}</strong><br>` +
        `• Режим: Ежедневно с 09:00 до 20:00 без выходных.<br>` +
        `<a href="${STORE_2GIS_URL}" target="_blank" style="color: #e5b95f; text-decoration: underline;">👉 Открыть маршрут в 2ГИС</a>`;
  }

  // Әдепкі жауап
  return isKz
    ? `Сұрағыңызға рахмет! 😊 Нақты сұрағыңыз бойынша біздің маманмен тікелей WhatsApp немесе Telegram арқылы сөйлесуді ұсынамын: <a href="https://wa.me/${STORE_WA_NUMBER}" target="_blank" style="color: #25d366; font-weight: bold;">${STORE_PHONE}</a> / <a href="${STORE_TG_URL}" target="_blank" style="color: #229ed9; font-weight: bold;">${STORE_PHONE_2}</a>. Немесе сұрағыңызды қайталап көріңіз (мысалы: "Залға люстра", "Kaspi Red", "Жеткізу").`
    : `Спасибо за ваш вопрос! 😊 Вы также можете быстро связаться с нашим менеджером в WhatsApp или Telegram: <a href="https://wa.me/${STORE_WA_NUMBER}" target="_blank" style="color: #25d366; font-weight: bold;">${STORE_PHONE}</a> / <a href="${STORE_TG_URL}" target="_blank" style="color: #229ed9; font-weight: bold;">${STORE_PHONE_2}</a>. Или уточните вопрос (например: «люстра в зал», «рассрочка», «доставка»).`;
}

// ========================================================
// ҚОСЫМША КӨМЕКШІ ФУНКЦИЯЛАР (Utilities)
// ========================================================
function formatKZT(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₸";
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let html = "";
  for (let i = 0; i < fullStars; i++) {
    html += '<i class="fa-solid fa-star"></i>';
  }
  if (hasHalf) {
    html += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    html += '<i class="fa-regular fa-star"></i>';
  }
  return html;
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(msg) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.style.cssText = `
      position: fixed;
      top: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: #1e293b;
      color: #fff;
      border: 1px solid #e5b95f;
      padding: 12px 24px;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      z-index: 9999;
      opacity: 0;
      transition: all 0.3s ease;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.style.opacity = "1";
  toast.style.transform = "translateX(-50%) translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(-10px)";
  }, 2400);
}

function updateFloatingBarVisibility() {
  const bar = document.querySelector(".floating-contact-bar");
  if (!bar) return;
  bar.classList.toggle("is-visible", window.scrollY > 220);
}
