function hablar(texto){
    texto=document.querySelector('#texto')
    let voz=new SpeechSynthesisUtterance(texto.value)
    voz.volume = 1
    voz.rate = 1
    voz.pitch = 1
    speechSynthesis.speak(voz)
    texto.value=''
    
}

var button = document.querySelector('#addButton')
button.addEventListener('click', hablar)