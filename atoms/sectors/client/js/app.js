import * as d3 from 'd3'

const atomEl = d3.select('.interactive-wrapper .maps-container').node();

let isMobile = window.matchMedia('(max-width: 860px)').matches;

let width = isMobile ? atomEl.getBoundingClientRect().width / 2 : atomEl.getBoundingClientRect().width / 4;
let height =  isMobile ? width * 2.5 / 2: width * 2.5 ;

let sectors = [
"Restaurants, cafes & fast food",
"Bars, pubs & clubs",
"Groceries, supermarkets & food shops",
"Household items",
"Health & beauty",
"Fashion & clothing",
"Other"
]

sectors.map( s => {

	let sectorMapContainer = d3.select('.interactive-wrapper .maps-container')
	.append('div')
	.attr('class', 'sector-slope-container');

	let svg = sectorMapContainer.append("svg")
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'sector-map')


})


d3.csv('<%= path %>/csv/sectors.csv')
.then(fileRaw => {
	console.log(fileRaw)

})