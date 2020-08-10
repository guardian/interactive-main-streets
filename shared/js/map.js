import * as d3 from 'd3'
import * as topojson from 'topojson'
import textures from 'textures'

let projection;
let path;

window.pro = projection;

class Map {

	constructor(params){

		projection = d3.geoMercator()
		.center(params.center)
		.translate([params.width/2, params.height/2])
		.scale(params.scale);

		path = d3.geoPath()
		.projection(projection)

	}

	makeMap(svg, features){

		console.log(features)

		svg.append('g')
		.attr('class', "features").selectAll('path')
		.data(topojson.feature(features, features.objects.features).features)
		.enter()
		.append('path')
		.attr('d', path)
		.attr('class', d => d.properties.fclass)

		if(features.objects.roads)
		{

			svg.append('g')
			.attr('class', "roads").selectAll('path')
			.data(topojson.feature(features, features.objects.roads).features)
			.enter()
			.append('path')
			.attr('d', path)
			.attr('class', d => d.properties.fclass)

		}

		

	}

	highlightArea(svg, overlay, areaName){

		let texture = textures.lines()
		.size(4)
		.stroke("#fafafa")
		.strokeWidth(1);

		svg.call(texture)

		let area = svg.append('g')
		.selectAll('path')
		.data(topojson.feature(overlay, overlay.objects[areaName]).features)
		.enter()
		.append('path')
		.attr('d', path)
		.attr('fill', texture.url())
		.attr('opacity', 0)

		area
		.transition()
		.duration(2000)
		.attr('opacity', 1)

	}


	reset(svg){

		svg.selectAll().remove();

	}


	getProjection(params){

		return projection(params)

	}

		
}

export default Map