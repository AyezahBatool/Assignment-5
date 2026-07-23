document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName')?.value;
      const email = document.getElementById('contactEmail')?.value;
      const message = document.getElementById('contactMessage')?.value;

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.');
        return;
      }

      showToast('Thank you! Your message has been sent to our master roasters.');
      contactForm.reset();
    });
  }
});
