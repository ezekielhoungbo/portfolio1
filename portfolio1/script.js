document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from other buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      button.classList.add('active');

      const filter = button.dataset.filter;

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Set 'All' button as initially active
  filterButtons[0].classList.add('active');
});