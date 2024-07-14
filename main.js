(( )=>{ // funcion que se invoque automaticamente
    
    //Variables
    let card_container  = document.getElementById('card_container')
    let card_number_form  = document.getElementById('card_number')
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

    let isCardRotated = false

    card_container.addEventListener('click', function () {
        isCardRotated = !isCardRotated

        if (isCardRotated) { // true 180 false 0
            rotateContentCard(180)
        } else {
            rotateContentCard(0)
        }

    })
    
    function rotateContentCard(deg) {
        card_container.style.transition = '.3s'
        card_container.style.transform = `rotateY(${deg}deg)` // templates literals (para usar $ para concatenar)
    }


})()