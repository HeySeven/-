/**
 * Created by shang on 2017/5/31.
 */

$(function () {
    // 注册FastClick
    FastClick.attach(document.body);

    var indexSwiper = new Swiper('#index-slide', {
        autoplay: 5000,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    if ($('#news-container').length) {
        $('#news-container').vTicker({
            speed: 700,
            pause: 5000,
            animation: 'fade',
            mousePause: false,
            showItems: 1
        });
    }

});