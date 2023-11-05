const scriptURL = 'https://script.google.com/macros/s/AKfycbwR2sJlmJKg1f82f0uVtwG494pxpb_Dy2ECd1JLX9fQFTnpzHskkY00YUFL0DKm8J-crQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
