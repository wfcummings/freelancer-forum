/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// ===== STATE =====

const freelancers = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
  const freelancer = makeFreelaner();
  freelancers.push(freelancer);
  return freelancers;
}

function makeFreelaner() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

  return {
    name: name,
    occupation: occupation,
    rate: rate,
  };
}

// ===== RENDER =====

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <p>The average rate is $100</p>
    <freelancer></freelancer>
`;
  //$app.querySelector("AverageRate").replaceWith(AverageRate(freelancers));
  $app.querySelector("freelancer").replaceWith(Freelancers(freelancers));
}
render();
