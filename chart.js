function right_portablechart(selection, location){


    //var data = [ five_year_portables, twenty_year_portables, new_hvac ];

    var margin = {top: 30, right: 10, bottom: 30, left: 10}
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

    /*chart.append('g')
        .attr('class', 'x axis bottom')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis.orient('bottom'));
    */

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

/*
    bars.append('text')
        .text(function(d) { return d.district_name; })
        .attr('class', 'name')
        .attr('y', y.rangeBand() - 5)
        .attr('x', spacing);
*/    

    // add median ticks
    var median = d3.median(data, function(d) { return d.percent_portables; });

    d3.select('span.median').text(percent(median));

    bars.append('line')
        .attr('class', 'median')
        .attr('x1', x(.10))
        .attr('x2', x(.10))
        .attr('y1', 1)
        .attr('y2', y.rangeBand() - 1);

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


    //var data = [ five_year_portables, twenty_year_portables, new_hvac ];

    var margin = {top: 30, right: 10, bottom: 30, left: 10}
      , width = parseInt(d3.select('#' + location).style('width'), 10)
      , width = width - margin.left - margin.right
      , height = 100 // placeholder
      , barHeight = 20
      , spacing = 3
      , percent = d3.format('%');

    // scales and axes
    var x = d3.scale.linear()
        .range([width, 0])
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

    /*chart.append('g')
        .attr('class', 'x axis bottom')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis.orient('bottom'));
    */

    var bars = chart.selectAll('.bar')
        .data(data.filter(function(d){ return d.district_name == selection; }))
      	.enter()
		.append('g')
        .attr('class', 'bar')
        .attr('transform', function(d, i) { return 'translate(0,'  + y(i) + ')'; })

    bars.append('rect')
        .attr('class', 'percent')
        
        .attr('height', y.rangeBand())
        .attr('width', width);

    bars.append('rect')
        .attr('class', 'background')
        .attr('height', y.rangeBand())
        .attr('width', function(d) { return x(d.percent_portables); })

/*
    bars.append('text')
        .text(function(d) { return d.district_name; })
        .attr('class', 'name')
        .attr('y', y.rangeBand() - 5)
        .attr('x', spacing);
*/    

    // add median ticks
    var median = d3.median(data, function(d) { return d.percent_portables; });

    d3.select('span.median').text(percent(median));

    bars.append('line')
        .attr('class', 'median')
        .attr('x1', x(.10))
        .attr('x2', x(.10))
        .attr('y1', 1)
        .attr('y2', y.rangeBand() - 1);

    // resize
    d3.select(window).on('resize', resize); 

    function resize() {
    // update width
    width = parseInt(d3.select('#' + location).style('width'), 10);
    width = width - margin.left - margin.right;

    // resize the chart
    x.range([width, 0]); 
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
