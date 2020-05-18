var map;

function initMap() {

    var storeLocation = {lat: 6.6003014, lng: 3.3725881};

    map = new google.maps.Map(document.getElementById("location-map"), {
        "center" : storeLocation,
        "zoom" : 15,
        "mapTypeId" : google.maps.MapTypeId.ROADMAP,
        "draggable" : false,
        "scrollwheel" : false
    });

    var popupString = "<strong>AODtechz Company Inc</strong><br>";
        popupString += "A3C Ikosi Road Oregun<br>";
        popupString += "Ikeja, Lagos<br>";
        popupString += "Nigeria";

    var infowindow = new google.maps.InfoWindow({
        content: popupString
    });

    var marker = new google.maps.Marker({
        "position" : storeLocation,
        "map" : map,
        "title" : "AODtechz Company Inc (actually Daystar Christian Center)"
    });

    marker.addListener("click", function() {
        infowindow.open(map, marker);
    });
}
