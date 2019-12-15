$(document).ready(function ($) {
    console.log("Altura do footer" + $('#main-visitante'));
    $('#main-visitante').on('load', function ($) {
        console.log("Altura");
        var h = $("#header-visitante").outerHeight();
        $('#main-visitante').css('padding-top', h)
    });
});


$(document).ready(function(){
   $('#main-visitante').on('change', checkUserVal);
});

var checkUserVal = function(){
  //do the check
  console.log("Altura - Teste 2");
};