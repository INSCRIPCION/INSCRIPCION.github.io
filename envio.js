const scriptURL = 'https://script.google.com/macros/s/AKfycbwbbWTnN8L7ereBjqdXT9Aga-M-BvEwiw09f8gTnfVxx9O2YxEUTMaupC3-BiwApWk3tg/exec'
const scripturl = 'https://script.google.com/macros/s/AKfycbxVaZsRatyAE1fl5_fNCf6uclhP2wg2tArgqcaJkJdYIPL7A2vaN0Ihz_nfpMOcrPPRKw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  fetch(scripturl, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          functionName: 'encontrarNumeroMayor' // Nombre de la función que deseas llamar
        })
      })
        .then(response => response.json())
        .then(data => {
          // Manejar la respuesta del script
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
})
