// highlights the active page in nav-bar
document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;
  var links = document.querySelectorAll(".nav-bar a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].href === currentUrl) {
      links[i].parentNode.classList.add("active");
      break;
    }
  }
});

// Define the scrollToMain function
document.addEventListener("DOMContentLoaded", function () {
  function scrollToMain() {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
  }

  // Find the button and attach the scrollToMain function to it
  var scrollToMainBtn = document.getElementById("scrollToMainBtn");
  if (scrollToMainBtn) {
    scrollToMainBtn.addEventListener("click", scrollToMain);
  }
});

// activates alternative style
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("visually-impaired");
  });
});

// trigger message after email subscription
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribe-form");
  const messageElement = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    messageElement.textContent = "You have subscribed to our newsletter";

    // Reset message after 5 seconds
    setTimeout(function () {
      messageElement.textContent = "";
    }, 5000);

    // Reset form after 5 seconds
    setTimeout(function () {
      form.reset();
    }, 5000);
  });
});

// trigger message after contact form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Show success message
    successMessage.style.display = "block";

    // Reset form after 5 seconds
    setTimeout(function () {
      contactForm.reset();
      successMessage.style.display = "none";
    }, 5000);
  }

  // Attach the submitForm function to the contact form
  if (contactForm) {
    contactForm.addEventListener("submit", submitForm);
  }
});
