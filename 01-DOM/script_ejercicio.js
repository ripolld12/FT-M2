// Queremos que cuando se clickee el boton, queremos que hayan un nuevo div con un p adentro
        // y lo agregue al contenedor

        function cambiarClase(event){ // la funcion recibe el evento clic
            var divCliqueado= event.target // sacamos el elemento que disparo el evento de event.target
             
            if (divCliqueado.className==='clase1') divCliqueado.className='clase2'
            else divCliqueado.className='clase1'

            // Cambio la clase de ese elemento si es clase 1 lo vuelve clase 2 y viceversa
        }

        function onClick(){
            var p = document.createElement("p") // Con esto creo un elemento p
            p.innerHTML= "Hola me llamo Diana"  // Le asigno el texto que va a contener
            
            var div = document.createElement("div")
            div.className='clase1'
            div.addEventListener('click', cambiarClase)
            // creo un event listener para que cuando cliqueemos en el div, me efecute la funcion cambiar clase, que
            // lo que hará sera cambiar la clase del div de clase 1 a clase 2, cada vez que cliqueo el div



            div.appendChild(p)  // con esto agrego un hijo a div y le voy a asignar p, en este punto el div no se 
                                // visualiza aun en el navegador porque no lo tengo el body
            
            var contenedor = document.querySelector('#contenedor')  // con esto me traigo el contenedor que estaba en body
            contenedor.appendChild(div)  // agrego el div al contenedor
            

            // ahora cuando yo recargo el navegar se reinicia todo proque vuelve a leer el codigo de cero. Es decir,
            // se crea un DOM nuevo
        }

        var boton = document.querySelector("#boton");

        boton.addEventListener('click', onClick)

        console.log(window)
        
        let texto = 'Hola mi nombre es Diana Ripoll'
        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

        hablar(texto)
