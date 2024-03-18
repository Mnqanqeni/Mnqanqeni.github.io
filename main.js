var typed = new Typed(".text-loop", {
  strings: ["Web Developer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelayed: 1000,
  loop: true,
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    })
    .then(response => {
      console.log("Email sent successfully!");
      form.reset();
    })
    .catch(error => {
      console.error("Error sending email:", error);
    });
  });
});
