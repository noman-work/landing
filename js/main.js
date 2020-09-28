
var mouseX = 0, mouseY = 0;
$(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// cache the selector
var follower = $("#follower");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.css({left:xp, top:yp});

}, 10);

//Home Slider
$(document).ready(function (){
    $('.mainSlider').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        slideBy:3
    });
});