$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() >10 ) {
            $('.navbar').addClass('bg-light');
        } else {
            $('.navbar').removeClass('bg-light');
        }
    });
  });

$(function () {

    $(window).bind("resize", function () {
        console.log($(this).width())
        if ($(this).width() < 767) {
            $('div.ladder').removeClass('align-items-end').addClass('align-items-center')
            $('div.mixer').removeClass('position-absolute')
            document.getElementById("spark").src = "/assets/materials/png/half.png";
        } else {
            $('div.ladder').removeClass('align-items-center').addClass('align-items-end')
            $('div.mixer').addClass('position-absolute')
            document.getElementById("spark").src = "/assets/materials/png/full.png";
        }
    }).trigger('resize');
})

 var sidebar = true

function visited(x) {
    if (sidebar == true) {
        x.classList.add("change");
        openNav();
        sidebar = false
    } else {
        x.classList.remove("change");
        closeNav();
    }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "65%";
    document.getElementById("mySidenav").style.borderLeft = "2px solid #BFC998";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.borderLeft = "0px solid #BFC998";
    sidebar = true
  }
  
  $(document).ready(function(){
    $('.arg0_swiper').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
    });
    $('#arg0_swiper--prev').on('click', function() {
      $('.arg0_swiper').slick('slickPrev');
    });
    $('#arg0_swiper--next').on('click', function() {
      $('.arg0_swiper').slick('slickNext');
    });
  });