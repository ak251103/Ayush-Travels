// ---------- Load Destinations Dynamically ----------
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".location-content");
  if (container) {
    destinations.forEach(dest => {
      const card = document.createElement("div");
      card.className = "col-content";
      card.innerHTML = `
        <img src="${dest.image}" alt="${dest.city}" />
        <h5>${dest.country}</h5>
        <p>${dest.city}</p>
      `;
      container.appendChild(card);
    });
  }
});

// ---------- Newsletter Subscription Handler ----------
const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.emailid.value;
    if (email && /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
      alert(`Thanks for subscribing, ${email}!`);
      this.reset();
    } else {
      alert("Please enter a valid email.");
    }
  });
}

// ---------- Registration Form Validation ----------
const registerForm = document.querySelector('.register-form form');
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    const phone = document.getElementById("phonenum").value;
    const age = document.querySelector('input[name="myage"]').value;
    const email = document.querySelector('input[name="myemail"]').value;
    const destinationsChecked = document.querySelectorAll('input[name="td"]:checked');
    const packageSelected = document.querySelectorAll('input[name="locations"]:checked');

    // Phone validation
    if (phone.length < 10 || isNaN(phone)) {
      alert("Phone number must be at least 10 digits and numeric.");
      e.preventDefault();
      return false;
    }

    // Age validation
    if (age < 18) {
      alert("You must be at least 18 years old.");
      e.preventDefault();
      return false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return false;
    }

    // Destinations
    if (destinationsChecked.length === 0) {
      alert("Select at least one travel destination.");
      e.preventDefault();
      return false;
    }

    // Package
    if (packageSelected.length === 0) {
      alert("Select a travel package.");
      e.preventDefault();
      return false;
    }

    // Passed all validations
    alert("Registration submitted successfully!");
  });
}
