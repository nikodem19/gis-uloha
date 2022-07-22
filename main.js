const ta=[1957881.5265312223, 6169648.303543709]
const tc = [2007205.7596655781, 6256178.331634442];
const ni=[2013603.047033104, 6158549.771263702]
const zi=[2085574.4484360716, 6312283.528184678]
const pv=[2364970.408131832, 6274533.166517436]
const ke=[2366262.335715236, 6226294.2103783265]
const bb=[2132439.283509887, 6230184.138184544]
const bl=[1905241.6784807218, 6131980.992352349]

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

function zoomNaKraj(x){
    switch(x) {
        case bb:
            myview.animate({
                center: bb,
                zoom: 10
            })
            break;
        case bl:
            myview.animate({
                center: bl,
                zoom: 10
            })
            break;
        case ta:
            myview.animate({
                center: ta,
                zoom: 10
            })
            break;
        case tc:
            myview.animate({
                center: tc,
                zoom: 10
            })
            break;
        case ni:
            myview.animate({
                center: ni,
                zoom: 10
            })
            break;
        case zi:
            myview.animate({
                center: zi,
                zoom: 10
            })
            break;
        case pv:
            myview.animate({
                center: pv,
                zoom: 10
            })
            break;
        case ke:
            myview.animate({
                center: ke,
                zoom: 10
            })
            break;
        default:
    }
}