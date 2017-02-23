$(document).ready(function() {
    $("input:not(#buttonEgal, #reset)").on("click", function() {
        var valueElm = this.value;
        $("#affichage").html($("#affichage").html()+valueElm);
    });
    $("input#buttonEgal").on("click", function() {
        $("#affichage").html($("#affichage").html() + "=" + eval($("#affichage").html()));
    });
    $("#reset").on("click", function() {
        $("#affichage").empty();
    });
});
