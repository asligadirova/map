$(document).ready(function(){
    const primaryColor='#2D3192';
    const secondaryColor='#FF931E';
    const mapColor='#E5E9F4';
    const header=$('.header-part');
    $(window).scroll(function(){
            if($(window).scrollTop()>=100){
                header.css('backgroundColor','white');
                header.css('height',`80px`);
                header.addClass('add-box-shadow');
                $('.logo__first').css('opacity',`0`);
                $('.logo__second').css('opacity',`1`);
            }else{
                header.css('backgroundColor','rgba(0,0,0,0)');
                header.css('height',`120px`);
                header.removeClass('add-box-shadow');
                $('.logo__first').css('opacity',`1`);
                $('.logo__second').css('opacity',`0`);
            }
    })
})