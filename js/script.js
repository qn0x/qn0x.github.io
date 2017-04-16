$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Home', 'About me', 'Online CV'],
        continuousVertical: false,
        keyboardScrolling: true,

        controlArrows: false,

        scrollHorizontally: true,

        anchors: ['Home', 'About me', 'Online CV'],
        menu: '#myMenu',

        slidesNavigation: true,
        slidesNavPosition: 'bottom'
    });

    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel();

});
