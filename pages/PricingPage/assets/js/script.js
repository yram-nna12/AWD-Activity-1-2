const prices = {
    ai: [100, 200, 300],
    blockchain: [150, 250, 350],
    iot: [120, 220, 320],
  };

  // Quantities for each service
  const quantities = {
    ai: [0, 0, 0],
    blockchain: [0, 0, 0],
    iot: [0, 0, 0],
  };

  function updateUI() {
    let total = 0;

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

    // Update total cost
    document.getElementById("total-cost").textContent = `$${total}`;
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
