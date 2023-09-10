document.addEventListener('DOMContentLoaded', () => {
  // Add listener to the `text_color` radio buttons
  document.getElementsByName('text_color').forEach((element) => {
    element.addEventListener('change', (event) => {
      document.body.style.color = event.target.value;
    });
  });

  // Add listeners to the `background_color` radio buttons
  document.getElementsByName('background_color').forEach((element) => {
    element.addEventListener('change', (event) => {
      document.body.style.backgroundColor = event.target.value;
    });
  });

  // Add listener onto the `first_name_entry` form
  document.getElementById('first_name_entry').addEventListener('submit', (event) => {
    event.preventDefault();
    alert(`Hello, ${event.target.first_name.value}! Thank you for visiting!`);
  });
});
