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
});