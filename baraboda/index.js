/* 사이드바 */

$(".menu_icon_box").click(function () {
    $(".hgnb_box").addClass("active");
    $(".hide_bg").addClass("active");
});
$(".hide_bg").click(function () {
    $(".hgnb_box").removeClass("active");
    $(".hide_bg").removeClass("active");
});

$(".hgnb_cell>li.g_02").hover(
    function () {
        $(this).find("ul.h_sub").stop().slideDown();
    },
    function () {
        $(this).find("ul.h_sub").stop().slideUp();
    }
);

/* 슬라이드 01 */
function SliderBox1__init() {
    $('.slider_list > .slick').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (slick, index) {
            return '<div class="page-btn"></div>';
        }
    });
}

$(function () {
    SliderBox1__init();
});
/* 슬라이더 2 */
function SliderBox2__init() {
    $(".mid_slider .mid_product .mid_track").slick({
        slide: "div",
        dots: true,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        cssEase: 'ease-in-out',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".mid_prev"),
        nextArrow: $(".mid_next"),
        customPaging: function (slick, index) {
            var 내용 = "";
            if (index == 0) {
                내용 = "# 스페셜티 베스트";
            } else if (index == 1) {
                내용 = "# 커피용품";
            }
            return '<div class="page-btn">' + 내용 + "</div>";
        }
    });
}

$(function () {
    SliderBox2__init();
});

/* 상하 스크롤 버튼 */
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.control_btn').fadeIn();
    } else {
        $('.control_btn').fadeOut();
    }
});

$(function () {
    $(".ct_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(".ct_bottom").click(function () {
        $("html, body").animate({
            scrollTop: $("body").height()
        }, 1000);
    });
});

/* 팝업 */
$(".p_btn_close").eq(0).click(function () {
    $(".popup").fadeOut();
});

/* 스크롤시 헤더 색상 변경 */
var elem = $("header");
var doc = $(document);

function scrolled() {
    var threshold = doc.scrollTop() > 50;
    elem.toggleClass("scrolled", threshold);
}
$(window).on({
    scroll: scrolled
});