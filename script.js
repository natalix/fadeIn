$(function() {
    var animatedList = $('#animatedList li');

    $('#fadeInStart').click(function() {
        animateFadeIn();
    });

    function animateFadeIn() {
        $(animatedList).each(function(i) {
            $(this).delay(200*i).fadeIn(500);
        });
    };

});