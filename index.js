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

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
const averageRate = getAverageRate(freelancers);

function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

  return {
    name,
    occupation,
    rate,
  };
}

function getAverageRate() {
  const sum = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0);

  return sum / freelancers.length;
}
// ===== COMPONENTS =====

function Freelancer(freelancer) {
  const $tr = document.createElement("tr");

  $tr.innerHTML = `
  <td>${freelancer.name}</td>
  <td>${freelancer.occupation}</td>
  <td>$${freelancer.rate}</td>
  `;
  return $tr;
}

function Freelancers(freelancers) {
  const $table = document.createElement("table");

  $table.innerHTML = `
  <thead>
    <tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Rate</th>
    </tr>
    <tbody>
    </tbody>
  </thead>
`;

  const $freelancers = freelancers.map(Freelancer);
  $table.querySelector("tbody").replaceChildren(...$freelancers);
  return $table;
}

function AverageRate(averageRate) {
  const $p = document.createElement("p");
  $p.textContent = `The average rate is $${averageRate}.`;
  return $p;
}
// ===== RENDER =====

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <freelancer></freelancer>
`;
  $app.querySelector("AverageRate").replaceWith(AverageRate(averageRate));
  $app.querySelector("freelancer").replaceWith(Freelancers(freelancers));
}
render();
