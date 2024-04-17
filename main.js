var typed = new Typed(".text-loop", {
  strings: ['Full-stack Developer', 'Software Engineer', 'Coding Enthusiast'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelayed: 1000,
  loop: true,
});

function updateLayout() {
  let isLaptop = document.documentElement.clientWidth >= 670;
  const nav = document.querySelector('nav ul');
  const homeLink = nav.querySelector('a[href="#home"]');

  if (isLaptop) {
    const logo = document.querySelector('.logo span a');
    logo.textContent = 'Ndiyakholwa Mnqanqeni';
  } else {
    const logo = document.querySelector('.logo span a');
    logo.textContent = 'Portfolio.';
  }
  
  isLaptop = document.documentElement.clientWidth >= 460;
  if (isLaptop && !homeLink) {
    const homeListItem = document.createElement('li');
    homeListItem.innerHTML = '<a href="#home">Home</a>';
    nav.prepend(homeListItem);
  } else if (!isLaptop && homeLink) {
    homeLink.parentNode.remove();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  updateLayout(); 
  setInterval(updateLayout, 100);
});

document.addEventListener("DOMContentLoaded", function() {
  var skillBars = document.querySelectorAll('.skill-bar');

  skillBars.forEach(function(skillBar) {
    var percent = skillBar.getAttribute('data-percent');
    var overlay = skillBar.querySelector('.skill-bar__overlay');
    var angle = (360 * percent) / 100;

    if (angle <= 180) {
      overlay.style.backgroundImage = 'linear-gradient(' + (90 + angle) + 'deg, transparent 50%, Beige 50%),linear-gradient(90deg, Biege 50%, transparent 50%)';
    } else {
      overlay.style.backgroundImage = 'linear-gradient(' + (angle - 90) + 'deg, transparent 50%, rgb(218, 40, 40) 50%),linear-gradient(90deg, Beige 50%, transparent 50%)';
    }
  });
});

function sendEmail() {
  window.location.href = "mailto:ndiyakholwa.mnqanqeni@umuzi.org";
}



document.addEventListener("DOMContentLoaded", function() {
  var skillBars = document.querySelectorAll('.skill-bar');

  skillBars.forEach(function(skillBar) {
    var percent = skillBar.getAttribute('data-percent');
    var overlay = skillBar.querySelector('.skill-bar__overlay');
    var angle = (360 * percent) / 100;

    if (angle <= 180) {
      overlay.style.backgroundImage = 'linear-gradient(' + (90 + angle) + 'deg, transparent 50%, Beige 50%),linear-gradient(90deg, Beige 50%, transparent 50%)';
    } else {
      overlay.style.backgroundImage = 'linear-gradient(' + (angle - 90) + 'deg, transparent 50%, rgb(218, 40, 40) 50%),linear-gradient(90deg, Beige 50%, transparent 50%)';
    }
  });

  // Function to clear form fields
  function clearFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }


  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(event.target);

    fetch(event.target.action, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        clearFormFields();
        alert('Form submitted successfully!');
      } else {
        throw new Error('Form submission failed.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Form submission failed. Please try again later.');
    });
  });
});
