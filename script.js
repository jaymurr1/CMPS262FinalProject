//added basic gallery support
$(document).ready(function(){
    $('.ddr-gallery').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false

    });

    $('.lifting-gallery').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false

    });

    //var API_KEY = ""
    //keeping this blank while github is public, will fix later 
    var search = "Default"

    var video = ''
    

    // var ddrSearch = 'DDR'

    $('#YouTubeSearch').on('click', function() {
       // console.log($('.ddr-gallery, .lifting-gallery').slick('slickCurrentSlide'))


        // this part identifies the active slide and tells it whato to search, uses slick's documentation
        // I used the index of the current slide to identify what video is currently on the screen

        if ($('.ddr-gallery').slick('slickCurrentSlide') == 0) {
            search = "DDR Bloody Tears PFC";
        } else if ($('.ddr-gallery').slick('slickCurrentSlide') == 1) {
            search = "DDR Sakura Mirage PFC";
        } else if ($('.ddr-gallery').slick('slickCurrentSlide') == 2) {
            search = "DDR Party Rock PFC";
        } else if ($('.ddr-gallery').slick('slickCurrentSlide') == 3) {
            search = "StepmaniaX Saberdance Wild APC";
        } else alert('Something went wrong.')
        



        
        // Pass title to videoMatch()
      videoMatch(API_KEY, search,1);
    })

    $('#liftSearch').on('click', function() {
        // console.log($('.ddr-gallery, .lifting-gallery').slick('slickCurrentSlide'))
 
 
         // this part identifies the active slide and tells it whato to search, uses slick's documentation
         // I used the index of the current slide to identify what video is currently on the screen
 
         if ($('.lifting-gallery').slick('slickCurrentSlide') == 0) {
             search = "powerlifting overhead press world record";
         } else if ($('.lifting-gallery').slick('slickCurrentSlide') == 1) {
             search = "USAPL bench press world record";
         } else if ($('.lifting-gallery').slick('slickCurrentSlide') == 2) {
             search = "USAPL deadlift world record";
         } else alert('Something went wrong.')
         
 
 
 
         // Pass title to videoMatch()
       videoMatch(API_KEY, search,1);
     })

//implement search for video
   function videoMatch(key, search, maxResults) {

    //empties the results div for next search
        $("#results").empty()

       $.get("https://www.googleapis.com/youtube/v3/search?key=" + 
       key + 
       "&type=video&part=snippet&maxresults=" +
       maxResults +
       "&videoEmbeddable=true" +
       "&q=" +
       search, function (data) {
            console.log(data)

            data.items.forEach(item => {
                video = `
                
                <iframe width="560" height ="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                
                `

                $("#results").append(video)
            });

       }
        
           
        
        
        
        
            // Finish filling out GET request from video
            // From all results, pick out 5 video IDs (i.e., yt3m3TD8mNw)
            // Use id to create youtube link; "https://www.youtube.com/watch?=" + yt3m3TD8mNw

            // Add youtube links/embeds to list
            // Bind list to div somehow via jquery
            // Div will display all embeds

            // Done
        )
    }


    
  });

  //var currentSlide = $('ddr-gallery','lifting-gallery').slick('slickCurrentSlide');








