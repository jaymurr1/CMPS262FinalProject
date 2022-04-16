//added basic gallery support
$(document).ready(function(){
    $('.ddr-gallery').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });

    $('.lifting-gallery').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });


    
  });










//implement search for video
// either search  using video name or implement a way to search using whatever the active video in the gallery is
//might have to store the video name in a seperate data structure