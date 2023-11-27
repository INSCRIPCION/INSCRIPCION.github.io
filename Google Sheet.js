const scriptURL = 'https://script.google.com/macros/s/AKfycbz8KDJd93LxQ0Qg8JMxkxlpfoRF4KzNJ4Mt4tUG4jm59QbOH9JzBLyWPQJiQbayuuqsKQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
