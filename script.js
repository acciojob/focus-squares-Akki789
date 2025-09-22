//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach((square, index) => {
  square.addEventListener('mouseover', () => {
    squares.forEach((otherSquare, i) => {
      if (i !== index) {
        otherSquare.style.backgroundColor = '#6F4E37'; // Coffee
      }
    });
  });

  square.addEventListener('mouseout', () => {
    squares.forEach(otherSquare => {
      otherSquare.style.backgroundColor = '#E6E6FA'; // Lavender
    });
  });
});
