// ################# MODELS ##############
DistrictModel = Backbone.Model.extend({});
district = new DistrictModel({"name": "Porable High School", "desc": "School with lots of portables"});
DistrictCollection = Backbone.Collection.extend({
  model: DistrictModel

});

alldistricts = new DistrictCollection();
alldistricts.reset(data);

//Loading districts into variables one by one
beaverton = new DistrictModel({"district_name":"Beaverton","classrooms":2127,"portable_classrooms":211,"percent_portables":0.099200752,"five_year_portables":0,"twenty_year_portables":82,"new_hvac":null,"percent_twenty":0.388625592,"inventory":"Yes","status":"Provided","bond":"5/1/2014","status":"Planned","max_life":"No","green_purchasing":"No","ventilation":"No","energy_conservation":"No"});
bend = new DistrictModel({"district_name":"Bend La-Pine","classrooms":675,"portable_classrooms":12,"percent_portables":0.02,"five_year_portables":3,"twenty_year_portables":0,"new_hvac":null,"percent_twenty":0,"inventory":"","status":"","bond":"5/1/2013","status":"Passed","max_life":"No","green_purchasing":"Yes","ventilation":"No","energy_conservation":"Yes"});
eugene = new DistrictModel({"district_name":"Eugene","classrooms":null,"portable_classrooms":19,"percent_portables":0.01,"five_year_portables":null,"twenty_year_portables":15,"new_hvac":null,"percent_twenty":0.789473684,"inventory":"No","status":"","bond":"5/1/2013","status":"Passed","max_life":"No","green_purchasing":"No","ventilation":"No","energy_conservation":"No"});
gresham = new DistrictModel({"district_name":"Gresham-Barlow","classrooms":760,"portable_classrooms":38,"percent_portables":0.05,"five_year_portables":10,"twenty_year_portables":20,"new_hvac":null,"percent_twenty":0.526315789,"inventory":"Yes","status":"Provided","bond":"11/1/2013","status":"Failed","max_life":"No","green_purchasing":"No","ventilation":"No","energy_conservation":"No"});
hillsboro = new DistrictModel({"district_name":"Hillsboro","classrooms":1000,"portable_classrooms":50,"percent_portables":0.05,"five_year_portables":0,"twenty_year_portables":39,"new_hvac":0,"percent_twenty":0.78,"inventory":"Yes","status":"","bond":"11/1/2013","status":"Failed","max_life":"No","green_purchasing":"Yes","ventilation":"No","energy_conservation":"Yes"});
medford = new DistrictModel({"district_name":"Medford","classrooms":200,"portable_classrooms":2,"percent_portables":0.01,"five_year_portables":0,"twenty_year_portables":2,"new_hvac":null,"percent_twenty":1,"inventory":"No","status":"","bond":"6/29/1909","status":"Passed","max_life":"No","green_purchasing":"No","ventilation":"No","energy_conservation":"No"});
clackamas = new DistrictModel({"district_name":"N Clackamas","classrooms":343,"portable_classrooms":12,"percent_portables":0.034985423,"five_year_portables":null,"twenty_year_portables":12,"new_hvac":null,"percent_twenty":1,"inventory":"No","status":"","bond":"","status":"","max_life":"No","green_purchasing":"No","ventilation":"No","energy_conservation":"No"});
portland = new DistrictModel({"district_name":"Portland","classrooms":3310,"portable_classrooms":76,"percent_portables":0.02,"five_year_portables":11,"twenty_year_portables":48,"new_hvac":0,"percent_twenty":0.631578947,"inventory":"","status":"","bond":"11/1/2012","status":"Passed","max_life":"No","green_purchasing":"See Response","ventilation":"See Response","energy_conservation":"See Response"});
salem = new DistrictModel({"district_name":"Salem-Keizer","classrooms":1818,"portable_classrooms":91,"percent_portables":0.05,"five_year_portables":16,"twenty_year_portables":18,"new_hvac":null,"percent_twenty":0.197802198,"inventory":"","status":"","bond":"7/1/1909","status":"Passed","max_life":"Ð","green_purchasing":"Ð","ventilation":"Ð","energy_conservation":"Ð"});
tigard = new DistrictModel({"district_name":"Tigard Tualatin","classrooms":600,"portable_classrooms":30,"percent_portables":0.05,"five_year_portables":0,"twenty_year_portables":7,"new_hvac":4,"percent_twenty":0.233333333,"inventory":"Yes","status":"Provided","bond":"5/1/2011","status":"Passed","max_life":"No","green_purchasing":"No","ventilation":"Yes","energy_conservation":"Yes"});
edmonds = new DistrictModel({"district_name":"Edmonds","classrooms":1045,"portable_classrooms":5,"percent_portables":0.004784689,"five_year_portables":0,"twenty_year_portables":5,"new_hvac":null,"percent_twenty":1,"inventory":"","status":"","bond":"","status":"","max_life":"Yes","green_purchasing":"No","ventilation":"No","energy_conservation":"Yes"});
evergreen = new DistrictModel({"district_name":"Evergreen","classrooms":1660,"portable_classrooms":350,"percent_portables":0.210843373,"five_year_portables":5,"twenty_year_portables":152,"new_hvac":null,"percent_twenty":0.434285714,"inventory":"Yes","status":"Not Provided","bond":"2/1/2012","status":"Passed","max_life":"No","green_purchasing":"No","ventilation":"Yes","energy_conservation":"Yes"});
federalway = new DistrictModel({"district_name":"Federal Way","classrooms":2022,"portable_classrooms":89,"percent_portables":0.0435,"five_year_portables":5,"twenty_year_portables":34,"new_hvac":null,"percent_twenty":0.382022472,"inventory":"","status":"","bond":"","status":"","max_life":"No","green_purchasing":"No","ventilation":"No","energy_conservation":"No"});
kent = new DistrictModel({"district_name":"Kent","classrooms":1640,"portable_classrooms":164,"percent_portables":0.1,"five_year_portables":10,"twenty_year_portables":65,"new_hvac":null,"percent_twenty":0.396341463,"inventory":"Yes","status":"Not Provided","bond":"2/1/2011","status":"Passed","max_life":"No","green_purchasing":"No","ventilation":"No","energy_conservation":"No"});
lakewashington = new DistrictModel({"district_name":"Lake Washington","classrooms":1184,"portable_classrooms":148,"percent_portables":0.125,"five_year_portables":48,"twenty_year_portables":78,"new_hvac":0,"percent_twenty":0.527027027,"inventory":"","status":"","bond":"2/1/2014","status":"Planned","max_life":"No","green_purchasing":"No","ventilation":"See Response","energy_conservation":"See Response"});
puyallup = new DistrictModel({"district_name":"Puyallup","classrooms":1025,"portable_classrooms":205,"percent_portables":0.2,"five_year_portables":2,"twenty_year_portables":116,"new_hvac":110,"percent_twenty":0.565853659,"inventory":"Yes","status":"Provided","bond":"","status":"See Response","max_life":"Yes","green_purchasing":"Yes","ventilation":"Yes","energy_conservation":"Yes"});
seattle = new DistrictModel({"district_name":"Seattle","classrooms":2768,"portable_classrooms":191,"percent_portables":0.069,"five_year_portables":44,"twenty_year_portables":96,"new_hvac":null,"percent_twenty":0.502617801,"inventory":"","status":"","bond":"7/6/1909","status":"Passed","max_life":"No","green_purchasing":"Yes","ventilation":"No","energy_conservation":"Yes"});
spokane = new DistrictModel({"district_name":"Spokane","classrooms":1681,"portable_classrooms":74,"percent_portables":0.044,"five_year_portables":2,"twenty_year_portables":72,"new_hvac":22,"percent_twenty":0.972972973,"inventory":"","status":"","bond":"","status":"","max_life":"No","green_purchasing":"No","ventilation":"No","energy_conservation":"See Response"});
tacoma = new DistrictModel({"district_name":"Tacoma","classrooms":null,"portable_classrooms":null,"percent_portables":null,"five_year_portables":null,"twenty_year_portables":null,"new_hvac":null,"percent_twenty":null,"inventory":"","status":"","bond":"","status":"","max_life":"","green_purchasing":"","ventilation":"","energy_conservation":""});
vancouver = new DistrictModel({"district_name":"Vancouver","classrooms":1120,"portable_classrooms":65,"percent_portables":0.058,"five_year_portables":16,"twenty_year_portables":25,"new_hvac":50,"percent_twenty":0.384615385,"inventory":"","status":"","bond":"","status":"","max_life":"No","green_purchasing":"Yes","ventilation":"Yes","energy_conservation":"Yes"});

// ############### VIEWS ##################
DistrictlistView = Backbone.View.extend({

	tagname: 'div',
          template: _.template($('#district-template').html()),

          render: function() {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
          }

});

var DistrictlistView = Backbone.View.extend({
    tagName: 'ul',
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

var districtView = new DistrictlistView({ collection: alldistricts });

// ################### ROUTER ################ 
(function(){

Router = Backbone.Router.extend({
    routes: {
        '': 'index'
    },
    index: function(){
        $(document.body).append("Index route has been called..");
    }
});

new Router();
Backbone.history.start();

})();
