document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home-button');
    const animateInElements = document.querySelectorAll('.animate-in');
    const animateOutElements = document.querySelectorAll('h1, .home-button, footer');
  
    // Animate elements in
    animateInElements.forEach((el, index) => {
      el.style.setProperty('--order', index + 1);
    });
  
    homeButton.addEventListener('click', function(e) {
      e.preventDefault();  // Prevent immediate redirection
      animateOutElements.forEach((el, index) => {
        el.classList.add('animate-out');
        el.style.setProperty('--order', index + 1);
  
        // Set random direction for each element
        const angle = Math.random() * Math.PI * 2;
        const distance = 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
  
        el.style.setProperty('--x', `${x}px`);
        el.style.setProperty('--y', `${y}px`);
      });
  
      setTimeout(() => {
        window.location.href = homeButton.getAttribute('href');
      }, 1000); // Adjust this time based on your animation duration
    });
});
