const prices = {
  ai: [100, 220, 200, 350],
  blockchain: [320, 120, 200, 100],
  iot: [250, 150, 350, 220],
  optional: [50, 100], // Optional service prices
};

// Add transaction fee rate and licensing fee
const transactionFeeRate = 0.03; // 3%
const licensingFee = 50;

const quantities = {
  ai: [0, 0, 0, 0],
  blockchain: [0, 0, 0, 0],
  iot: [0, 0, 0, 0],
  optional: [0, 0],
};

function updateUI() {
  let total = 0;

  // Compute total for all services
  Object.keys(quantities).forEach((category) => {
    quantities[category].forEach((qty, idx) => {
      const serviceTotal = qty * prices[category][idx];
      total += serviceTotal;

      // Update the quantity and total for each service
      document.getElementById(`${category}-service${idx + 1}-qty`).textContent = qty;
      document.getElementById(`${category}-service${idx + 1}-count`).textContent = qty;
      document.getElementById(`${category}-service${idx + 1}-total`).textContent = serviceTotal;
    });
  });

  // Calculate transaction fee
  const transactionFee = Math.round(total * transactionFeeRate);
  document.getElementById("transaction-fee").textContent = transactionFee;

  // Add licensing fee
  document.getElementById("licensing-fee").textContent = licensingFee;

  // Update total cost including fees
  const grandTotal = total + transactionFee + licensingFee;
  document.getElementById("total-cost").textContent = `$${grandTotal}`;
}

// Add event listeners to buttons
document.querySelectorAll(".plus-btn, .minus-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const category = e.target.getAttribute("data-category");
    const serviceIdx = parseInt(e.target.getAttribute("data-service")) - 1;
    const action = e.target.classList.contains("plus-btn") ? 1 : -1;

    // Update quantity
    quantities[category][serviceIdx] = Math.max(0, quantities[category][serviceIdx] + action);
    updateUI();
  });
});

// Initialize UI
updateUI();
