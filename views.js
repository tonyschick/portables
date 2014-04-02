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

var DistrictSelectorView = Backbone.View.extend({
	tagName: 'option',
	template: _.template($('#selection-template').html()),
	
	render: function(){
		this.$el.html( this.template(this.model.toJSON()));
		return this;
	}

})



	var left_selectorView = new LeftSelectionView({ collection: alldistricts });
		$('#left-district-selector').append(left_selectorView.render().el);

	var right_selectorView = new RightSelectionView({ collection: alldistricts });
		$('#right-district-selector').prepend('<p class="nerdbox">Compare it with another ...</p>')
		$('#right-district-selector').append(right_selectorView.render().el);


	var left_districtView = new DistrictView({ model: alldistricts.get('-')});
		$('#left-district').append(left_districtView.render().el);

	var right_districtView = new DistrictView({ model: alldistricts.get('-')});
		$('#right-district').append(right_districtView.render().el);



	// function triggered on left district selection
	$('#left-select-value').change( function() {	
		
		$('#left-district').empty(); //clear the div so we don't keep adding school districts
		left_district_selection = document.getElementById('left-select-value').value
		
		left_portablechart(left_district_selection, 'left-district');

		var left_districtView = new DistrictView({ model: alldistricts.get('' + left_district_selection)});
		$('#left-district').append(left_districtView.render().el);
	});

	// function triggered on right district selection
	$('#right-select-value').change( function() {

		$('#right-district').empty();
		right_district_selection = document.getElementById('right-select-value').value
		var right_districtView = new DistrictView({ model: alldistricts.get('' + right_district_selection)});
	
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
