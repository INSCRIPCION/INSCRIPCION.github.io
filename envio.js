const scriptURL = 'https://script.google.com/macros/s/AKfycbwbbWTnN8L7ereBjqdXT9Aga-M-BvEwiw09f8gTnfVxx9O2YxEUTMaupC3-BiwApWk3tg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})