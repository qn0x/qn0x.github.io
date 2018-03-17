$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: false,
        continuousVertical: false,
        keyboardScrolling: true,
        controlArrows: false,

        anchors: ['Homepage', 'About me', 'Online CV'],
        menu: '#myMenu',

        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        verticalCentered: true,

        lazyLoading: true,

        bigSectionsDestination: top,

        fitToSection: true,
        scrollOverflow: true
    });

});
