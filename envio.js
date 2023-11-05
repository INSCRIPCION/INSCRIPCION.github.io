const scriptURL = 'https://script.google.com/macros/s/AKfycbwLv9oW0wMx0VGgAiGa9kmrsveub_NSz2PG7YAwx7rHFhP4cd1ComkSQ60hpOCtJhSLcQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
