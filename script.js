let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}
start();


let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько это обойдётся?", '');    
  if ( typeof(a) != null && typeof(b) != 0 && a != '' 
       && b != '' && a.length < 50) {
     console.log('done');
     appData.expenses[a] = b;
  } else {
      i = i - 1;
    }
  }
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(1);

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Низкий уровень дохода");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень дохода");
} else if (appData.moneyPerDay >= 2000) {
  console.log("Средний уровень дохода");
} else {
  console.log("Произошла ошибка");
};