// Declare map variable
var map;

// Define initMap fn to create the map
function initMap() {

    // Declare storeLocation variable, assign location lat and lng to it
    var storeLocation = {lat: 6.6003014, lng: 3.3725881};

    // Instantiate new Map object
    map = new google.maps.Map(document.getElementById("location-map"), {
        "center" : storeLocation,
        "zoom" : 15,
        "mapTypeId" : google.maps.MapTypeId.ROADMAP,
        "draggable" : false,
        "scrollwheel" : false
    });

    // Declare popupString variable, assign popup text to it
    var popupString = "<strong>AODtechz Company Inc</strong><br>";
        popupString += "A3C Ikosi Road Oregun<br>";
        popupString += "Ikeja, Lagos<br>";
        popupString += "Nigeria";

    // Declare infowindow variable to instantiate new InfoWindow object
    var infowindow = new google.maps.InfoWindow({
        content: popupString
    });

    // Declare marker variable to instantiate new Marker object
    var marker = new google.maps.Marker({
        "position" : storeLocation,
        "map" : map,
        "title" : "AODtechz Company Inc (actually Daystar Christian Center)"
    });

    // Attach click event to the marker to popup the infowindow
    marker.addListener("click", function() {
        infowindow.open(map, marker);
    });
}
