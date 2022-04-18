//added basic gallery support
$(document).ready(function(){
    $('.ddr-gallery').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });

    $('.lifting-gallery').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });

    $('#YouTubeSearch').on('click', function() {
        console.log($('.ddr-gallery, .lifting-gallery').slick('slickCurrentSlide'));

        // Get current carousel slide
        // Get Div with id that contains video title
        // Pass title to videoMatch()
        //NEW IDEA JUST  USE THE INDEX TO SEARCH FOR A VIDEO INSTEAD
       // videoMatch("ayy", "lmoa");
    })

//implement search for video
    function videoMatch(key, search, maxResults) {
        $.get("https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?"
        
            // Finish filling out GET request from video
            // Alter to use general search
            // From all results, pick out 5 video IDs (i.e., yt3m3TD8mNw)
            // Use id to create youtube link; "https://www.youtube.com/watch?=" + yt3m3TD8mNw

            // Add youtube links/embeds to list
            // Bind list to div somehow via jquery
            // Div will display all embeds

            // Done
        )
    }


    
  });

  var currentSlide = $('ddr-gallery','lifting-gallery').slick('slickCurrentSlide')








// either search  using video name or implement a way to search using whatever the active video in the gallery is
//might have to store the video name in a seperate data structure