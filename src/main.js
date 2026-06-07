import './style.css'
window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 1800); // waits for logo animation to finish
  });