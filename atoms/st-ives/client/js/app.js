import * as d3 from 'd3'
import ScrollyTeller from "shared/js/scrollyteller"
import Map from 'shared/js/map'

import stives from 'assets/topojson/stives.json'
import cornwall from 'assets/topojson/cornwall.json'

const atomEl = d3.select('#scrolly-4 #map-container').node();

let isMobile = window.matchMedia('(max-width: 860px)').matches;

let width = atomEl.getBoundingClientRect().width;
let height =  window.innerHeight;

let svg = d3.select('#scrolly-4 #map-container').append('svg')
.attr('width', width)
.attr('height', height)
.attr('class', 'geo-map')

let highlightGroup = svg.append('g');

let mapGroup = svg.append('g');

let dotsGroup = svg.append('g');

let scale = (512) * 0.5 / Math.PI * Math.pow(2, 16)

let center = [-5.48018, 50.21283]

let bg = new Map({width:width, height:height, scale:scale, center:center})
let map = new Map({width:width, height:height, scale:scale, center:center})

bg.makeMap(highlightGroup,cornwall)
map.makeMap(mapGroup,stives)

const scrolly = new ScrollyTeller({
	parent: document.querySelector("#scrolly-4"),
    triggerTop: .5, // percentage from the top of the screen that the trigger should fire
    triggerTopMobile: 0.75,
    transparentUntilActive: false
});

d3.csv('<%= path %>/csv/High street map COVID_Impact_Selected_Towns_Final - Selected-data.csv')
.then(fileRaw => {

	let shops = fileRaw.filter(s => s['Selected Town'] === 'St. Ives')

	dotsGroup
		.selectAll('circle')
		.data(shops)
		.enter()
		.append('circle')
		.attr('class', d => 's' + d['Occupier ID'])
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




