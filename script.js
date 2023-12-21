COUNTRIES = [
    'Россия',
    'Великобритания',
    'Франция',
    'Германия',
    'Польша',
    'Австрия',
    'Андорра',
    'Больгария',
    'Греция',
    'Италия',
    'Ирландия',
    'Нидерланды',
    'Сербия',
    'Украина',
    'Беларусь',
    // '',

    'Азербайджан',
    'Армения',
    'Грузия',
    'Ирак',
    'Иран',
    'Казахстан',
    'Кувейт',
    'ОАЭ',
    'Турция',
    'Узбекистан',
    'Япония',
    // '',

    'США',
    'Канада',
    'Коста-Рика',
    'Чили',
    'Ямайка',
    // '',

    'Египет',
    'Западная Сахара',
    'Сан-Томе и Принсипи',
    'Чад',
    'Эфиопия',
    // '',

    'Федеративный штаты Микронезия',
    'Соломоновы острова',
]
ALREADY_WERE = []


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function generate() {
    index = getRandomInt(COUNTRIES.length);
    while (ALREADY_WERE.indexOf(COUNTRIES[index])>-1)
        index = getRandomInt(COUNTRIES.length);
    document.getElementById('result').innerText=COUNTRIES[index];
    ALREADY_WERE.push(COUNTRIES[index]);
    console.log(COUNTRIES[index],ALREADY_WERE);
}