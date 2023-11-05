const scriptURL = 'https://script.google.com/macros/s/AKfycbwgoL3inlIAJ0YsXkwUU9N87qSLG2DbhLstETGhIfkIRkp5hdr8YxwyeDqvhsS6f_WtCQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
