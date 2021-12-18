$(document).ready(function() {
    $('.title-block__questions').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.name-spoiler__questions').click(function(event) {
        if($('.block-spoilers__questions').hasClass('block-spoilers__questions-first')){
            $('.name-spoiler__questions').not($(this)).removeClass('active');
            $('.open-spoiler__questions').not($(this).next()).slideUp('active');
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});;