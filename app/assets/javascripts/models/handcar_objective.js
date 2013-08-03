var ModelBase = require('./model_base');

var HandcarObjective = ModelBase.extend({
  genusTypeId: DS.attr('string'),
  description: DS.attr('description'),
  displayName: DS.attr('displayName'),
});

var adapter = DS.RESTAdapter.extend({
  findQuery: function(store, type, query, recordArray) {
    var adapter = this;

    var json   = {},
        root   = this.rootForType(type),
        plural = this.pluralize(root);

    var url = 'https://oki-dev.mit.edu/handcar/services/learning/objectivebanks/'+query['objectivebank']+'/objectives';

    if(query['children'])
    {
      url = url + '/' + query['objective'] + '/children'
    }

    $.getJSON(url).then(function(pre_json){
      json[plural] = pre_json;
      console.log('Handcar objective didFindQuery');
      adapter.didFindQuery(store, type, json, recordArray);
    }).then(null, DS.rejectionHandler);
  }
});

adapter.registerTransform('description', {
  serialize: function(value) {
    console.log('Handcar objective');
    return Em.isNone(value) ? {} : value;
  },

  deserialize: function(value) {
    console.log('Handcar objective');
    return Em.isNone(value) ? {} : value;
  }
});

adapter.registerTransform('displayName', {
  serialize: function(value) {
    return Em.isNone(value) ? {} : value;
  },

  deserialize: function(value) {
    return Em.isNone(value) ? {} : value;
  }
});

App.Store.registerAdapter('App.HandcarObjective', adapter);

module.exports = HandcarObjective;
