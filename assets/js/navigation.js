function addClass(nodeId, className) {
    var node = document.getElementById(nodeId);
    if (node != null) {
        node.classList.add(className);
    }
}

function selectActiveNavigationItem() {
    console.log(window);
    switch (window.location.pathname) {
        case "/overview.html":
            addClass('introduction-header-nav-item', 'header-nav-item--active');
            addClass('introduction-header-nav-item-mobile', 'header-nav-item--active');
            addClass('introduction-header-nav-folder-item', 'header-menu-nav-item--active');
            break;
        case "/mission-translation-brief.html":
            addClass('mtb-header-nav-item', 'header-nav-item--active');
            addClass('mtb-header-nav-item-mobile', 'header-nav-item--active');
            addClass('mtb-header-nav-folder-item', 'header-menu-nav-item--active');
            break;
        case "/obs.html":
            addClass('obs-header-nav-item', 'header-nav-item--active');
            addClass('obs-header-nav-item-mobile', 'header-nav-item--active');
            addClass('obs-header-nav-folder-item', 'header-menu-nav-item--active');
            break;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    selectActiveNavigationItem();
});