// spinner 


window.addEventListener("load" , () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
});








/// carousel

var p_carousel_3 = $('.explore');
if (p_carousel_3.length > 0) {

    p_carousel_3.owlCarousel({
        loop: true,
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            480: {
                items: 1
            },
            767: {
                items: 1
            },
            991: {
                items: 2
            },

        1024: {
            items: 3
        },
        }
    });

}









//  // Modal Video
//  var $videoSrc;
//  $('.btn-play').click(function () {
//      $videoSrc = $(this).data("src");
//  });
// //  console.log($videoSrc);
//  $('#videoModal').on('shown.bs.modal', function (e) {
//      $("#video").attr('src', $videoSrc + "?autoplay=1&amp");
//  })
//  $('#videoModal').on('hide.bs.modal', function (e) {
//      $("#video").attr('src', $videoSrc);
//  })
 