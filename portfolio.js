$("#all").click(function(){
    $(".poster").css("display", "block");
    $(".brand").css("display", "block");
    $("#posters").css("grid-template-columns", "repeat(4, 1fr)");
});
$("#adverts").click(function(){
    $(".poster").css("display", "block");
    $(".brand").css("display", "none");
    $("#posters").css("grid-template-columns", "repeat(4, 1fr)");
});
$("#branding").click(function(){
    $(".poster").css("display", "none");
    $(".brand").css("display", "block");
    $("#posters").css("grid-template-columns", "repeat(3, 1fr)");
});