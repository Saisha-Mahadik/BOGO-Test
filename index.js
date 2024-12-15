// Select all offer items
const offerItems = document.querySelectorAll('.offer-item');

offerItems.forEach((item) => {
  const radio = item.querySelector('input[type="radio"]');

  // Add hover event listener
  item.addEventListener('mouseenter', () => {
    radio.checked = true; 
    // Update the border color
    offerItems.forEach((el) => el.style.borderColor = '#ddd');
    item.style.borderColor = '#FF6B82';
  });
});
