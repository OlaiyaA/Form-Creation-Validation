// ✅ Run script after DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {

      // 1️⃣ Select form and feedback div
      const form = document.getElementById("registration-form");
      const feedbackDiv = document.getElementById("form-feedback");

      // 2️⃣ Add submit event listener
      form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // 3️⃣ Retrieve and trim inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // 4️⃣ Initialize validation variables
        let isValid = true;
        const messages = [];

        // 5️⃣ Username validation
        if (username.length < 3) {
          isValid = false;
          messages.push("Username must be at least 3 characters long.");
        }

        // 6️⃣ Email validation
        if (!email.includes("@") || !email.includes(".")) {
          isValid = false;
          messages.push("Please enter a valid email address.");
        }

        // 7️⃣ Password validation
        if (password.length < 8) {
          isValid = false;
          messages.push("Password must be at least 8 characters long.");
        }

        // 8️⃣ Display feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
          feedbackDiv.textContent = "Registration successful!";
          feedbackDiv.style.color = "#28a745";
          form.reset();
        } else {
          feedbackDiv.innerHTML = messages.join("<br>");
          feedbackDiv.style.color = "#dc3545";
        }
      });
    });