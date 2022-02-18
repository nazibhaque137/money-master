const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const btnCal = document.getElementById('btnCal');
const totalExpense = document.getElementById('totalExpense');
const cBalance = document.getElementById('cBalance');
const save = document.getElementById('save');
const saveCal = document.getElementById('saveCal');
const sAmount = document.getElementById('sAmount');
const rBalance = document.getElementById('rBalance');


var incomeTo;
var foodTotal;
var rentTotal;
var clothesTotal;
var savePercent;

btnCal.addEventListener('click', calculate);
saveCal.addEventListener('click', calSavings);

function parseValues() {
    incomeTotal = parseInt(income.value);
    foodTotal = parseInt(food.value);
    rentTotal = parseInt(rent.value);
    clothesTotal = parseInt(clothes.value);
    savePercent = parseInt(save.value);
}

// Income & Expense Calculation
function calculate() {
    parseValues();

    if ((incomeTotal >= 0) && (foodTotal >= 0) && (rentTotal >= 0) && (clothesTotal >= 0)) {
        var expenseTotal = foodTotal + rentTotal + clothesTotal;
        if (expenseTotal > incomeTotal) {
            alert("Please do not spend more money than you earn!");
        }
        else if (expenseTotal == incomeTotal) {
            alert("You have no money left to save!");
        }
        totalExpense.innerHTML = expenseTotal;
        cBalance.innerHTML = incomeTotal - expenseTotal;
    }
    else {
        alert("Enter Positive Numbers please...");
    }
}
// Savings Calculation 
function calSavings() {
    parseValues();
    var saveTotal = (incomeTotal * savePercent) / 100;
    sAmount.innerHTML = saveTotal;
    var remainingBalance = parseInt(cBalance.innerHTML) - saveTotal;
    if (saveTotal > 0) {
        if (remainingBalance >= 0) {
            rBalance.innerHTML = remainingBalance;
        }
        else {
            alert('You do not have enough money remaining!');
        }
    } else {
        alert('Enter Positive Numbers in the Savings field please...');
    }
}

