function right_portablechart(selection, location){

    var margin = {top: 60, right: 30, bottom: 30, left: 30}
      , width = parseInt(d3.select('#' + location).style('width'), 10)
      , width = width - margin.left - margin.right
      , height = 100 // placeholder
      , barHeight = 20
      , spacing = 3
      , percent = d3.format('%');


    // ########### LINE  CHART ############
    // 
    



    // scales and axes
    var x = d3.scale.linear()
        .range([0, width])
        .domain([0, .4]); // hard-coding this because I know the data

    var y = d3.scale.ordinal();

    var xAxis = d3.svg.axis()
        .scale(x)
        .tickFormat(percent)
        .ticks(4);

    // create the chart
    var new_div = d3.select('#' + location)
    .append('div').attr('class', 'row')


    var chart = new_div.append('svg')
        .style('width', (width + margin.left + margin.right) + 'px')
        .append('g')
        .attr('transform', 'translate(' + [margin.left, margin.top] + ')');

    // set y domain
    y.domain(d3.range(data.filter(function(d){ return d.district_name == selection; }).length))
        .rangeBands([0, data.filter(function(d){ return d.district_name == selection; }).length * barHeight]);

    // set height based on data
    height = y.rangeExtent()[1];
    d3.select(chart.node().parentNode)
        .style('height', (height + margin.top + margin.bottom) + 'px')

    // render the chart

    // add axis
    chart.append('g')
        .attr('class', 'x axis top')
        .call(xAxis.orient('top'));

    chart.append('text')
    	 .text('PERCENT OF CLASSROOMS IN PORTABLES')
    	 .attr('y', y.rangeBand() - 45)

    var bars = chart.selectAll('.bar')
        .data(data.filter(function(d){ return d.district_name == selection; }))
      	.enter()
		.append('g')
        .attr('class', 'bar')
        .attr('transform', function(d, i) { return 'translate(0,'  + y(i) + ')'; })

    bars.append('rect')
        .attr('class', 'background')
        .attr('height', y.rangeBand())
        .attr('width', width);

    bars.append('rect')
        .attr('class', 'percent')
        .attr('height', y.rangeBand())
        .attr('width', function(d) { return x(d.percent_portables); })


    bars.append('text')
        .text(function(d) { return d.portable_classrooms + " portables, " + d.classrooms + " total classrooms."; })
        //.attr('class', 'name')
        .attr('y', y.rangeBand() + 25)
        .attr('x', spacing);

    // add median ticks
    var median = d3.median(data, function(d) { return d.percent_portables; });

    d3.select('span.median').text(percent(median));

    bars.append('line')
        .attr('class', 'median')
        .attr('x1', x(.10))
        .attr('x2', x(.10))
        .attr('y1', 1)
        .attr('y2', y.rangeBand() - 1);


// ############ PIE/DONUT CHART ################
// terrible looking hack to restructure the data
piedata = data.filter(function(d){ return d.district_name == selection; })
all_ports = piedata[0]['portable_classrooms']
port_fives = piedata[0]['five_year_portables']
port_twenties = piedata[0]['twenty_year_portables']

var pie_div = d3.select("#right-district")//.append('div')
	//.attr('class', 'row')
	.append('div')
	.attr('class', 'large-6 columns')
	.attr('id', 'right-pie-div')
    .style('margin-top', '10px')

	pie_div
	 	.append('text')
	 	.text('AGE OF PORTABLES')

	width = parseInt(d3.select('#right-pie-div').style('width'), 10)	


// WE COULD AND PROBABLY SHOULD WRAP THIS IN A FUNCTION
piedata = [{'name': 'Older than 20 years', 'number': port_twenties},
		   {'name': 'Newer than 5 years', 'number': port_fives},
		   {'name': 'Other', 'number': (all_ports - (port_fives + port_twenties))}]
		   
height = 200
radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .range(["#2ba6cb", "#cdecf4", "#8ed3e7"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.number; });


var svg = pie_div.append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g = svg.selectAll(".arc")
      .data(pie(piedata))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d, i) { return color(i); });

  g.append("text")
      .text(function(d) { return d.name; })
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")

  	pie_div.append('div')
   		  .html('<div class="row"> <div class="newport"></div> <span class="legendtext"> <5 years</span> <div class="otherport"></div> <span class="legendtext"> 5-20 years</span> <div class="oldport"></div> <span class="legendtext"> >20 years </span> </div>')




    

    // resize
    d3.select(window).on('resize', resize); 

    function resize() {
    // update width
    width = parseInt(d3.select('#' + location).style('width'), 10);
    width = width - margin.left - margin.right;

    // resize the chart
    x.range([0, width]); 
    d3.select(chart.node().parentNode)
        .style('height', (y.rangeExtent()[1] + margin.top + margin.bottom) + 'px')
        .style('width', (width + margin.left + margin.right) + 'px');

    chart.selectAll('rect.background')
        .attr('width', width);

    chart.selectAll('rect.percent')
        .attr('width', function(d) { return x(d.percent_portables); });

    chart.selectAll('line.median')
        .attr('x1', x(.01))
        .attr('x2', x(.01));


    // update axes
    chart.select('.x.axis.top').call(xAxis.orient('top'));
    chart.select('.x.axis.bottom').call(xAxis.orient('bottom'));

    }
}


function left_portablechart(selection, location){

    var margin = {top: 60, right: 30, bottom: 30, left: 30}
      , width = parseInt(d3.select('#' + location).style('width'), 10)
      , width = width - margin.left - margin.right
      , height = 100 // placeholder
      , barHeight = 20
      , spacing = 3
      , percent = d3.format('%');

    // scales and axes
    var x = d3.scale.linear()
        .range([0, width])
        .domain([0, .4]); // hard-coding this because I know the data

    var y = d3.scale.ordinal();

    var xAxis = d3.svg.axis()
        .scale(x)
        .tickFormat(percent)
        .ticks(4);

    // create the chart
    var new_div = d3.select('#' + location)
    .append('div').attr('class', 'row')


    var chart = new_div.append('svg')
        .style('width', (width + margin.left + margin.right) + 'px')
        .append('g')
        .attr('transform', 'translate(' + [margin.left, margin.top] + ')');

    // set y domain
    y.domain(d3.range(data.filter(function(d){ return d.district_name == selection; }).length))
        .rangeBands([0, data.filter(function(d){ return d.district_name == selection; }).length * barHeight]);

    // set height based on data
    height = y.rangeExtent()[1];
    d3.select(chart.node().parentNode)
        .style('height', (height + margin.top + margin.bottom) + 'px')

    // render the chart

    // add axis
    chart.append('g')
        .attr('class', 'x axis top')
        .call(xAxis.orient('top'));

    chart.append('text')
    	 .text('PERCENT OF CLASSROOMS IN PORTABLES')
    	 .attr('y', y.rangeBand() - 55)

    var bars = chart.selectAll('.bar')
        .data(data.filter(function(d){ return d.district_name == selection; }))
      	.enter()
		.append('g')
        .attr('class', 'bar')
        .attr('transform', function(d, i) { return 'translate(0,'  + y(i) + ')'; })

    bars.append('rect')
        .attr('class', 'background')
        .attr('height', y.rangeBand())
        .attr('width', width);

    bars.append('rect')
        .attr('class', 'percent')
        .attr('height', y.rangeBand())
        .attr('width', function(d) { return x(d.percent_portables); })


    bars.append('text')
        .text(function(d) { return d.portable_classrooms + " portables, " + d.classrooms + " total classrooms"  ; })
        .attr('class', 'name')
        .attr('y', y.rangeBand() + 25)
        .attr('x', spacing);

    bars.append('text')
        .text('Often-used cutoff for "excessive" use')
        .style('font-size', '8pt')
        .style('fill', '#FF0000')
        .attr('y', y.rangeBand() + 10)
        .attr('x', x(.10));


    // add median ticks
    var median = d3.median(data, function(d) { return d.percent_portables; });

    d3.select('span.median').text(percent(median));

    bars.append('line')
        .attr('class', 'median')
        .attr('x1', x(.10))
        .attr('x2', x(.10))
        .attr('y1', 1)
        .attr('y2', y.rangeBand() - 1);

// ############ PIE/DONUT CHART #################
// terrible looking hack to restructure the data
piedata = data.filter(function(d){ return d.district_name == selection; })
all_ports = piedata[0]['portable_classrooms']
port_fives = piedata[0]['five_year_portables']
port_twenties = piedata[0]['twenty_year_portables']

var pie_div = d3.select("#left-district")//.append('div')
	//.attr('class', 'row')
	.append('div')
	.attr('class', 'large-6 columns')
	.attr('id', 'left-pie-div')
    .style('margin-top', '10px')

	pie_div.append('text')
	 .text('AGE OF PORTABLES')
	 //.attr('y', y.rangeBand() - 45)

	width = parseInt(d3.select('#left-pie-div').style('width'), 10)	


// WE COULD AND PROBABLY SHOULD WRAP THIS IN A FUNCTION
piedata = [{'name': 'Older than 20 years', 'number': port_twenties},
		   {'name': 'Newer than 5 years', 'number': port_fives},
		   {'name': 'Other', 'number': (all_ports - (port_fives + port_twenties))}]
		   
height = 200
radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .range(["#2ba6cb", "#cdecf4", "#8ed3e7"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.number; });


var svg = pie_div.append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g = svg.selectAll(".arc")
      .data(pie(piedata))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d, i) { return color(i); });

  g.append("text")
      .text(function(d) { return d.name; })
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")

   pie_div.append('div')
   		  .html('<div class="row"> <div class="newport"></div> <span class="legendtext"> <5 years</span> <div class="otherport"></div> <span class="legendtext"> 5-20 years</span> <div class="oldport"></div> <span class="legendtext"> >20 years </span> </div>')



// ############# RESIZE ################
    d3.select(window).on('resize', resize); 

    function resize() {
    // update width
    width = parseInt(d3.select('#' + location).style('width'), 10);
    width = width - margin.left - margin.right;

    // resize the chart
    x.range([0, width]); 
    d3.select(chart.node().parentNode)
        .style('height', (y.rangeExtent()[1] + margin.top + margin.bottom) + 'px')
        .style('width', (width + margin.left + margin.right) + 'px');

    chart.selectAll('rect.background')
        .attr('width', width);

    chart.selectAll('rect.percent')
        .attr('width', function(d) { return x(d.percent_portables); });

    chart.selectAll('line.median')
        .attr('x1', x(.01))
        .attr('x2', x(.01));


    // update axes
    chart.select('.x.axis.top').call(xAxis.orient('top'));
    chart.select('.x.axis.bottom').call(xAxis.orient('bottom'));

    }
}












