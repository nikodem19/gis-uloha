var myview = new ol.View({
    center: [2460835.0014271783, 6083183.299206849],
    zoom: 5
})

var mylayer = new ol.layer.Tile({
    source: new ol.source.OSM()
})

var layer = [mylayer]

var map = new ol.Map({
    target: 'map',
    layers: layer,
    view: myview
});

var mygeojson = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'kraje.json'
    })
})


map.addLayer(mygeojson)


//menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "kraje.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

console.log(json.features)

$(function() {
    var data = json.features
    $.each(data, function(i, option) {
        $('#sel').append($('<option/>').attr("value", option.properties.idn2).text(option.properties.nm2));
    });
})

var $myDropdown = $("#myDropdown");

// Loop through items in JSON data..
json.features.forEach(function(item) {
    var $button = $("<a>" + item.properties.nm2 + "</a>");
    $myDropdown.append($button);

    // Button click handler..
    $button.on("click", function() {
        console.log(item.properties.idn2)
        var first = item.geometry.coordinates
        console.log(first[0][0])

        myview.animate({
            center: first[0][0],
            zoom: 9
        })

    });
});
