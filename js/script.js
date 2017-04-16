$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Home', 'About me', 'Online CV'],
        continuousVertical: false,
        keyboardScrolling: true,
        controlArrows: false,

        anchors: ['Homepage', 'About me', 'Online CV'],
        menu: '#myMenu',

        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        verticalCentered: true,

        lazyLoading: true,

        bigSectionsDestination: top,

        fitToSection: true,
        scrollOverflow: true
    });

});
