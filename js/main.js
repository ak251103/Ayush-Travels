// ---------- Destination Data ----------
const destinations = [
  {
    city: "Kashmir",
    country: "India",
    image: "./files/l1.jpg",
    description: "Heaven on Earth. Perfect for snow and serenity lovers."
  },
  {
    city: "Istanbul",
    country: "Turkey",
    image: "./files/l2.jpg",
    description: "Cultural melting pot between Europe and Asia."
  },
  {
    city: "Paris",
    country: "France",
    image: "./files/l3.jpg",
    description: "City of love and lights with timeless charm."
  },
  {
    city: "Bali",
    country: "Indonesia",
    image: "./files/l4.jpg",
    description: "Tropical paradise with amazing beaches and temples."
  },
  {
    city: "Dubai",
    country: "UAE",
    image: "./files/l5.jpg",
    description: "Luxury, skyscrapers, and endless shopping."
  },
  {
    city: "Geneva",
    country: "Switzerland",
    image: "./files/l6.jpg",
    description: "Scenic lakeside city and home to global diplomacy."
  },
  {
    city: "Port Blair",
    country: "India",
    image: "./files/l7.jpg",
    description: "Islands, coral reefs, and WWII history."
  },
  {
    city: "Rome",
    country: "Italy",
    image: "./files/l8.jpg",
    description: "History, art, and ancient ruins in one place."
  }
];

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
