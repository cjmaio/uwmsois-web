document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('validate').addEventListener('click', (event) => {
    const email = document.getElementById('email').value;
    const lastName = document.getElementById('last_name').value;
    const age = document.getElementById('age').value;

    const validationErrors = [];

    if (!email) {
      validationErrors.push('Please enter your email address');
    }
    if (!lastName) {
      validationErrors.push('Please enter your last name');
    }
    if (!age) {
      validationErrors.push('Please enter your age');
    }

    if (validationErrors.length > 0) {
      alert(validationErrors.join('\n'));
    }
  });

  document.getElementById('validate_receive_updates').addEventListener('click', (event) => {
    const receiveUpdatesEmail = document.getElementById('receive_updates_email').value;

    const validationErrors = [];

    if (!receiveUpdatesEmail) {
      validationErrors.push('Please enter your email address to receive updates');
    }

    if (!receiveUpdatesEmail.includes('@')) {
      validationErrors.push('Please ensure your email address contains the @ symbol');
    }

    if (!receiveUpdatesEmail.includes('.')) {
      validationErrors.push('Please ensure your email address contains a period');
    }

    if (
      receiveUpdatesEmail.includes('.') &&
      receiveUpdatesEmail.includes('@') &&
      receiveUpdatesEmail.indexOf('@') > receiveUpdatesEmail.lastIndexOf('.')
    ) {
      validationErrors.push('Please ensure your email address is formatted properly, with the @ symbol before the domain name');
    }

    if (validationErrors.length > 0) {
      alert(validationErrors.join('\n'));
    }
  });
});
