$(document).ready(function(){
    function heightDetect() {
        $(".main-block").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    function scrollet(){
        var status = true;
        $('.scroller').on('click',(function () {
            if (status) {
                $(".info-aside-items p").fadeOut(100);
                $(".info-aside-items h5").fadeOut(100);
                $(".info-aside-items h4").fadeOut(100);
                $(".info-aside-items button").fadeOut(100);
                $('aside').addClass('fixed-width');
            } else {
                $('aside').removeClass('fixed-width');
                $(".info-aside-items p").fadeIn(4000);
                $(".info-aside-items h5").fadeIn(4000);
                $(".info-aside-items h4").fadeIn(4000);
                $(".info-aside-items button").fadeIn(4000);
            }
            status = !status;
        }));
    }
    scrollet();
});
