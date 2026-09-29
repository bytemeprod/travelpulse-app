// TravelPulse App JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('TravelPulse Mobile Web Application Initialized');
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      alert('Мобильное меню переключено');
    });
  }
});