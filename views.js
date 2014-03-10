
var DistrictlistView = Backbone.View.extend({
    //tagName: 'ul',
    render: function(){
        this.collection.each(function(district){
            var districtView = new DistrictView({ model: district });
            this.$el.append(districtView.render().el); // calling render method manually..
        }, this);
        return this; // returning this for chaining..
    }
});

var DistrictView = Backbone.View.extend({
        //tagName: 'div',
        template: _.template($('#district-template').html()),
           //////////   initialize function is gone from there. So we need to call render method manually now..
        render: function(){
            this.$el.html( this.template(this.model.toJSON()));
            return this;  // returning this from render method..
        }
});



var SelectionView = Backbone.View.extend({
	tagName: 'select',
	id: 'select-value',
    render: function(){
        this.collection.each(function(district){
            var selectorView = new DistrictSelectorView({ model: district });
            this.$el.append(selectorView.render().el); // calling render method manually..
        }, this);
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

$(document).ready( function() {

var selectorView = new SelectionView({ collection: alldistricts });
	$('#district-selector').append(selectorView.render().el);

$('#select-value').change( function() {	
	$("#content").empty();
	user_selection = document.getElementById('select-value').value
	console.log(String(user_selection));
	var districtView = new DistrictView({ model: alldistricts.get("" + user_selection)});
	$('#content').append(districtView.render().el);

});

 

});








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
