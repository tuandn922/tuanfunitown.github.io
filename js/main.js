$(document).ready(function () {
    //show navbar hompage
    $(this).on('scroll', function () {
        let scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop)
        let nav_menu = $('.header');

        if (scrollTop > 270) {
            nav_menu.slideDown();
            nav_menu.addClass('active')
        } else {
            nav_menu.slideUp();
        }
    })

    //back to top

    let backToTop = document.querySelector('.backtotop');
    // console.log(backToTop)
    backToTop.addEventListener('click', function () {
        window.scrollBy({
            top: -document.body.offsetHeight,
            behavior: "smooth",
        })
    })

    // show menu mobile
    let showMenu = $('.nav__mobile');
    console.log(showMenu)
    $('.menu').on('click', function () {
        showMenu.addClass('show')
        $('.overlay-body').css('display', 'block');
    })
    $('.nav__mobile .close').on('click', function () {
        showMenu.removeClass('show')
        $('.overlay-body').css('display', 'none');

    })

    //popup-order 
    let popup_order = $('.popup');
    $('.service-body .ser-text .btn-contact .order').on('click', function () {
        popup_order.addClass('active');
        $('.overlay-body').css('display', 'block');
    })
    $('.popup .close').on('click', function () {
        popup_order.removeClass('active');
        $('.overlay-body').css('display', 'none');
    })

    //    popup product-detail
    let popup_producr = $('.popup');
    $('.products-detail .contact-me .btn-product .advisory').on('click', function () {
        popup_producr.addClass('active');
        $('.overlay-body').css('display', 'block');
    })
    $('.popup .close').on('click', function () {
        popup_producr.removeClass('active');
        $('.overlay-body').css('display', 'none');
    })

    // select box project

    $('.default-option').on('click', function () {
        $(this).next().stop().slideToggle();
        $(this).parent().toggleClass('active')

    })

    $('.select-ul li').on('click', function () {
        let current = $(this).html()
        console.log(current)
        $('.default-option li').html(current);
        $('.select-ul').stop().slideToggle();
        $(this).parents('.select-wrap').removeClass('active');
    })

    // menu-mobile

    $('.hambuger').on('click', function () {
        let showMenu = $('.nav__mobile');
        // showMenu.slideDown();
        showMenu.addClass('show');
    })

    //slider-homepage

    let $carousel = $('.homepage .slider__list');
    $carousel.flickity({
        cellAlign: 'left',
        wrapAround: true,
        contain: true,
        pageDots: false,
        prevNextButtons: false,
    })
    setInterval(trigger,4000);
    function trigger(){
        let event = new Event("click");
            document.querySelector(".slider .prev").dispatchEvent(event);
            $('.slider .prev').css('transition','all 0.7s');
    }
    $('.slider .prev').on( 'click', function() {
        $carousel.flickity('previous');
    });
    
    $('.slider .next').on( 'click', function() {
        $carousel.flickity('next');
    });

    // slider-product-detail

    let prev = $('.products-detail .detail-bot .prev');
    let next = $('.products-detail .detail-bot .next');

    next.on('click', function(e) {
        e.preventDefault();
        let itemShow = $('.products-detail .detail-bot .list .list-item')
        itemShow.removeClass('active')
        itemShow.next().addClass('active')
    })
    prev.on('click', function(e) {
        e.preventDefault();
        let itemShow = $('.products-detail .detail-bot .list .list-item')
        itemShow.removeClass('active')
        itemShow.prev().addClass('active')
    })

    // tablist-project
    let tabId = $('.project-body .pagination ul li a');
    $('.project-body .project-list').hide();
    $('.project-body .tab_1').show();

    tabId.on('click', function(e) {
        e.preventDefault();
        $('.project-body .pagination ul li .active').removeClass('active');
        $(this).addClass('active');

        let current_tab = $(this).attr("data-list")
        $('.project-body .project-list').hide();
        $('.'+current_tab).show();
    })

    //tab-new

    let tabNewId = $('.newpage .pagination ul li a');
    $('.newpage .new-content .new-list').hide();
    $('.newpage .tab_1').show();

    tabNewId.on('click', function(e) {
        e.preventDefault();
        $('.newpage .pagination ul li .active').removeClass('active');
        $(this).addClass('active');

        let current_tab = $(this).attr("data-list")
        $('.newpage .new-content .new-list').hide();
        $('.'+current_tab).show();
    })  
    
    //loader

    $(window).on('load', function() {
        $('.loader-container').fadeOut(2000);
    });

    //form
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function validateForm(){
        let name = $.trim($('#name').val()),
        phone = $.trim($('#phone').val()),
        email = $.trim($('#email').val()),
        add = $.trim($('#add').val()),
        content = $.trim($('#messenge').val());

        let flag = false;

        // check name

        if(name === '' || name.length < 4) {
            $('#err-name').text('Vui lòng nhập tên của bạn!');
            $('#name').addClass('error');
        } else{
            $('#err-name').text('');
            $('#name').removeClass('error');
            flag = true; 
        }

         // check phone
    if (phone == ''){
        $('#err-phone').text('Vui lòng nhập số điện thoại của bạn!');
        $('#phone').addClass('error');
    } else if (phone.length !== 10) {
        $('#err-phone').text('Vui lòng nhập đúng số điện thoại!'); 
        $('#phone').addClass('error');
        flag = true;
    } else {
        $('#err-phone').text('');
        $('#phone').removeClass('error');
    }
    

    //check email
    if (email == ''){
        $('#err-email').text('Vui lòng nhập email');
        $('#email').addClass('error');
    } else if(!isEmail(email)){
        $('#err-email').text('Email không đúng, vui lòng nhập email');
        $('#email').addClass('error');
    } else {
        $('#err-email').text('');
        $('#email').removeClass('error');
        flag = true;
    }

      //check message
      if (add == ''){
        $('#err-add').text('Vui lòng nhập nội dung tin nhắn');
        $('#add').addClass('error');
    } else{
        $('#err-add').text('');
        $('#add').removeClass('error');
        flag = true;
    } 

    }

    let btnSend = $('.contact .btn-submit .send');
    btnSend.on('click', function() {
        validateForm();
    })
})



