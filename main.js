/*setTimeout( function(){
    $('#loader').css({'display' : 'none'});
    // $('#main-content').css({'padding-top' : '65px'});
    $('#main-content').css({'display' : 'block'});

}  , 5000 );*/

var width = $(window).width();
if (width <= 500){
    setTimeout( function(){
        $('#loader').css({'display' : 'none'});
        $('body').css({'padding-top' : '80px'});
        $('#main-content').css({'display' : 'block'});

    }  , 5000 );
}
else{
    $('#main-content').css({'padding-top' : '80px'});
}