$(function() {
   
    $('.sequential_animation :nth-child(n)').animateFadeIn({
        delay: 200,
        duration: 500
    });
    $('.sequential_animation').delay(3000).fadeOut();
});