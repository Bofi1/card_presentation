(( )=>{ // funcion que se invoque automaticamente
    
    //Variables
    let card_container  = document.getElementById('card_container')
    let card_number_form  = document.getElementById('card_number_form')
    let card_number_text = document.getElementById('card_number_text')


    let card_name_form  = document.getElementById('card_name')
    let card_name_text  = document.getElementById('card_name_text')


    let mounth_expiration  = document.getElementById('mounth')
    let mounth_expiration_text  = document.getElementById('mounth_text')
    let year_expiration  = document.getElementById('year')
    let year_expiration_text  = document.getElementById('year_text')
    
    
    let signature_text  = document.getElementById('signature_text')
    let cvv  = document.getElementById('cvv')
    let cvv_text  = document.getElementById('cvv_text')


    let card_front  = document.getElementById('card_front')
    let card_back  = document.getElementById('card_back')

    

    //Eventos


    // ----------------------------------------------- GIRAR TARJETA CON CLICK -----------------------------------------------

    let isCardRotated = false

    card_container.addEventListener('click', function () {
        isCardRotated = !isCardRotated

        if (isCardRotated) { // aqui en automatico sea verdadero hace 180 y falso 0 (nos ahorra poner mas condiciones)
            rotateContentCard(180)
        } else {
            rotateContentCard(0)
        }

        function rotateContentCard(deg) {
            card_container.style.transition = '.3s'
            card_container.style.transform = `rotateY(${deg}deg)` // templates literals (para usar $ para concatenar)
        }

    })
    

    // ------------------------------------------------------------------------------------------------------------------------



    // ----------------------------------------------- CAMBIAR NUMEROS AL MISMO TIEMPO ----------------------------------------


    card_number_form.addEventListener('input', onChangeCard)

    function onChangeCard() {
        card_number_text.innerHTML = formatCardNumber(card_number_form.value) //---> card_number_form.value ES EL VALOR QUE SE VA A TOMAR PARA HACER LA FUNCION

        if (card_number_form.value.length> 1) { // si hay algo
            card_number_form.value = limitLenght(card_number_form.value, 0, 16)
        }


        if (card_number_form.value.length == 0) { // si no hay nada 
            card_number_text.innerHTML = '#### #### #### ####'
        }

    }

    function formatCardNumber(number){ // -----> ESTA ES LA FUNCION QUE SE VA A USAR PARA REEMPLAZAR
        return number.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 '); // ---> 0, 16 son los valores que ira cambiando mas de 16 ya no cambiara y el '{4}' es cada cuantos caracteres hay espacio
    }

    function limitLenght(value, minLength, maxLength) {
        return value.slice(minLength, maxLength) // ---> va a devolver el valor desde 0 a 16 digitos
    }

    // ------------------------------------------------------------------------------------------------------------------------


})()