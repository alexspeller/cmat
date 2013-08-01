var ModelBase = require('./model_base');

var Objective = ModelBase.extend({
  current: DS.attr('boolean'),
  genusTypeId: DS.attr('string'),
  description: DS.attr('description'),
  displayName: DS.attr('displayName')
});

var adapter = DS.Adapter.extend({
  find: function(store, type, id) {
    $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebank/'+id).then( function(json) {
      store.load(type, json);
    });
  },
  findQuery: function(store, type, since) {
    $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebank').then( function(json) {
      console.log(json);
      store.loadMany(type, json);
    });
  }
});

adapter.registerTransform('description', {
  serialize: function(value) {
    return Em.isNone(value) ? {} : value;
  },

  deserialize: function(value) {
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

App.Store.registerAdapter('App.Objective', adapter);

module.exports = Objective;
