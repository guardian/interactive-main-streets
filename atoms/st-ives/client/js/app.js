import * as d3 from 'd3'
import ScrollyTeller from "shared/js/scrollyteller"
import Map from 'shared/js/map'
import Locator from 'shared/js/locator'

import stives from 'assets/topojson/stives.json'
import cornwall from 'assets/topojson/cornwall.json'

const atomEl = d3.select('#scrolly-4 #map-container').node();

let isMobile = window.matchMedia('(max-width: 860px)').matches;

let width = atomEl.getBoundingClientRect().width;
let height =  window.innerHeight;

let svg = d3.select('#scrolly-4 #map-container').append('svg')
.attr('width', width)
.attr('height', height)
.attr('class', 'geo-map-cornwall')

let highlightGroup = svg.append('g');

let mapGroup = svg.append('g');

let dotsGroup = svg.append('g');

let locatorGroup = svg.append('g');

let margin = 0.001;


d3.csv('<%= path %>/csv/High street map COVID_Impact_Selected_Towns_Final - Selected-data.csv')
.then(fileRaw => {


	let shops = fileRaw.filter(s => s['Selected Town'] === 'St. Ives')

	let minLat = d3.min(shops, d => +d.Latitude) - margin;
	let maxLat = d3.max(shops, d => +d.Latitude)+ margin;
	let minLon = d3.min(shops, d => +d.Longitude);
	let maxLon = d3.max(shops, d => +d.Longitude); 

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

	let bg = new Map({width:width, height:height, extent:extent})

	bg.makeMap(highlightGroup,cornwall)

	let locator = new Locator({width:isMobile ? 90 : 200, height:isMobile ? 120 : 250 })

	locator.makeLocator(locatorGroup)

	locator.makePoint(locatorGroup,[-5.48018, 50.21283], 'St. Ives')

	map.makeMap(mapGroup,stives)

	var line = {
        type: "LineString",
        coordinates: [
            [ -5.478362731462403, 50.207931424277106],
            [ -5.479, 50.207931424277106]
        ]
    }

    map.makeLabel(mapGroup, line, 'Treylon Avenue', 'left')

	const scrolly = new ScrollyTeller({
		parent: document.querySelector("#scrolly-4"),
	    triggerTop: .5, // percentage from the top of the screen that the trigger should fire
	    triggerTopMobile: 0.75,
	    transparentUntilActive: true
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














