

jQuery(document).ready(function () {

    //img-wrapper
    jQuery(".img-wrapper").each(function () {
        var imageUrl = jQuery(this).find('img').attr("src");
        jQuery(this).find('img').css("visibility", "hidden");
        jQuery(this).css('background-image', 'url(' + imageUrl + ')').css("background-repeat", "no-repeat").css("background-size", "cover").css("background-position", "50% 50%");
    });

    $('.testimonial_wrapper').slick({
          dots: true,
          infinite: true,
          speed: 1000,
          fade: true,
          cssEase: 'linear',
          arrows:'false',
          loop:'true',
          autoplay:'true'
 
    });
    


});



function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
    document.body.style.backgroundColor = "rgba(118,118,118,0.1)";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-100%";
    document.body.style.backgroundColor = "white";
}
