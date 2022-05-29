$('.owl-carousel').owlCarousel({
    loop:true,
    // margin: 60,
    responsiveClass:true,
    responsive:{
        500:{
            items:1,
            nav:true
        },
        700:{
            items: 2,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop: true
        }
    }
})