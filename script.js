// FAQ Accordion Toggle
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    // Close all accordions
    document.querySelectorAll('.accordion-button').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.classList.remove('open');
    });

    if (!isOpen) {
      button.setAttribute('aria-expanded', 'true');
      content.classList.add('open');
    }
  });
});
