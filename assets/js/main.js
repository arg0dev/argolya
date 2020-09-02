
$(function () {

    $(window).bind("resize", function () {
        console.log($(this).width())
        if ($(this).width() < 767) {
            $('div').removeClass('align-items-end').addClass('align-items-center')
        } else {
            $('div').removeClass('align-items-center').addClass('align-items-end')
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
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("mySidenav").style.borderLeft = "2px solid #BFC998";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.borderLeft = "0px solid #BFC998";
    sidebar = true
  }