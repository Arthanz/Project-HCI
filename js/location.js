const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.querySelector('.infos').style.transform = 'translateY(-260px)';
  });

  card.addEventListener('mouseout', () => {
    card.querySelector('.infos').style.transform = 'translateY(0)';
  });
});