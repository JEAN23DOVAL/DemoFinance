// SIMULATEUR DE PRÊT
document.getElementById('loan-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('loan-amount').value);
  const years = parseFloat(document.getElementById('loan-years').value);
  const rate = parseFloat(document.getElementById('loan-rate').value) / 100 / 12;
  const months = years * 12;

  const monthly = (amount * rate) / (1 - Math.pow(1 + rate, -months));
  const total = monthly * months;

  document.getElementById('loan-monthly').textContent = Math.round(monthly).toLocaleString();
  document.getElementById('loan-total').textContent = Math.round(total).toLocaleString();
});

// SIMULATEUR D’ÉPARGNE
document.getElementById('savings-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const principal = parseFloat(document.getElementById('savings-amount').value);
  const years = parseFloat(document.getElementById('savings-years').value);
  const rate = parseFloat(document.getElementById('savings-rate').value) / 100;

  const finalAmount = principal * Math.pow(1 + rate, years);
  const gain = finalAmount - principal;

  document.getElementById('savings-total').textContent = Math.round(finalAmount).toLocaleString();
  document.getElementById('savings-gain').textContent = Math.round(gain).toLocaleString();
});
