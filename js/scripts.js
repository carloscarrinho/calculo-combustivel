/* Variáveis de estado */

/** Elementos */
var initialKmEl = null;
var finalKmEl = null;
var litersEl = null;
var spentFuelEl = null;

/** Variáveis globais */
var initialKm = null;
var finalKm = null;
var liters = null;
var spentFuel = null;

window.addEventListener("load", () => {
  initialKmEl = document.querySelector('#initial-km');
  finalKmEl = document.querySelector('#final-km');
  litersEl = document.querySelector('#liters');
  spentFuelEl = document.querySelector('#spent-fuel');
  
  initialKmEl.addEventListener('change', calcSpentFuel);
  finalKmEl.addEventListener('change', calcSpentFuel);
  litersEl.addEventListener('change', calcSpentFuel);
});

function calcSpentFuel() {
  initialKm = initialKmEl.value;
  finalKm = finalKmEl.value;
  liters = litersEl.value;
  mileage = finalKm - initialKm;
  spentFuel = mileage / liters;
  spentFuelEl.value = `${spentFuel.toFixed(2)} km/l`;
}
