(function ($) {
    $('head').append('<link rel="stylesheet" href="plugin-styles.css" type="text/css" />');
    $.fn.hello = function (options) {
        console.log(document.location.hostname);
    $('body').append('<p>sddsd</p>');
        var settings = $.extend({
            name: 'John Doe',
            color: 'orange'
        }, options);
        return this.append('<span>'+settings.name+'</span>').addClass('uk');;

    };   
}(jQuery));
