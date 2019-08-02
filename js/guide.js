let index = 0;
let num = 0;
let timer = null;
function move() {
    index = index > 7.5 ? 7.5 : index;
    index = index < 0 ? 0 : index;
    num = num > 3 ? 3 : num;
    num = index < 0 ? 0 : num;
    $('.out').css('transform', 'translateX(-' + index + 'rem)');
    $('ul li').eq(num).css('backgroundColor', '#fff').siblings('li').css('backgroundColor', 'rgba(255, 255, 255, .67)');
}


$('.out').on('swipeLeft', function () {
    index += 3.75;
    num++;
    move();
    if (num >= 2){
       timer = setTimeout(function () {
            $('.out').css('display','none');
            $('ul').css('display','none');
            $('.skip').css('display','none');
            $('.box').css('display','block');
        },3000)
    }
});

$('.out').on('swipeRight', function () {
    index -= 3.75;
    num--;
    move();
    clearTimeout(timer)
});

$('.skip').on('tap',function () {
    $('.out').css('display','none');
    $('ul').css('display','none');
    $('.skip').css('display','none');
    $('.box').css('display','block');
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