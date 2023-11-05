const scriptURL = 'https://script.google.com/macros/s/AKfycbwSPagtdsZRJWkLZwwkJAiHmrk41mjEe3wWrBncFoVImE3qLXoP41VF9iGfIY57el6mYg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
