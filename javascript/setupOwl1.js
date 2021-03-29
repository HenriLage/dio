$(document).ready(function () {

    $('#owlTipo').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        pagination: false,
        dots:false,
        responsive:{
            100:{
                items:4
            },
            250:{
                items:5
            },
            350:{
                items:6
            },
            500:{
                items:7
            },
            850:{
                items:10
            },
            1000:{
                items:12
            },
            1500:{
                items:14
            }
        }
    })

    $('#owlTop').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        pagination: false,
        dots: false,
        responsive:{
            100:{
                items:3
            },
            250:{
                items:3
            },
            350:{
                items:3
            },
            500:{
                items:4
            },
            850:{
                items:5
            },
            1000:{
                items:7
            },
            1500:{
                items:8
            }
        }
    })
})