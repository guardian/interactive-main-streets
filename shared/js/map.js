import * as d3 from 'd3'
import * as topojson from 'topojson'
import textures from 'textures'

let projection;
let path;

class Map {

	constructor(params){

		projection = d3.geoMercator()
		.fitExtent([[0, 0], [params.width, params.height]], params.extent);

		path = d3.geoPath()
		.projection(projection)

	}

	makeMap(svg, features){

		svg.append('g')
		.attr('class', "features").selectAll('path')
		.data(topojson.feature(features, features.objects.features).features)
		.enter()
		.append('path')
		.attr('d', path)
		.attr('class', d => d.properties.fclass)

	svg.on("click", function() {
  		console.log(projection.invert(d3.mouse(this)));
	});

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


	makeLabel(svg, line, text, orientation){

		svg
			.append('path')
			.datum(line)
		    .attr("class", "locator-line")
		    .attr("d", path);


		switch(orientation)
		{
			case 'top':
		    svg
			.append('text')
			.attr('class', 'map-text-top')
			.text(text)
			.attr('x', d => projection(line.coordinates[0])[0])
			.attr('y', d => projection(line.coordinates[1])[1] - 5)
			break;

			case 'left':
		    svg
			.append('text')
			.attr('class', 'map-text-left')
			.text(text)
			.attr('x', d => projection(line.coordinates[1])[0] - 5)
			.attr('y', d => projection(line.coordinates[1])[1])
		}

		

	}


	reset(svg){
		svg.selectAll().remove();
	}


	getProjection(params){

		return projection(params)

	}

	getPath(){
		return path
	}

		
}

export default Map