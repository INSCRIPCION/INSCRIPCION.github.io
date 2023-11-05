const scriptURL = 'https://script.google.com/macros/s/AKfycbzN5MwE3TFc8a5IuYHKpsIAtcSCLQlKmg4Cn7PedWf-mqJu2rtDXtkcaTOHwBkzBlD4iA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
