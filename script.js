const display = document.getElementById('display');

// Aggiunge un valore al display
function appendValue(value) {
  display.value += value;
}

// Pulisce tutto
function clearDisplay() {
  display.value = '';
}

// Cancella ultimo carattere
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calcola il risultato
function calculate() {
  try {
    const result = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-'));
    display.value = result;
  } catch (error) {
    display.value = 'Errore';
    setTimeout(() => clearDisplay(), 1500);
  }
}

// Aggiunge supporto tastiera
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || key === '.') {
    appendValue(key);
  } else if (['+', '-', '*', '/', '%'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});