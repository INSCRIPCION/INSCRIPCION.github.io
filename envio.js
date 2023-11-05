const scriptURL = 'https://script.google.com/macros/s/AKfycbweIoBuShwRB623li-ZX1zDO-ZcI9298LQdb4XS4CLy9sJcbFSaHGJoEu0Ie-g3V-DnsQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
