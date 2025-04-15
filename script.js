
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 41.836449, long: -87.626691},
        zoom: 12,
    });
}

initMap()