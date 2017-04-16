$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About me', 'Online CV'],
        continuousVertical: true,
        keyboardScrolling: true,

        anchors: ['Home', 'About me', 'Online CV'],
        menu: '#myMenu'
    });
});