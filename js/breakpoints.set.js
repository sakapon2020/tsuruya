$(function() {
    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [ 1, 769 ]
    });
    $(window).bind('enterBreakpoint769',function() {
        $('.sp-img').each(function() {
            $(this).attr('src', $(this).attr('src').replace('-sp', '-pc'));
        });
    });
    $(window).bind('enterBreakpoint1',function() {
        $('.sp-img').each(function() {
            $(this).attr('src', $(this).attr('src').replace('-pc', '-sp'));
        });
    });
});