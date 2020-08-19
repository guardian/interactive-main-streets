import * as d3 from 'd3'
import * as topojson from 'topojson'
import uk from 'assets/topojson/uk.json'
import textures from 'textures'


let projection;
let path;

class Locator{

	constructor(params){

		projection = d3.geoMercator()

		projection
		.fitSize([params.width, params.height], topojson.feature(uk, uk.objects.uk))	

		path = d3.geoPath()
		.projection(projection)

			
	}


	makeLocator(svg){
		svg
	    .append("path")
	    .datum(topojson.feature(uk, uk.objects.uk))
	    .attr("d", path)
	    .attr('class', 'locator-fill')

		let texture = textures.lines()
		.size(4)
		.stroke("#fafafa")
		.strokeWidth(1);

		svg.call(texture)

		svg
	    .append("path")
	    .datum(topojson.feature(uk, uk.objects.uk))
	    .attr("d", path)
	    .attr('fill', texture.url())

	    svg
	    .append("path")
	    .datum(topojson.feature(uk, uk.objects.uk))
	    .attr("d", path)
	    .attr('class', 'locator-stroke')
	    
	}

	makePoint(svg, latLon, text){

		svg
		.append('circle')
		.attr('class', 'locator-dot')
		.attr('r', 4)
		.attr('cx', d => projection(latLon)[0])
		.attr('cy', d => projection(latLon)[1])


		svg
		.append('text')
		.attr('class', 'locator-text')
		.text(text)
		.attr('x', d => projection(latLon)[0] + 5)
		.attr('y', d => projection(latLon)[1])

	}

}


export default Locator