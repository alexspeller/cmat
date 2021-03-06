var Cmat = require('../classes/cmat');
var MapView = Ember.View.extend({
  tagName: 'div',
  templateName: 'map_view',
  map: null,
  toolbar: null,

  didInsertElement: function(){
    var map = this.get('controller');
    Cmat.boot(map, map.toolbar, map.node);
  }

});

Ember.Handlebars.helper('map', MapView);

module.exports = MapView;
