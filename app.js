// https://www.omnicalculator.com/finance/total-asset-turnover#what-is-the-total-asset-turnover-ratio-the-meaning-of-the-total-asset-turnover-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const totalassetturnoverRadio = document.getElementById('totalassetturnoverRadio');
const beginningassetRadio = document.getElementById('beginningassetRadio');
const endingassetRadio = document.getElementById('endingassetRadio');
const revenueRadio = document.getElementById('revenueRadio');

let totalassetturnover;
let beginningasset = v1;
let endingasset = v2;
let revenue = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

totalassetturnoverRadio.addEventListener('click', function() {
  variable1.textContent = 'Beginning asset';
  variable2.textContent = 'Ending asset';
  variable3.textContent = 'Revenue';
  beginningasset = v1;
  endingasset = v2;
  revenue = v3;
  result.textContent = '';
});

beginningassetRadio.addEventListener('click', function() {
  variable1.textContent = 'Total asset turnover';
  variable2.textContent = 'Ending asset';
  variable3.textContent = 'Revenue';
  totalassetturnover = v1;
  endingasset = v2;
  revenue = v3;
  result.textContent = '';
});

endingassetRadio.addEventListener('click', function() {
  variable1.textContent = 'Total asset turnover';
  variable2.textContent = 'Beginning asset';
  variable3.textContent = 'Revenue';
  totalassetturnover = v1;
  beginningasset = v2;
  revenue = v3;
  result.textContent = '';
});

revenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Total asset turnover';
  variable2.textContent = 'Beginning asset';
  variable3.textContent = 'Ending asset';
  totalassetturnover = v1;
  beginningasset = v2;
  endingasset = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(totalassetturnoverRadio.checked)
    result.textContent = `Total asset turnover = ${computetotalassetturnover().toFixed(2)}`;

  else if(beginningassetRadio.checked)
    result.textContent = `Beginning asset = ${computebeginningasset().toFixed(2)}`;

  else if(endingassetRadio.checked)
    result.textContent = `Ending asset = ${computeendingasset().toFixed(2)}`;

  else if(revenueRadio.checked)
    result.textContent = `Revenue = ${computerevenue().toFixed(2)}`;
})

// calculation

function computetotalassetturnover() {
  return Number(revenue.value) / ((Number(beginningasset.value) + Number(endingasset.value)) / 2);
}

function computebeginningasset() {
  return ((Number(revenue.value) / Number(totalassetturnover.value)) * 2) - Number(endingasset.value);
}

function computeendingasset() {
  return ((Number(revenue.value) / Number(totalassetturnover.value)) * 2) - Number(beginningasset.value);
}

function computerevenue() {
  return Number(totalassetturnover.value) * ((Number(beginningasset.value) + Number(endingasset.value)) / 2);
}