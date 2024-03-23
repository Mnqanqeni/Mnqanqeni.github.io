var typed = new Typed(".text-loop", {
  strings: ["Web Developer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelayed: 1000,
  loop: true,
});

function updateLayout() {
  let isLaptop = document.documentElement.clientWidth >= 700;
  console.log(document.documentElement.clientWidth)
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
