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


$(function () {
    function setRem() {
        let clientWidth = $(window).width();
        let nowRem = (clientWidth / 375 * 100);
        $("html").css("font-size", parseInt(nowRem, 10) + "px");
    }

    setRem();

    $(function () {
        let timer;
        $(window).bind("resize", function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                setRem();
            }, 100)
        })
    });
});