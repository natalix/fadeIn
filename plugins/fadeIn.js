(function($) {
    $.fn.animateFadeIn = function(options) {

        var settings = $.extend({
            delay: 0,
            duration: 0
        }, options);

        return this.each(function(i) {
            $(this).delay(settings.delay*i).fadeIn(settings.duration);
        });

        return this;
    };
}(jQuery));