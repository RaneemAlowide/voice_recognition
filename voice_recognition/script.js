
const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
let finalText = ''; 

recognition.addEventListener('result', (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  p.innerText = text;

  if (e.results[0].isFinal) {
    finalText += text + ' '; 
  }
});

recognition.addEventListener('end', () => {


  console.log(finalText);
  if(finalText != ''){
    // Create a new FormData object
    const formData = new FormData();
    formData.append('text', finalText.trim()); 


    fetch('text.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    finalText = ''; 

  }
  
  recognition.start(); 
});

recognition.start();

