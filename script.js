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

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько это обойдётся?", '');    
  if ( typeof(a) != null && typeof(b) != 0 && a != '' && 
      b != '' && a.length < 50) {
     console.log('done');
     appData.expenses[a] = b;
  } else {
      i = i - 1;
    }
  }  
}
chooseExpenses();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень дохода");
  } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень дохода");
  } else if (appData.moneyPerDay >= 2000) {
    console.log("Средний уровень дохода");
  } else {
    console.log("Произошла ошибка");
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncome = (save/12/100 * percent).toFixed();
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }  
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let optional = prompt("Статья необязательных расходов?");
    appData.optionalExpenses[i + 1] = optional;
  }
}
chooseOptExpenses();