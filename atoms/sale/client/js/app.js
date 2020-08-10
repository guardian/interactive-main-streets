import * as d3 from 'd3'
import ScrollyTeller from "shared/js/scrollyteller"
import Map from 'shared/js/map'

import sale from 'assets/topojson/sale.json'

const atomEl = d3.select('#scrolly-2 #map-container').node();

let isMobile = window.matchMedia('(max-width: 860px)').matches;

let width = atomEl.getBoundingClientRect().width;
let height =  window.innerHeight;

let svg = d3.select('#scrolly-2 #map-container').append('svg')
.attr('width', width)
.attr('height', height)
.attr('class', 'geo-map')

let highlightGroup = svg.append('g');

let mapGroup = svg.append('g');

let dotsGroup = svg.append('g');

let scale = (512) * 0.5 / Math.PI * Math.pow(2, 15)

let center = [-2.3369295, 53.4207982]

let map = new Map({width:width, height:height, scale:scale, center:center})

map.makeMap(mapGroup,sale)

const scrolly = new ScrollyTeller({
	parent: document.querySelector("#scrolly-2"),
    triggerTop: .5, // percentage from the top of the screen that the trigger should fire
    triggerTopMobile: 0.75,
    transparentUntilActive: false
});

scrolly.addTrigger({num: 1, do: () => {

	console.log('1')

}});


scrolly.addTrigger({num: 2, do: () => {

	console.log(2)

	map.reset(highlightGroup)

	d3.csv('<%= path %>/csv/High street map COVID_Impact_Selected_Towns_Final - Selected-data.csv')
	.then(fileRaw => {
		
			dotsGroup
			.selectAll('circle')
			.data(fileRaw)
			.enter()
			.append('circle')
			.attr('r', 3)
			.attr('cx', d => map.getProjection([d.Longitude, d.Latitude])[0])
			.attr('cy', d => map.getProjection([d.Longitude, d.Latitude])[1])
	})

}});

scrolly.watchScroll();

