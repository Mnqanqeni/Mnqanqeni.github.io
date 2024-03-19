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

window.addEventListener('DOMContentLoaded', (event) => {
  const isLaptop = window.innerWidth >= 500; // Check if the device width is greater than or equal to the width of a large tablet or desktop

  if (isLaptop) {
    const nav = document.querySelector('nav ul');
    const homeListItem = document.createElement('li');
    homeListItem.innerHTML = '<a href="#home">Home</a>';
    nav.prepend(homeListItem);

    const logo = document.querySelector('.logo span a');
    logo.textContent = 'Ndiyakholwa Mnqanqeni';
  }
});
