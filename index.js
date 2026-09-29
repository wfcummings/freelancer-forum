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
  const freelancer = makeFreelancer();
  freelancers.push(freelancer);
}

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
// ===== COMPONENTS =====

function Freelancer(freelancer) {
  const $freelancer = document.createElement("li");
  $freelancer.classList.add("freelancer");
  $freelancer.textContent = freelancer;
  return $freelancer;
}

function Freelancers(freelancers) {
  const $freelancers = document.createElement("ul");
  $freelancers.classList.add("ul");
  const $children = freelancers.map(Freelancer);
  $freelancers.replaceChildren(...$children);
  return $freelancers;
}
// ===== RENDER =====

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <p>The average rate is $100</p>
    <freelancer></freelancer>
`;
  //$app.querySelector("AverageRate").replaceWith(AverageRate(freelancers));
  $app.querySelector("freelancer").replaceWith(Freelancers(freelancers));
}
render();
