// 用户页

$('.play').on('swipeRight', function () {
    $('.user-box').css('left', '0rem');
    $('.bj').css('opacity', '1');
});

$('.user-box').on('swipeLeft', function () {
    $('.user-box').css('left', '-3.75rem');
    $('.bj').css('opacity', '0');
});
$('.bj').on('tap', function () {
    $('.user-box').css('left', '-3.75rem');
    $('.bj').css('opacity', '0');
});