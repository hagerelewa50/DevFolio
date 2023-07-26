
let sectionScroll = $(".about-section").offset().top
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    if(scrollTop>sectionScroll){
        $(".navbar").addClass("bg-black")
        // $(".arrow-up").removeClass("d-none")
        $(".arrow-up").fadeIn(1000)


    }else{
        $(".navbar").removeClass("bg-black")
        // $(".arrow-up").addClass("d-none")
        $(".arrow-up").fadeOut(1000)

    }
})

$(".nav-link").click(function(){
    let hreF=$(this).attr("href")
    let scrollTopSection = $(hreF).offset().top
    $("html,body").animate({ scrollTop : scrollTopSection},{duration:2000 , queue:false });
    $(this).addClass("active");
    $(".nav-link").not(this).removeClass("active");

})

$(".arrow-up").click(function(){
    $("html,body").animate({ scrollTop : 0},2000);
})
let widthInner=$(".setting-inner").outerWidth(true)    
$(".settings").css({left:`-${widthInner}px`})

$(".setting-icon").click(function(){
    let left = $(".settings").css("left")
    console.log(left);
    if(left=="0px"){
        let widthInner=$(".setting-inner").outerWidth(true)    
       $(".settings").animate({left:`-${widthInner}px`},1000)
    }else{
        $(".settings").animate({left:"0px"},1000)
    }   
})

$(".box").click(function(){
    let color = $(this).css("background-color")
    $(":root").css("--main-color",color)
    localStorage.setItem("color",color)
})

if (localStorage.getItem("color")!=null){
    $(":root").css("--main-color",localStorage.getItem("color"))
   
}

$(document).ready(function(){
    $(".loading").fadeOut(2000)
})

