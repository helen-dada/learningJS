let app = document.querySelector('.app');
  app.style.background = '#ade5ff';

let startBtn = document.getElementById('start');
  startBtn.style.background = 'NavajoWhite';
  startBtn.style.color = 'grey';
  
  //поля справа
  let budget = document.getElementsByClassName('budget-value');
  let daybudget = document.getElementsByClassName('daybudget-value');
  let level = document.getElementsByClassName('level-value');
  let expenses = document.getElementsByClassName('expenses-value');
  let optionalexpenses = document.getElementsByClassName('optionalexpenses-value');
  let income = document.getElementsByClassName('income-value');
  let monthsavings = document.getElementsByClassName('monthsavings-value');
  let yearsavings = document.getElementsByClassName('yearsavings-value');

  //поля слева
  let basicExp = document.getElementsByClassName('expenses-item');
  let btns = document.getElementsByTagName('button');
  let affirm = [btns[0], btns[1]];
    affirm[0].style.background = 'NavajoWhite';
    affirm[1].style.background = 'NavajoWhite';
    affirm[0].style.color = 'grey';
    affirm[1].style.color = 'grey';
  let calc = btns[2];
    calc.style.background = 'NavajoWhite';
    calc.style.color = 'grey';
  let optionalexpensesList = document.querySelectorAll('.optionalexpenses-item');
  let checksavings = document.querySelector('.checksavings');
  let sum = document.querySelector('.choose-sum');
  let percent = document.querySelector('.choose-percent');
  let year = document.querySelector('.year-value');
  let month = document.querySelector('.month-value');
  let day = document.querySelector('.day-value');

  


