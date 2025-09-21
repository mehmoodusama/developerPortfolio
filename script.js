// ---------- Page Tab Switching ----------
function openTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));

  // Show the selected tab
  document.getElementById(tabId).classList.add("active");

  // Remove active class from all buttons
  const buttons = document.querySelectorAll("nav ul li button");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Add active class to the clicked button
  event.target.classList.add("active");
}

// ---------- Contact Form Mailto ----------
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop normal form submit

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // mailto link
  let mailtoLink = `mailto:mehmoodusama745@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
  
  window.location.href = mailtoLink;
});
