if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

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
