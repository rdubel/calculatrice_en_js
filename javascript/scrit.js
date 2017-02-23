$(document).ready(function() {
    $("input:not(#buttonEgal, #reset)").on("click", function() {
        $("#affichage").html($("#affichage").html() + this.value);
    });
    $("input#buttonEgal").on("click", function() {
        $("#affichage").html($("#affichage").html() + "=" + eval($("#affichage").html()));
    });
    $("#reset").on("click", function() {
        $("#affichage").empty();
    });
});
