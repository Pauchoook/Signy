$(document).ready(function() {
    $('.block-title__spoiler').click(function(event) {
        if($('.block__spoilers').hasClass('one')){
            $('.block-title__spoiler').not($(this)).removeClass('active');
            $('.block-spoiler__text').not($(this).next()).slideUp('active');
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});