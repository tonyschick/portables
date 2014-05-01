$(document).ready( function() {

var DistrictView = Backbone.View.extend({
        //tagName: 'div',
        //id: 'districtview',
        template: _.template($('#district-template').html()),
           //////////   initialize function is gone from there. So we need to call render method manually now..
        render: function(){
            this.$el.html( this.template(this.model.toJSON()));

            return this;  // returning this from render method..
        }
});

var DistrictSelectorView = Backbone.View.extend({
	//el: '#left-select-value',
	tagName: 'option',
	template: _.template($('#selection-template').html()),
	
	render: function(){
		this.$el.html( this.template(this.model.toJSON()));
		return this;
	}

})

var LeftSelectionView = Backbone.View.extend({
	tagName: 'select',
	id: 'left-select-value',
    render: function(){
        this.collection.each(function(district){
            var selectorView = new DistrictSelectorView({ model: district });
            this.$el.append(selectorView.render().el); // calling render method manually..
        }, this);

        classrooms = this.classrooms
        portable_classrooms = this.portable_classrooms
        five_year_portables = this.five_year_portables
        twenty_year_portables = this.twenty_year_portables
        new_hvac = this.new_hvac

        return this; // returning this for chaining..
    }

})

var RightSelectionView = Backbone.View.extend({
	tagName: 'select',
	id: 'right-select-value',
    render: function(){
        this.collection.each(function(district){
            var selectorView = new DistrictSelectorView({ model: district });
            this.$el.append(selectorView.render().el); // calling render method manually..
        }, this);

        classrooms = this.classrooms
        portable_classrooms = this.portable_classrooms
        five_year_portables = this.five_year_portables
        twenty_year_portables = this.twenty_year_portables
        new_hvac = this.new_hvac

        return this; // returning this for chaining..
    }

})




	var left_selectorView = new LeftSelectionView({ collection: alldistricts });
		$('#left-district-selector').append(left_selectorView.render().el);

	var right_selectorView = new RightSelectionView({ collection: alldistricts });
		$('#right-district-selector').append(right_selectorView.render().el);


	var left_districtView = new DistrictView({ model: alldistricts.get('-')});
		$('#left-district').append(left_districtView.render().el);

	var right_districtView = new DistrictView({ model: alldistricts.get('-')});
		$('#right-district').append(right_districtView.render().el);



	// function triggered on left district selection
	$('#left-select-value').change( function() {	
		
		// grab the selection value
		$('#left-district').empty(); //clear the div so we don't keep adding school districts
		left_district_selection = document.getElementById('left-select-value').value
		console.log(left_district_selection)

		
		
		// add the map container
		$('#left-district').append('<div id="left-district-map" style="height: 200px; width: 50%;">');


		// add the map to the map container
		    var map = L.map('left-district-map', {
		    	scrollWheelZoom: false
		    }
		    	
		    	).setView([47.555732, -122.473869], 10);

    		L.tileLayer('http://{s}.tile.cloudmade.com/{key}/22677/256/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2012 CloudMade',
                key: 'bd87c264ecdf471382954c1cade171b5'
            }).addTo(map);
  
		    L.geoJson(district_boundaries, {
		      filter: function(feature, layer) {
		        return feature.properties['NAME'] == left_district_selection ;
		      }
		    }).addTo(map);

		// add all the crazy charts!
		left_portablechart(left_district_selection, 'left-district');

		// add the district template which will include scorecard
		var left_districtView = new DistrictView({ model: alldistricts.get('' + left_district_selection)});
		$('#left-district').append(left_districtView.render().el);

		// add district name
		$('#left-district #district_name').append('<h3>' + left_district_selection + '</h3>');
	});

// REPEAT FOR THE RIGHT SIDE !! 

	// function triggered on right district selection
	$('#right-select-value').change( function() {

		$('#right-district').empty();
		right_district_selection = document.getElementById('right-select-value').value
		var right_districtView = new DistrictView({ model: alldistricts.get('' + right_district_selection)});
		$('#right-district').append('<h3>' + right_district_selection + '</h3>');
	
		// add the map container
		$('#right-district').append('<div id="right-district-map" style="height: 200px; width: 50%;">');


		// add the map to the map container
		    var map = L.map('right-district-map').setView([47.555732, -122.473869], 10);

    		L.tileLayer('http://{s}.tile.cloudmade.com/{key}/22677/256/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2012 CloudMade',
                key: 'bd87c264ecdf471382954c1cade171b5'
            }).addTo(map);
  
		    L.geoJson(district_boundaries, {
		      filter: function(feature, layer) {
		        return feature.properties['NAME'] == right_district_selection ;
		      }
		    }).addTo(map);

		right_portablechart(right_district_selection, 'right-district');
		
		$('#right-district').append(right_districtView.render().el);

	});

 



}); // end document ready function







// DISTRICT BY DISTRICT
/*
$(document).ready( function() {
        

        var puyallupView = new DistrictlistView({model: puyallup});

		console.log(puyallupView.el)
		$("#content").append( puyallupView.render().el );

		var beavertonView = new DistrictlistView({model: beaverton});

		console.log(beavertonView.el)
		$("#content").append( beavertonView.render().el );

      });

*/
