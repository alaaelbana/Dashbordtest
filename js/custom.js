$(window).ready(function () {
    $(".user-box").click(function () {
        $(".user-drop-munu").toggleClass("show-user")
    })
    $(".text-box").click(function () {
        $(".user-drop-munu").toggleClass("show-user")
    })
    $(".munu").click(function () {
        $(".page-left").addClass("page-left-show")
        $(".pg").addClass("pg-show")

    })
    $(".page-left-hide").click(function () {
        $(".page-left").removeClass("page-left-show")
        $(".pg").removeClass("pg-show")
        $(".page-left").toggleClass("page-left-btu")
        $(".page-right").toggleClass("page-right-btu")
        $(".page-left-hide").toggleClass('page-left-cr')
        $(".logo").toggleClass('logo-hide')
        $(".logo-img").toggleClass('logo-hide')
        $(".Crypto").toggleClass('a-hide')
        $(".Crypto-li").toggleClass('Crypto-height')
        $(".Crypto-p").toggleClass('Crypto-pa')    
    })
    







    // $(".tooth").hover(function () { $(".toothbox").addClass("swing") })
    // $(".tooth").mouseleave(function () { $(".toothbox").removeClass("swing"); })
    // $(".breast").hover(function () { $(".breastbox").addClass("pulse") })
    // $(".breast").mouseleave(function () { $(".breastbox").removeClass("pulse"); })

    // $(".body").hover(function () { $(".bodybox").addClass("bounceIn") })
    // $(".body").mouseleave(function () { $(".bodybox").removeClass("bounceIn"); })

    // $(".hair").hover(function () { $(".hairbox").addClass("shake") })
    // $(".hair").mouseleave(function () { $(".hairbox").removeClass("shake"); })


    // $(".social-icons").hover(function () {
    //     $(".animat").addClass("flash");
    //     $(".social-text").addClass("rollOut");
    //     $(".social-text").addClass("hide");
    //     $(".icons").addClass("show");
    //     $(".icons").addClass("rollIn");
    // })
    // $(".social-icons").mouseleave(function () {
    //     $(".animat").removeClass("flash");
    //     $(".social-text").removeClass("rollOut");
    //     $(".social-text").removeClass("hide");
    //     $(".icons").removeClass("show");
    //     $(".icons").removeClass("rollIn");
    // })

})


new WOW().init();


