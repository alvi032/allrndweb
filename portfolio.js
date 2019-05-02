$("#all").click(function(){
    $(".poster").css("display", "block");
    $(".brand").css("display", "block");
    $(".videos").css("display", "block");
    $("#posters").css("grid-template-columns", "repeat(4, 1fr)");
});
$("#adverts").click(function(){
    $(".poster").css("display", "block");
    $(".brand").css("display", "none");
    $(".videos").css("display", "none");
    $("#posters").css("grid-template-columns", "repeat(4, 1fr)");
});
$("#branding").click(function(){
    $(".poster").css("display", "none");
    $(".brand").css("display", "block");
    $(".videos").css("display", "none");
    $("#posters").css("grid-template-columns", "repeat(3, 1fr)");
});
$("#videos").click(function(){
    $(".poster").css("display", "none");
    $(".brand").css("display", "none");
    $(".videos").css("display", "block");
    $("#posters").css("grid-template-columns", "repeat(4, 1fr)");
});

var modal = document.getElementById("bg-fs");
var close = document.getElementById("close");
var enlargedImage = document.getElementById("image-fs");

// pf=id
{
var pf1 = document.getElementById("poster1");
var pf2 = document.getElementById("poster2");
var pf3 = document.getElementById("poster3");
var pf4 = document.getElementById("poster4");
var pf5 = document.getElementById("poster5");
var pf6 = document.getElementById("poster6");
var pf7 = document.getElementById("poster7");
var pf8 = document.getElementById("poster8");
var pf9 = document.getElementById("poster9");
var pf10 = document.getElementById("poster10");
var pf11 = document.getElementById("poster11");
var pf12 = document.getElementById("poster12");
var pf13 = document.getElementById("poster13");
var pf14 = document.getElementById("poster14");
var pf15 = document.getElementById("poster15");
var pf16 = document.getElementById("poster16");
var pf17 = document.getElementById("poster17");
var pf18 = document.getElementById("poster18");
var pf19 = document.getElementById("poster19");
var pf20 = document.getElementById("poster20");
}

// b=brand
{
var b1 = document.getElementById("brand1");
var b2 = document.getElementById("brand2");
var b3 = document.getElementById("brand3");
var b4 = document.getElementById("brand4");
var b5 = document.getElementById("brand5");
var b6 = document.getElementById("brand6");
var b7 = document.getElementById("brand7");
var b8 = document.getElementById("brand8");
var b9 = document.getElementById("brand9");
var b10 = document.getElementById("brand10");
var b11 = document.getElementById("brand11");
var b12 = document.getElementById("brand12");
var b13 = document.getElementById("brand13");
var b14 = document.getElementById("brand14");
var b15 = document.getElementById("brand15");
var b16 = document.getElementById("brand16");
}

// pf.onclick
{
pf1.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF1.jpg"
}
pf2.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF2.jpg"
}
pf3.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF3.jpg"
}
pf4.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF4.jpg"
}
pf5.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF5.jpg"
}
pf6.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF6.jpg"
}
pf7.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF7.jpg"
}
pf8.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF8.jpg"
}
pf9.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF9.jpg"
}
pf10.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF10.jpg"
}
pf11.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF11.jpg"
}
pf12.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF12.jpg"
}
pf13.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF13.jpg"
}
pf14.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF14.jpg"
}
pf15.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF15.jpg"
}
pf16.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF16.jpg"
}
pf17.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF17.jpg"
}
pf18.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF18.jpg"
}
pf19.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF19.jpg"
}
pf20.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/posters/PF20.jpg"
}
}

// b.onclick
{
b1.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR1.jpg"
}
b2.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR2.jpg"
}
b3.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR3.jpg"
}
b4.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR4.jpg"
}
b5.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR5.jpg"
}
b6.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR6.jpg"
}
b7.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR7.jpg"
}
b8.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR8.jpg"
}
b9.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR9.jpg"
}
b10.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR10.jpg"
}
b11.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR11.jpg"
}
b12.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR12.jpg"
}
b13.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR13.jpg"
}
b14.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR14.jpg"
}
b15.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR15.jpg"
}
b16.onclick = function () {
    modal.style.display = "flex";
    enlargedImage.src="images/portfolio/hq/branding/BR16.jpg"
}
}

close.onclick= function () {
    modal.style.display = "none";
    enlargedImage.src="";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        enlargedImage.src="";
    }
}