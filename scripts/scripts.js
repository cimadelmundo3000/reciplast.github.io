// MENU
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
function cerrarMenu(){
    $("body .fullmenu").removeClass("active");
}

$("body .header .master").delegate(".menu", 'click', function(){

    let c = $('body .fullmenu').hasClass('active');
    if(!c){
        $("body .fullmenu").addClass("active");
    }else{
        cerrarMenu();
    }
});

$("body .fullmenu .master").delegate(".menu", "click", function () {
    cerrarMenu();
});

$("body .fullmenu .master").delegate(".close", "click", function () {
    cerrarMenu();
});

// GALERIA
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
function cerrargaleria() {
    $("body .modalfoto .lafoto").css("background-image", "none");
    $("body .modalfoto").removeClass("active");
}

$("body .galeria-full").delegate(".item", "click", function () {
    let pic = $(this).find('.pic').data('pic');
    let root = "assets/galeria/" + pic;
    $("body .modalfoto .lafoto").css("background-image", "url(" + root + ")");
    $("body .modalfoto").addClass('active');
});

$("body .modalfoto .lafoto").delegate(".cerrar", "click", function () {
    cerrargaleria();
});

$("body").delegate(".modalfoto", "click", function (event) {
    let target = event.target.className;
    if(target=='modalfoto active'){
        cerrargaleria();
    }
});
