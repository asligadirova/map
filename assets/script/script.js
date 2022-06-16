$(document).ready(function(){
    AOS.init();
    const primaryColor='#2D3192';
    const secondaryColor='#FF931E';
    const mapColor='#E5E9F4';
    const header=$('.header-part');
    const hamburgerButton=$('.hamburger');
    let isSlideDownWork=true;
    let areStatisticsWork=true;
    $('.customized-list-group__items a').click(function(){
        hamburgerButton.toggleClass('header__hamburger--active');
        hamburgerButton.toggleClass('header__hamburger--close');
        $('.after-click').toggleClass('d-block');
        $('body').css('overflow','auto');
    })
    hamburgerButton.click(function(){
        if(hamburgerButton.hasClass('header__hamburger--active')==false){
            hamburgerButton.toggleClass('header__hamburger--active');
            hamburgerButton.removeClass('header__hamburger--close');
            $('.after-click').toggleClass('d-block');
            if(window.scrollY<=100 && hamburgerButton.hasClass('header__hamburger--active')==true){
                $('body').css('overflow','hidden');
                header.css('background-color',primaryColor);
                header.css('transition','0s');
            }else if(window.scrollY>=100){
                $('body').css('overflow','hidden');
                header.css('background-color','white');
                header.css('transition','.5s');
            }else if(hamburgerButton.hasClass('header__hamburger--active')==false){
                header.css('background-color','rgba(0,0,0,0)');
                header.css('transition','.5s');
                }
        }else{
            hamburgerButton.toggleClass('header__hamburger--close');
            hamburgerButton.removeClass('header__hamburger--active');
            $('.after-click').toggleClass('d-block');
            if(window.scrollY<=100 && hamburgerButton.hasClass('header__hamburger--close')==true){
                $('body').css('overflow','auto');
                header.css('background-color','rgba(0,0,0,0)');
                header.css('transition','0s');
            }else if(window.scrollY>=100){
                $('body').css('overflow','auto');
                header.css('background-color','white');
                header.css('transition','.5s');
            }else if(hamburgerButton.hasClass('header__hamburger--close')==false){
                header.css('background-color',primaryColor);
                header.css('transition','.5s');
            }
        }
    })
    //#region map circle mouseenter mosueleave events
    $('[data-toggle=tooltip]').tooltip();
    document.querySelectorAll('.countries-circle').forEach(circle=>{
        circle.addEventListener('mouseenter',function(){
            document.querySelector(circle.getAttribute('data-id')).style.fill=primaryColor;
        })
    })
    document.querySelectorAll('.countries-circle').forEach(circle=>{
        circle.addEventListener('mouseleave',function(){
            document.querySelector(circle.getAttribute('data-id')).style.fill=mapColor;
        })
    })
    document.querySelectorAll('.countries-circle-orange').forEach(circle=>{
        circle.addEventListener('mouseenter',function(){
            document.querySelector(circle.getAttribute('data-id')).style.fill=secondaryColor;
        })
    })
    document.querySelectorAll('.countries-circle-orange').forEach(circle=>{
        circle.addEventListener('mouseleave',function(){
            document.querySelector(circle.getAttribute('data-id')).style.fill=mapColor;
        })
    })
    //#endregion
    // column 99: i wrote slideDown() to this element that's why firstly i should hide it
    function conditionOfPage(){
        if($(window).scrollTop()>=100){
            header.css('backgroundColor','white');
            header.css('height',`80px`);
            header.addClass('add-box-shadow');
            $('.logo__first').css('opacity',`0`);
            $('.logo__second').css('opacity',`1`);
            $('.nav-link').css('color','black');
            hamburgerButton.removeClass('header__hamburger');
            hamburgerButton.addClass('header__hamburger--scroll');
            $('#what-we-do').delay(300).animate({bottom:'20px', opacity:"1" },'slow');
        }else{
            header.css('backgroundColor','rgba(0,0,0,0)');
            header.css('height',`120px`);
            header.removeClass('add-box-shadow');
            $('.logo__first').css('opacity',`1`);
            $('.logo__second').css('opacity',`0`);
            $('.nav-link').css('color','#eee');
            hamburgerButton.removeClass('header__hamburger--scroll');
            hamburgerButton.addClass('header__hamburger');   
        }
        switch (true) {
            case Math.floor(window.scrollY)>=Math.floor($('#what-we-do').offset().top) && Math.floor(window.scrollY)<Math.floor($('#who-we-are').offset().top):
                $('.nav-link-1').css('color',secondaryColor);
                if(Math.floor(window.scrollY)>=(Math.floor($('#what-we-do-2').offset().top)-300) && isSlideDownWork){
                    $('.right-side').slideDown(1000);
                    isSlideDownWork=false;
                }
                break;
            case Math.floor(window.scrollY)>=Math.floor($('#who-we-are').offset().top) && Math.floor(window.scrollY)<Math.floor($("#work-with-us").offset().top):
                $('.nav-link-2').css('color',secondaryColor);
                if(areStatisticsWork){
                    $('.statistics').each(function() {
                        let $this = $(this),
                            countTo = $this.attr('data-count');
                    
                        $({ countNum: $this.text()}).animate({
                            countNum: countTo
                        },
                        {
                            duration: 3000,
                            easing:'linear',
                            step: function() {
                                $this.text(Math.floor(this.countNum) + $this.attr('data-text'));
                            },
                            complete: function() {
                                $this.text(this.countNum + $this.attr('data-text'));
                          }
                        });
                    });
                    areStatisticsWork=false;
                }
                break;
            case Math.floor(window.scrollY)>=Math.floor($("#work-with-us").offset().top) && Math.floor(window.scrollY)<Math.floor($("#news").offset().top):
                $('.nav-link-3').css('color',secondaryColor);
                break;
            case Math.floor(window.scrollY)>=Math.floor($("#news").offset().top) && Math.floor(window.scrollY)<Math.floor($("#end-of-page").offset().top):
                $('.nav-link-4').css('color',secondaryColor);
                break;
            case Math.floor(window.scrollY)>=Math.floor($("#end-of-page").offset().top):
                $('.nav-link-5').css('color',secondaryColor);
                break;
            default:
                break;
        }  
    }
    $('.right-side').hide();
    conditionOfPage()
    $(window).scroll(function(){
        conditionOfPage()
    })
    
    //#region scroll buttons
    $('.scroll-button img').click(function(){
        window.scrollTo(0,$('#what-we-do').offset().top);
    })
    $('.scroll-button span').click(function(){
        window.scrollTo(0,$('#what-we-do').offset().top);
    })
    //#endregion
    document.querySelectorAll('.city-buttons button').forEach(function(value,index){
        value.addEventListener('click',function(){
            const activeButton=$('button.active-color');
            const activeInfo=$('div.d-block');
            activeButton.removeClass('active-color');
            value.classList.add('active-color');
            activeInfo.removeClass('d-block');
            activeInfo.addClass('d-none');
            document.querySelector('.info-according-city').children[index].classList.remove('d-none')
            document.querySelector('.info-according-city').children[index].classList.add('d-block')
        })
    })
})