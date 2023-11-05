const scriptURL = 'https://script.google.com/macros/s/AKfycbyYutLGA0iWpNj0C6nn0OqbSS9TxWXmFDj2jLwdhdNh204dRST_VBKkgvcbs0fOAngelw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.href = 'index.html'; })
  .catch(error => console.error('Error!', error.message))
})
