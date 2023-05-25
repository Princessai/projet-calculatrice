// ? faire fonctionner les boutons
$('.calc-btn').click (function () {
    $('.screen').val($('.screen').val() + $(this).html());
});

// ? obtenir l'égalité
$('.egal').click (function () {
    $('.screen').val( eval( $('.screen').val() ) );
});

// ? effacer l'écran
$('.effacer').click (function () {
    $('.screen').val('');
});

// ? supprimer un élément
$('.back').click (function () {
    let elem = $('screen').val() 
    $('.screen').val( elem.toString().slice(0, -1) );
});

