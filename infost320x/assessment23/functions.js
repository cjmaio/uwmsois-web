/**
 * On document load, attach a click listener onto the table rows
 */
$(document).ready(() => {
  const tableRows = $('tbody tr').each((index, element) => {
    $(element).on('click', () => {
      const month = $(element).children('td:first').text();
      const day = $(element).children('td:last').text();
      alert(`${month}\n${day}`);
    });
  });
});
