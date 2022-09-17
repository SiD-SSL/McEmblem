$(document).ready(function(){


//---------- NAV BAR HOVER JS ------------//
$(".nav-item").hover(function() {

    let key = $(this).data('key');
    $(this).find('.hover-menu'+key).removeClass('d-none');

}, function() {
    $('.hover-menu').addClass('d-none');
});


//Click event handler for nav-items
$('.nav-item').on('click',function(){

    //Remove any previous active classes
    $('.nav-item').removeClass('active');
  
    //Add active class to the clicked item
    $(this).addClass('active');
});


});



//---------- NAV BAR FIXED JS ------------//
$(window).scroll(function(){
    var coutingScroll = $(window).scrollTop()
    if(coutingScroll>120){
        $("#searchBar").addClass("d-none");
        $("#fixedNavBar").removeClass("d-none");
        $("#fixedNavBar").addClass("d-block fixed");
    }
    else{
        $("#searchBar").removeClass("d-none");
        $("#fixedNavBar").addClass("d-none");
        $("#fixedNavBar").removeClass("d-block fixed");
    }
})





// products toggle
$(document).ready(function() {
    $('#show-hidden-menu').click(function() {
      $('.hidden-menu').slideToggle("fast");
    });
});