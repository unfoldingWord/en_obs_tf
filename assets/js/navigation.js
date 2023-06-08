function addClass(nodeId, className) {
    var node = document.getElementById(nodeId);
    if (node != null) {
        node.classList.add(className);
    }
}

function selectActiveNavigationItem() {
    var filename = window.location.pathname.split("/").pop();
    switch (filename) {
        case "overview.html":
            addClass('introduction-header-nav-item', 'header-nav-item--active');
            addClass('introduction-header-nav-item-mobile', 'header-nav-item--active');
            addClass('introduction-header-nav-folder-item', 'header-menu-nav-item--active');
            break;
        case "mission-translation-brief.html":
            addClass('mtb-header-nav-item', 'header-nav-item--active');
            addClass('mtb-header-nav-item-mobile', 'header-nav-item--active');
            addClass('mtb-header-nav-folder-item', 'header-menu-nav-item--active');
            break;
        case "obs.html":
            addClass('obs-header-nav-item', 'header-nav-item--active');
            addClass('obs-header-nav-item-mobile', 'header-nav-item--active');
            addClass('obs-header-nav-folder-item', 'header-menu-nav-item--active');
            break;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    selectActiveNavigationItem();
});