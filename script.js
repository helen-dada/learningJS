let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }  
}

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses: function() {
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
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Низкий уровень дохода");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень дохода");
    } else if (appData.moneyPerDay >= 2000) {
      console.log("Средний уровень дохода");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
      appData.monthIncome = (save/12/100 * percent).toFixed();
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }  
  }, 
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let optional = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i + 1] = optional;
    }
  },
  chooseIncome: function() {
    let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
    appData.income = items.split(", ");
    let oneMore = prompt("Может что-то ещё?", "");
    while (oneMore == null || oneMore == '') {
      oneMore = prompt("Может что-то ещё?", "");
    }
    appData.income.push(oneMore);
    appData.income.sort();
    appData.income.forEach(function(item, index, array) { 
      alert (`Способ доп. заработка: ${index + 1} ${item}`);
    });
  },
  dataOutput: function() {
    for (var key in appData) {
      console.log ("Наша программа включает в себя данные: " + key + " со значением: " + appData[key]);
    }
  }
};