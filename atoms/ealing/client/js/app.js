import * as d3 from 'd3'
import ScrollyTeller from "shared/js/scrollyteller"
import Map from 'shared/js/map'
import Locator from 'shared/js/locator'

import ealing from 'assets/topojson/ealing.json'

const atomEl = d3.select('#scrolly-3 #map-container').node();

let isMobile = window.matchMedia('(max-width: 860px)').matches;

let width = atomEl.getBoundingClientRect().width;
let height =  window.innerHeight;

let svg = d3.select('#scrolly-3 #map-container').append('svg')
.attr('width', width)
.attr('height', height)
.attr('class', 'geo-map')

let highlightGroup = svg.append('g');

let mapGroup = svg.append('g');

let dotsGroup = svg.append('g');

let locatorGroup = svg.append('g');

let margin = 0.001;


d3.csv('<%= path %>/csv/High street map COVID_Impact_Selected_Towns_Final - Selected-data.csv')
.then(fileRaw => {


	let shops = fileRaw.filter(s => s['Selected Town'] === 'Ealing')

	let minLat = d3.min(shops, d => +d.Latitude);
	let maxLat = d3.max(shops, d => +d.Latitude);
	let minLon = d3.min(shops, d => +d.Longitude) - margin;
	let maxLon = d3.max(shops, d => +d.Longitude) + margin;

	let extent = {
        type: "LineString",
        coordinates: [
            [minLon, maxLat],
            [maxLon, maxLat],
            [maxLon, minLat],
            [minLon, minLat],
        ]
    }

	let map = new Map({width:width, height:height, extent:extent})

	let locator = new Locator({width:isMobile ? 90 : 200, height:isMobile ? 120 : 250 })

	locator.makeLocator(locatorGroup)

	locator.makePoint(locatorGroup,[-0.3117876941, 51.51216137], 'Ealing')

	map.makeMap(mapGroup,ealing)

	var line = {
        type: "LineString",
        coordinates: [
            [ -0.3115,51.51216137],
            [ -0.3115,51.514]
        ]
    }

    map.makeLabel(mapGroup, line, 'New Broadway', 'top')

	const scrolly = new ScrollyTeller({
		parent: document.querySelector("#scrolly-3"),
	    triggerTop: .5, // percentage from the top of the screen that the trigger should fire
	    triggerTopMobile: 0.75,
	    transparentUntilActive: false
	});

	dotsGroup
		.selectAll('circle')
		.data(shops)
		.enter()
		.append('circle')
		.attr('class', d => 's' + d['Occupier ID'] + ' Open')
		.attr('r', 4)
		.attr('cx', d => map.getProjection([d.Longitude, d.Latitude])[0])
		.attr('cy', d => map.getProjection([d.Longitude, d.Latitude])[1])

	scrolly.addTrigger({num: 1, do: () => {


		shops.map(d => {

			if(d['Pre-lockdown'] != 'Open')
			{

				dotsGroup.select('.s' + d['Occupier ID'])
				.classed('Closed', true)
				.classed('Open', false)
			}
			else
			{
				dotsGroup.select('.s' + d['Occupier ID'])
				.classed('Closed', false)
				.classed('Open', true)
			}
			
		})

		


	}});


	scrolly.addTrigger({num: 2, do: () => {

		shops.map(d => {


			if(d['Lockdown'] != 'Open')
			{

				dotsGroup.select('.s' + d['Occupier ID'])
				.classed('Closed', true)
				.classed('Open', false)
			}
			else
			{
				dotsGroup.select('.s' + d['Occupier ID'])
				.classed('Closed', false)
				.classed('Open', true)
			}
			
		})

	}});

	scrolly.addTrigger({num: 3, do: () => {


		shops.map(d => {


			if(d['Post Lockdown'] != 'Open')
			{

				dotsGroup.select('.s' + d['Occupier ID'])
				.classed('Closed', true)
				.classed('Open', false)
			}
			else
			{
				dotsGroup.select('.s' + d['Occupier ID'])
				.classed('Closed', false)
				.classed('Open', true)
			}
			
		})

	}});


	scrolly.watchScroll();

})




