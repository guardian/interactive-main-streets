import * as d3B from 'd3'
import * as d3Select from 'd3-selection'
import * as topojson from 'topojson'
import * as d3geo from 'd3-geo'
import * as d3Tile from 'd3-tile'
import * as mapboxgl from 'mapbox-gl'
import styleLayers from 'shared/js/style-layer.js'

import manchester from 'assets/topojson/manchester.json'

let d3 = Object.assign({}, d3B, d3Select, d3geo, d3Tile);

const atomEl = d3.select('.interactive-wrapper').node();

let isMobile = window.matchMedia('(max-width: 860px)').matches;

/*let mapboxStyle = "mapbox://styles/guardian/cj849befy0k092qmnn3p6onkx?asdgcpiasgdciagsdpcgasp";
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VhcmRpYW4iLCJhIjoiNHk1bnF4OCJ9.25tK75EuDdgq5GxQKyD6Fg';

//let client = new MapboxClient('pk.eyJ1IjoiZ3VhcmRpYW4iLCJhIjoiNHk1bnF4OCJ9.25tK75EuDdgq5GxQKyD6Fg');

let mapBoxMap = new mapboxgl.Map({
    container: 'mapbox-container', // container id
   	style: mapboxStyle, // stylesheet location
    center: [-2.25142, 53.48034], // starting position [lng, lat]
    zoom: 14,
    preserveDrawingBuffer: true,
    interactive: true
});

let container = mapBoxMap.getCanvasContainer()

let bbox = document.getElementById('mapbox-container').getBoundingClientRect();
let center = mapBoxMap.getCenter();
let zoom = mapBoxMap.getZoom();
// 512 is hardcoded tile size, might need to be 256 or changed to suit your mapBoxMap config
let scale = (512) * 0.5 / Math.PI * Math.pow(2, zoom);*/

let width = atomEl.getBoundingClientRect().width;
let height =  window.innerHeight;

let scale = (512) * 0.5 / Math.PI * Math.pow(2, 15)

let projection = d3.geoMercator()
.center([-2.25142, 53.48034])
.translate([width/2, height/2])
.scale(scale);

let path = d3.geoPath()
.projection(projection)

let svg = d3.select('#map-container').append('svg')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'geo-map')

	svg.append('g')
	.attr('class', "features").selectAll('path')
	.data(topojson.feature(manchester, manchester.objects.features).features)
	.enter()
	.append('path')
	.attr('d', path)



/*mapBoxMap.on('load', function () {

    mapBoxMap.addLayer(styleLayers[0])

    styleLayers.forEach(function(feature){

        let layerID = feature['id'];
        if (!mapBoxMap.getLayer(layerID))
        {
            mapBoxMap.addLayer(feature)
        }
    })

    
})*/
